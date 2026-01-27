"use client"

import { useState, useRef, useEffect } from "react"
import { Target, Users, Zap, Shield } from "lucide-react"

export function AboutMission() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const principles = [
    {
      icon: Users,
      title: "User-First Design",
      description: "Technology should serve people, not confuse them",
    },
    {
      icon: Zap,
      title: "Simplicity",
      description: "The best solutions are often the simplest ones",
    },
    {
      icon: Shield,
      title: "Security Always",
      description: "Build systems people can trust with their assets",
    },
    {
      icon: Target,
      title: "Real Impact",
      description: "Focus on solving actual problems, not just cool tech",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Mission statement */}
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-none text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
                  Objective
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                My Core
                <span className="block text-primary">Philosophy</span>
              </h2>
            </div>

            <div className="text-2xl lg:text-4xl text-white/40 leading-relaxed max-w-5xl mx-auto italic font-light">
              Designing decentralized systems that integrate seamlessly into real-world workflows, engineered to be modular and scalable.
            </div>

            <div className="max-w-3xl mx-auto space-y-6 text-[10px] uppercase font-bold tracking-[0.3em] text-white/20">
              <p>
                A priority shift: Putting the user first in the development process.
              </p>
            </div>
          </div>

          {/* Principles grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 border border-white/5 rounded-none transition-all duration-300 hover:border-primary/20 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-primary rounded-none flex items-center justify-center mx-auto transition-transform duration-300">
                    <principle.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-white mb-2 uppercase tracking-widest leading-none">{principle.title}</h3>
                    <p className="text-white/40 text-[9px] uppercase tracking-wider font-bold italic leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
