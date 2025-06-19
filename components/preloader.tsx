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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-3/4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Logo/Initial */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto animate-pulse">
              {brandConfig.name.charAt(0)}
            </div>

            {/* Rotating ring */}
            <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-transparent border-t-purple-500 animate-spin mx-auto" />
          </div>
        </div>

        {/* Brand name */}
        <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          {brandConfig.name}
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm lg:text-base mb-8">{brandConfig.title}</p>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Loading</span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            </div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-1 mt-6">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
        </div>

        {/* Loading text */}
        <p className="text-gray-500 text-xs mt-4 animate-pulse">Preparing your experience...</p>
      </div>

      {/* Exit animation overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          progress >= 100 ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  )
}
