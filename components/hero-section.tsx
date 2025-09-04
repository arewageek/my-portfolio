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
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pb-24"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.12) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #0a0a0f 100%)
        `,
      }}
    >
      {/* Minimal geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left triangle */}
        <div
          className="absolute top-20 left-10 w-32 h-32 opacity-5"
          style={{
            background: "linear-gradient(45deg, #8b5cf6, transparent)",
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
            animation: "gentleFloat 12s ease-in-out infinite",
          }}
        />

        {/* Bottom right circle */}
        <div
          className="absolute bottom-20 right-16 w-24 h-24 rounded-full bg-gradient-to-r from-pink-500/5 to-purple-500/5 blur-sm"
          style={{ animation: "gentleFloat 10s ease-in-out infinite reverse" }}
        />

        {/* Center diamond */}
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 opacity-10 rotate-45 bg-gradient-to-br from-purple-400/20 to-pink-400/20"
          style={{ animation: "gentleFloat 8s ease-in-out infinite" }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Simplified floating orbs - more subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div
          className="absolute top-1/4 left-1/4 w-48 h-48 lg:w-64 lg:h-64 bg-purple-500/8 rounded-full blur-3xl"
          style={{
            transform: shouldApplyMouseEffects()
              ? `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
              : "translate(0px, 0px)",
            animation: "gentleFloat 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 lg:w-48 lg:h-48 bg-pink-500/8 rounded-full blur-3xl"
          style={{
            transform: shouldApplyMouseEffects()
              ? `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`
              : "translate(0px, 0px)",
            animation: "gentleFloat 10s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 lg:space-y-10 text-center lg:text-left ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 glass-card rounded-full text-purple-300 text-xs lg:text-sm font-medium shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 lg:mr-3 animate-pulse shadow-lg shadow-green-400/50" />
              {brandConfig.hero.status}
              <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 ml-2 text-purple-400" />
            </div>

            {/* Name & Title */}
            <div className="space-y-4 lg:space-y-6">
              <div className="space-y-2 lg:space-y-3">
                {/* <p className="text-gray-400 text-lg lg:text-2xl font-medium tracking-wide">
                  {brandConfig.hero.greeting}
                </p> */}
                <h1 className="text-8xl md:text-9xl font-black leading-none tracking-tight">
                  <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                    {brandConfig.name.split(" ")[0]}
                  </span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
                    {brandConfig.name.split(" ")[1]}
                  </span>
                </h1>
              </div>

              {/* Professional Title - Clean and minimal */}
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-3 lg:space-x-4">
                  <div className="w-8 lg:w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    {/* <Code className="w-5 h-5 lg:w-6 lg:h-6 text-purple-400" /> */}
                    <span className="text-lg lg:text-2xl font-bold text-white">{brandConfig.title}</span>
                  </div>
                  <div className="w-8 lg:w-12 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                </div>
                {/* <div className="flex items-center justify-center lg:justify-start space-x-3 lg:space-x-4">
                  <div className="w-6 lg:w-8 h-0.5 bg-gradient-to-r from-pink-500/60 to-purple-500/60 rounded-full" />
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-pink-400" />
                    <span className="text-base lg:text-lg font-medium text-gray-300">{brandConfig.subtitle}</span>
                  </div>
                  <div className="w-6 lg:w-8 h-0.5 bg-gradient-to-r from-purple-500/60 to-pink-500/60 rounded-full" />
                </div> */}
              </div>
            </div>

            {/* Enhanced Description */}
            {/* <div className="space-y-4 lg:space-y-6">
              <p className="text-xl lg:text-3xl text-gray-200 leading-relaxed font-light">
                <span className="text-purple-400 font-semibold">Blockchain is a tool, not a barrier.</span>
              </p>
              <p className="text-lg lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {brandConfig.hero.description}
              </p>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 lg:gap-6 pt-4 lg:pt-6">
              <Link href="/projects">
                <Button
                  variant="primary"
                  size="xl"
                  className="w-full sm:w-auto px-6 lg:px-10 py-4 lg:py-5 text-lg lg:text-xl font-semibold"
                >
                  <span className="relative z-10">{brandConfig.hero.cta.primary}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto px-6 lg:px-10 py-4 lg:py-5 text-lg lg:text-xl font-semibold"
                >
                  {brandConfig.hero.cta.secondary}
                </Button>
              </Link>
            </div>

            {/* Social Links with proper bottom spacing */}
            <div className="flex justify-center lg:justify-start space-x-4 lg:space-x-6 pt-6 lg:pt-8 pb-8 lg:pb-12">
              {brandConfig.socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl glass-card ${color} transition-all duration-300 hover:transform hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30 group`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:rotate-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - PFP - Hidden on small mobile */}
          <div className={`relative hidden sm:block ${isLoaded ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="relative w-full max-w-lg lg:max-w-2xl mx-auto">
              <div className="relative">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] mx-auto">
                  {/* Cleaner border effects */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-600/20 rounded-2xl lg:rounded-[3rem] opacity-60 blur-sm"
                    style={{
                      animation: "gentleFloat 8s ease-in-out infinite",
                      transform: shouldApplyMouseEffects() ? `rotate(${mousePosition.x * 0.05}deg)` : "rotate(0deg)",
                    }}
                  />

                  {/* PFP Image */}
                  <div className="relative w-full h-full rounded-2xl lg:rounded-[3rem] overflow-hidden border border-purple-400/40 shadow-2xl shadow-purple-500/30 backdrop-blur-sm hover:shadow-3xl hover:shadow-purple-500/40 transition-all duration-500 group">
                    <img
                      src="/pfp.png"
                      alt={`${brandConfig.name} - ${brandConfig.title}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{
                        transform: shouldApplyMouseEffects()
                          ? `translate(${mousePosition.x / 8}px, ${mousePosition.y / 8}px) scale(1.02)`
                          : "scale(1.02)",
                      }}
                    />

                    {/* Enhanced overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-pink-900/15 group-hover:from-purple-900/20 group-hover:to-pink-900/10 transition-all duration-500" />

                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 rounded-2xl lg:rounded-[3rem] ring-1 ring-inset ring-white/10" />
                  </div>
                </div>

                {/* Enhanced achievement badges */}
                <div
                  className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 px-3 py-2 lg:px-4 lg:py-2 glass-card bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-xl lg:rounded-2xl text-white font-bold text-xs lg:text-sm shadow-2xl border border-purple-400/30 hover:shadow-3xl hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-1"
                  style={{ animation: "gentleFloat 7s ease-in-out infinite" }}
                >
                  🚀 {brandConfig.projects.length} Projects
                </div>
                <div
                  className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 px-3 py-2 lg:px-4 lg:py-2 glass-card bg-gradient-to-r from-pink-600/80 to-purple-600/80 rounded-xl lg:rounded-2xl text-white font-bold text-xs lg:text-sm shadow-2xl border border-pink-400/30 hover:shadow-3xl hover:shadow-pink-500/40 transition-all duration-300 hover:-translate-y-1"
                  style={{ animation: "gentleFloat 9s ease-in-out infinite reverse" }}
                >
                  ⚡ {brandConfig.stats.experience} Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div
            className="flex flex-col items-center space-y-2"
            style={{ animation: "gentleFloat 4s ease-in-out infinite" }}
          >
            <span className="text-gray-400 text-sm font-medium tracking-wide">Discover more</span>
            <div className="w-6 h-10 border-2 border-purple-400/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gentleFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  )
}
