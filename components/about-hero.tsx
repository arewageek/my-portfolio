"use client"

import { useEffect, useRef, useState } from "react"
import { brandConfig } from "@/lib/brand-config"

export function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current && window.innerWidth > 768) {
        // Only on desktop
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        })
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden px-4 sm:px-6 lg:px-8 bg-black"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-[100px]"
          style={{
            transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center space-y-12 lg:space-y-16">
          <div className={`space-y-8 lg:space-y-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-none text-white/40 text-[10px] uppercase tracking-[0.3em] font-light mb-4">
              Behind the code
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase">
              Meet
              <span className="block text-primary">The Geek</span>
            </h1>

            <p className="text-lg lg:text-2xl text-white/40 leading-relaxed max-w-3xl mx-auto italic font-light">
              {brandConfig.about.intro}
            </p>
          </div>
          
          <div className={`flex justify-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
            <div className="flex items-center space-x-3 px-8 py-4 bg-white/5 border border-white/5 rounded-none">
              <div className="w-2 h-2 bg-primary rounded-none shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
              <span className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px]">Available for work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-4 opacity-20">
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  )
}
