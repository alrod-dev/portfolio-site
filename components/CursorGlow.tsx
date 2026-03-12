'use client'

import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible])

  // Only render in dark mode and on desktop
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden dark:block"
      style={{
        background: isVisible
          ? `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.06), transparent 80%)`
          : 'transparent',
        transition: 'background 0.15s ease',
      }}
    />
  )
}
