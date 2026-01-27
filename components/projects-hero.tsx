"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Sparkles, Rocket, Zap, Building, Users, TrendingUp } from "lucide-react"
import { brandConfig } from "@/lib/brand-config"

export function ProjectsHero() {
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
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-4 sm:px-6 lg:px-8 bg-black"
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
          <div className={`space-y-6 lg:space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-none text-white/40 text-[10px] uppercase tracking-[0.3em] font-light mb-8">
              Projects
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase">
               Recent
              <span className="block text-primary">Projects</span>
            </h1>

            <p className="text-lg lg:text-2xl text-white/40 leading-relaxed max-w-3xl mx-auto italic font-light">
                A collection of web and blockchain projects I've built.
            </p>
          </div>

          {/* Quick overview stats */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-2 mx-auto w-fit gap-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            {[
              { icon: Building, label: "Companies", value: brandConfig.companies.length },
              { icon: Code, label: "Live Projects", value: brandConfig.projects.length },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 border border-white/5 rounded-none w-48 lg:w-64 transition-all duration-500 hover:border-primary/20"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-primary rounded-none w-fit mx-auto">
                    <stat.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-3xl lg:text-4xl font-black text-white mb-1 uppercase tracking-tighter">{stat.value}</div>
                    <div className="text-white/20 font-bold text-[10px] uppercase tracking-widest">{stat.label}</div>
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
