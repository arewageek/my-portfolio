"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced floating geometric shapes with parallax */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-full animate-gentle-float shadow-2xl shadow-purple-500/20"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          animation: "gentleFloat 8s ease-in-out infinite"
        }}
      />

      <div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-pink-600/10 rounded-lg rotate-45 shadow-2xl shadow-pink-500/20"
        style={{
          transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * 0.03}px) rotate(45deg)`,
          animation: "gentleFloat 10s ease-in-out infinite reverse"
        }}
      />

      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-purple-400/25 to-purple-500/15 rounded-full shadow-xl shadow-purple-400/30"
        style={{
          transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * -0.025}px)`,
          animation: "gentleFloat 12s ease-in-out infinite"
        }}
      />

      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-pink-500/10 rounded-lg rotate-12 shadow-2xl shadow-pink-400/20"
        style={{
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px) rotate(12deg)`,
          animation: "gentleFloat 9s ease-in-out infinite"
        }}
      />

      {/* Enhanced gradient orbs with better blur and animation */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-pink-500/20 rounded-full blur-3xl opacity-60"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          animation: "gentleFloat 15s ease-in-out infinite"
        }}
      />

      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/25 to-purple-500/20 rounded-full blur-3xl opacity-50"
        style={{
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
          animation: "gentleFloat 18s ease-in-out infinite reverse"
        }}
      />

      {/* Additional subtle elements */}
      <div
        className="absolute top-1/2 left-1/3 w-6 h-6 bg-purple-400/30 rounded-full shadow-lg shadow-purple-400/50"
        style={{
          transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px)`,
          animation: "gentleFloat 7s ease-in-out infinite"
        }}
      />

      <div
        className="absolute top-3/4 right-1/3 w-8 h-8 bg-pink-400/25 rounded-full shadow-lg shadow-pink-400/40"
        style={{
          transform: `translate(${mousePosition.x * -0.035}px, ${mousePosition.y * 0.035}px)`,
          animation: "gentleFloat 11s ease-in-out infinite reverse"
        }}
      />
    </div>
  )
}
