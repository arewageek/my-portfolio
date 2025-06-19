"use client"

import { useState, useEffect, useRef } from "react"

interface SkillBarProps {
  name: string
  level: number
}

export function SkillBar({ name, level }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedLevel, setAnimatedLevel] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [isVisible, level])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-purple-400 font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <div
          className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  )
}
