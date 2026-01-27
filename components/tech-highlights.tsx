"use client"

import { useState, useRef, useEffect } from "react"
import { Code2, Brain, Shield, Zap } from "lucide-react"

export function TechHighlights() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Brain,
      title: "AI Integration",
      description: "Leveraging cutting-edge AI to create smarter blockchain solutions",
      gradient: "from-purple-500 to-blue-500",
      stats: "95% accuracy",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Zero-vulnerability smart contracts with rigorous testing protocols",
      gradient: "from-pink-500 to-red-500",
      stats: "100% secure",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Lightning-fast applications optimized for scale and efficiency",
      gradient: "from-yellow-500 to-orange-500",
      stats: "2s load time",
    },
    {
      icon: Code2,
      title: "Full Stack",
      description: "End-to-end development from smart contracts to user interfaces",
      gradient: "from-green-500 to-teal-500",
      stats: "50+ projects",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-32 px-6 lg:px-8 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center px-6 py-3 bg-secondary/50 backdrop-blur-md border border-white/10 rounded-full text-gray-300 text-sm font-medium mb-6">
            Core Expertise
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Why Choose{" "}
            <span className="text-pink-400">
              Arewa Geek
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combining deep technical expertise with innovative thinking to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{
                animationDelay: `${index * 150}ms`,
                animation: isVisible ? `float 6s ease-in-out infinite ${index * 0.5}s` : undefined,
              }}
            >
              <div className="space-y-6">
                <div
                  className={`p-4 bg-gradient-to-r ${highlight.gradient} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300`}
                >
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{highlight.description}</p>
                  <div className="text-pink-400 font-bold text-lg">{highlight.stats}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}
