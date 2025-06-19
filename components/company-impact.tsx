"use client"

import { useState, useRef, useEffect } from "react"
import { TrendingUp, Users, Shield, Zap } from "lucide-react"

interface CompanyImpactProps {
  company: {
    impact: Array<{
      value: string
      label: string
      description: string
    }>
  }
}

export function CompanyImpact({ company }: CompanyImpactProps) {
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

  const icons = [TrendingUp, Users, Shield, Zap]
  const gradients = [
    "from-green-600 to-emerald-600",
    "from-blue-600 to-cyan-600",
    "from-purple-600 to-pink-600",
    "from-yellow-600 to-orange-600",
  ]

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Measurable{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real numbers that demonstrate the value created
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {company.impact.map((metric, index) => {
            const Icon = icons[index % icons.length]
            const gradient = gradients[index % gradients.length]

            return (
              <div
                key={index}
                className={`group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-6 text-center">
                  <div
                    className={`p-4 bg-gradient-to-r ${gradient} rounded-2xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <div className="text-4xl font-black text-white mb-2">{metric.value}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {metric.label}
                    </h3>
                    <p className="text-gray-400 text-sm">{metric.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
