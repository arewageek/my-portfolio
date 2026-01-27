"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown } from "lucide-react"
import { brandConfig } from "@/lib/brand-config"

export function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      {/* Subtle accent orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          {/* Left side - Text */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-secondary/50 border border-white/10 rounded-full text-gray-300 text-sm font-medium">
                👋 Nice to meet you
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
                I'm{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {brandConfig.name}
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                {brandConfig.about.intro}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-3 px-6 py-3 bg-secondary/30 border border-purple-500/30 rounded-2xl">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
                <span className="text-white font-medium">Available for projects</span>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl" />
              <img
                src="/pfp.png"
                alt="Arewa Geek"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl border border-gray-800 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-purple-400" />
        </div>
      </div>
    </section>
  )
}
