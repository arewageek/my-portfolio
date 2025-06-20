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
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
      style={{
        background: `
          linear-gradient(135deg, #0f0f23 0%, #1a0b2e 50%, #0f0f23 100%)
        `,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Mission statement */}
          <div className="text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              My{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>

            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              I build decentralized systems that real people actually want to use—designed to scale easily as they grow.
            </p>

            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                Too many blockchain projects are built for the technology first and the users second. I do the opposite.
              </p>
              <p>
                Every smart contract, interface, and system I build starts with one question: “How can we make this feel natural?”
              </p>
            </div>
          </div>

          {/* Principles grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{principle.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{principle.description}</p>
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
