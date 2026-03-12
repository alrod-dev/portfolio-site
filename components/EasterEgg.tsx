'use client'

import { useEffect, useState, useCallback } from 'react'

// Konami Code: up up down down left right left right b a
const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA',
]

export function EasterEgg() {
  const [progress, setProgress] = useState(0)
  const [activated, setActivated] = useState(false)
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    color: string
    size: number
    angle: number
    speed: number
    spin: number
  }>>([])

  const createConfetti = useCallback(() => {
    const colors = ['#06b6d4', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899']
    const newParticles = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * 200,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 4 + Math.random() * 8,
      angle: Math.random() * 360,
      speed: 2 + Math.random() * 4,
      spin: (Math.random() - 0.5) * 10,
    }))
    setParticles(newParticles)
    setActivated(true)

    setTimeout(() => {
      setActivated(false)
      setParticles([])
    }, 4000)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activated) return

      if (e.code === KONAMI_CODE[progress]) {
        const next = progress + 1
        setProgress(next)

        if (next === KONAMI_CODE.length) {
          setProgress(0)
          createConfetti()
        }
      } else {
        setProgress(e.code === KONAMI_CODE[0] ? 1 : 0)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [progress, activated, createConfetti])

  if (!activated) return null

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* Message */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center animate-bounce">
        <p className="text-4xl md:text-6xl font-bold bg-gradient-text select-none">
          Achievement Unlocked!
        </p>
        <p className="text-lg text-gray-400 mt-2 select-none">
          You know the Konami Code. Respect.
        </p>
      </div>

      {/* Confetti */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute confetti-particle"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
            borderRadius: '2px',
            transform: `rotate(${p.angle}deg)`,
            animation: `confetti-fall ${2 + Math.random() * 2}s ease-in forwards`,
            animationDelay: `${Math.random() * 0.5}s`,
          }}
        />
      ))}
    </div>
  )
}
