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
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          {/* Left side - Text */}
          <div className="space-y-12 text-center lg:text-left">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-none text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
                About Me
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase">
                Arewa
                <span className="block text-primary">Geek</span>
              </h1>

              <p className="text-xl sm:text-2xl text-white/40 leading-relaxed max-w-2xl italic font-light">
                {brandConfig.about.intro}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-3 px-6 py-3 bg-white/5 border border-white/5 rounded-none">
                <div className="w-2 h-2 bg-primary rounded-none shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
                <span className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px]">Available for new projects</span>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-none blur-3xl opacity-30" />
              <img
                src="/pfp.png"
                alt="Arewa Geek"
                className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] object-cover rounded-none grayscale opacity-80 border border-white/10 shadow-2xl transition-all duration-1000 hover:grayscale-0 hover:opacity-100"
              />
              <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-primary flex items-center justify-center p-4">
                 <div className="text-xs font-black text-black leading-none uppercase tracking-tighter">Established<br/>2021</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
            <div className="w-px h-12 bg-white" />
        </div>
      </div>
    </section>
  )
}
