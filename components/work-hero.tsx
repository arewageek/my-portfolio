"use client"

import { useEffect, useRef, useState } from "react"
import { Building, Users, Code, TrendingUp } from "lucide-react"
import { brandConfig } from "@/lib/brand-config"

export function WorkHero() {
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

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{
        background: `
          radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.08) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #0a0a0f 100%)
        `,
      }}
    >
      {/* Floating orbs - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-purple-500/5 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            animation: "gentleFloat 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 lg:w-80 lg:h-80 bg-pink-500/5 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
            animation: "gentleFloat 12s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center space-y-12 lg:space-y-16">
          <div className={`space-y-6 lg:space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center px-4 lg:px-8 py-2 lg:py-4 bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-full text-purple-400 text-xs lg:text-sm font-medium">
              Professional Experience
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-9xl font-black text-white leading-tight">
              Where I've{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Built
              </span>
            </h1>

            <p className="text-lg lg:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              From startups to established companies, I've helped build the future of blockchain technology
            </p>
          </div>

          {/* Quick overview stats */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            {[
              { icon: Building, label: "Companies", value: brandConfig.stats.companies },
              { icon: Users, label: "Team Members", value: brandConfig.stats.teamMembers },
              { icon: Code, label: "Projects Delivered", value: brandConfig.stats.projects },
              { icon: TrendingUp, label: "Total Value Created", value: brandConfig.stats.tvl },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 lg:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl lg:rounded-3xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105"
                style={{ animation: `gentleFloat 8s ease-in-out infinite ${index * 0.5}s` }}
              >
                <div className="space-y-3 lg:space-y-4">
                  <div className="p-2 lg:p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl lg:rounded-2xl w-fit mx-auto">
                    <stat.icon className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 font-medium text-xs lg:text-base">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
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
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  )
}
