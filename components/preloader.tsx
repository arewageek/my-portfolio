"use client"

import { useEffect, useState } from "react"
import { brandConfig } from "@/lib/brand-config"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Add a small delay before hiding
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15 + 5 // Random increment between 5-20
      })
    }, 100)

    // Minimum loading time of 2 seconds
    const minLoadTime = setTimeout(() => {
      if (progress < 100) {
        setProgress(100)
      }
    }, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(minLoadTime)
    }
  }, [progress])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Minimalist Spinner */}
        <div className="relative w-24 h-24 mb-6">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-[1px] border-white/5" />
          {/* Spinning Segment */}
          <div className="absolute inset-0 rounded-full border-[1px] border-transparent border-t-primary animate-spin" />
          
          {/* Initial in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-light tracking-widest text-white/40 uppercase">
              {brandConfig.name.charAt(0)}
            </span>
          </div>
        </div>

        {/* Minimalist Text */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-light">
            {brandConfig.name}
          </span>
          <div className="h-px w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>

      {/* Very subtle progress line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
