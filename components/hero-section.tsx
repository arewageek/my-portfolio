"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Twitter, Mail, Sparkles, Code, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { brandConfig } from "@/lib/brand-config"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Set client-side flag
    setIsClient(true)
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current && typeof window !== "undefined" && window.innerWidth > 768) {
        // Only on desktop and client-side
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 40,
          y: (e.clientY - rect.top - rect.height / 2) / 40,
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

  // Helper function to check if we should apply mouse effects
  const shouldApplyMouseEffects = () => {
    return isClient && typeof window !== "undefined" && window.innerWidth > 768
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pb-24 bg-black"
    >
      <div className="absolute inset-0 bg-grain opacity-10" />
      
      {/* Premium dark gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(0, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(255, 255, 255, 0.02) 0%, transparent 40%)
          `
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 lg:space-y-10 text-center lg:text-left ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/5 text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
              <div className="w-1.5 h-1.5 bg-primary rounded-none mr-3 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
              {brandConfig.hero.status}
            </div>

            {/* Name & Title */}
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter">
                <span className="block text-white">
                  {brandConfig.name.split(" ")[0]}
                </span>
                <span className="block text-primary">
                  {brandConfig.name.split(" ")[1]}
                </span>
              </h1>

              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="h-px flex-1 lg:flex-none lg:w-12 bg-white/10" />
                <span className="text-lg lg:text-2xl font-light tracking-wide text-white/60 uppercase italic">
                  {brandConfig.title}
                </span>
                <div className="h-px flex-1 lg:hidden bg-white/10" />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 lg:gap-6 pt-4 lg:pt-6">
              <Link href="/projects">
                <Button
                  variant="primary"
                  size="xl"
                  className="w-full sm:w-auto px-10 py-5 bg-primary text-black hover:bg-primary/90 rounded-none font-bold uppercase tracking-widest transition-all"
                >
                  {brandConfig.hero.cta.primary}
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto px-10 py-5 border-white/10 text-white hover:bg-white/5 rounded-none font-bold uppercase tracking-widest"
                >
                  {brandConfig.hero.cta.secondary}
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 pt-8">
              {brandConfig.socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-white/30 hover:text-primary transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - PFP */}
          <div className={`relative hidden sm:block ${isLoaded ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="relative w-full max-w-lg lg:max-w-xl mx-auto">
              <div className="relative aspect-square">
                {/* Visual Elements */}
                <div className="absolute -inset-4 border border-white/5 rounded-[2rem] lg:rounded-[4rem] animate-gentle-float" />
                <div className="absolute -inset-8 border border-white/[0.02] rounded-[3rem] lg:rounded-[6rem] animate-gentle-float-reverse" />

                {/* PFP Image Container */}
                <div className="relative w-full h-full rounded-[2rem] lg:rounded-[4rem] overflow-hidden border border-white/10 bg-zinc-900 group">
                  <img
                    src="/pfp.png"
                    alt={`${brandConfig.name}`}
                    className="w-full h-full object-cover group-hover:opacity-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-primary/5" />
                </div>

                {/* Engineering Badges */}
                <div className="absolute -top-4 -left-4 px-6 py-3 bg-black border border-white/10 text-[10px] uppercase tracking-[0.3em] font-bold text-primary shadow-2xl">
                  {brandConfig.projects.length} Projects
                </div>
                <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-black border border-white/10 text-[10px] uppercase tracking-[0.3em] font-bold text-white shadow-2xl">
                   Experience {brandConfig.stats.experience}Y
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary via-white/10 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes gentle-float-reverse {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(20px) rotate(-1deg); }
        }
        .animate-gentle-float { animation: gentle-float 15s ease-in-out infinite; }
        .animate-gentle-float-reverse { animation: gentle-float-reverse 12s ease-in-out infinite; }
      `}</style>
    </section>
  )
}