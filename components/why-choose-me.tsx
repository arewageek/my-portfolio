"use client"

import { useState, useRef, useEffect } from "react"
import { Brain, Shield, Zap } from "lucide-react"

export function WhyChooseMe() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }, // Reduced threshold
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const reasons = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description:
        "I don't just build blockchain apps—I make them intelligent. Every solution leverages cutting-edge AI to create smarter, more efficient experiences.",
      highlight: "95% accuracy in AI predictions",
      gradient: "from-purple-600 to-blue-600",
      bgGradient: "from-purple-500/10 to-blue-500/10",
    },
    {
      icon: Shield,
      title: "Security Obsessed",
      description:
        "Zero compromises on security. Every smart contract is battle-tested, audited, and built with security-first architecture.",
      highlight: "0 security vulnerabilities",
      gradient: "from-pink-600 to-red-600",
      bgGradient: "from-pink-500/10 to-red-500/10",
    },
    {
      icon: Zap,
      title: "Performance Fanatic",
      description:
        "Speed isn't optional—it's essential. I optimize every millisecond to deliver lightning-fast applications that users love.",
      highlight: "2s average load time",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/10",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-32 px-4 sm:px-6 lg:px-8"
      style={{
        background: `
          linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #1a0b2e 100%)
        `,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 lg:mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center px-4 lg:px-8 py-2 lg:py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full text-purple-300 text-xs lg:text-sm font-medium mb-6 lg:mb-8 shadow-lg shadow-purple-500/10">
            Why Choose Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-black text-white mb-6 lg:mb-8 leading-tight">
            What Makes Me{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Different
            </span>
          </h2>
          <p className="text-lg lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Three core principles that drive every project I work on
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative p-6 lg:p-10 rounded-2xl lg:rounded-3xl border border-white/10 transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                background: `linear-gradient(135deg, ${reason.bgGradient}, rgba(0,0,0,0.3))`,
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="space-y-6 lg:space-y-8">
                {/* Icon */}
                <div
                  className={`p-4 lg:p-6 bg-gradient-to-r ${reason.gradient} rounded-2xl lg:rounded-3xl w-fit group-hover:scale-110 transition-transform duration-500 shadow-2xl`}
                >
                  <reason.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6 group-hover:text-purple-300 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 lg:mb-8 text-base lg:text-lg">
                    {reason.description}
                  </p>

                  {/* Highlight metric */}
                  <div className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full mr-2 lg:mr-3 animate-pulse" />
                    <span className="text-purple-300 font-semibold text-sm lg:text-base">{reason.highlight}</span>
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
