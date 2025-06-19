"use client"

import { useState, useEffect } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className={`bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent ${className}`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
