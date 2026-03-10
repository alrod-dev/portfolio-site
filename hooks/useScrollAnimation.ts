'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true) // Default to visible for SSR

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Check if element is already in viewport
    const rect = element.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true)
      return
    }

    // Only animate elements that are truly off-screen
    setIsVisible(false)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin: '50px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
