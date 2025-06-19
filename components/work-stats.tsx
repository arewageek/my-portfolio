"use client"

import { useState, useRef, useEffect } from "react"
import { TrendingUp, Users, Code, Award } from "lucide-react"

export function WorkStats() {
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

  const stats = [
    {
      icon: TrendingUp,
      value: "$50M+",
      label: "Total Value Locked",
      description: "Across all protocols I've built",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      icon: Users,
      value: "200K+",
      label: "Users Served",
      description: "Active users across all platforms",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Code,
      value: "50+",
      label: "Smart Contracts",
      description: "Deployed to mainnet with zero hacks",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: Award,
      value: "100%",
      label: "Success Rate",
      description: "Projects delivered on time and budget",
      gradient: "from-yellow-600 to-orange-600",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 lg:px-8"
      style={{
        background: `
          linear-gradient(135deg, #0f0f23 0%, #1a0b2e 50%, #0f0f23 100%)
        `,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Impact{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Created
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Numbers that tell the story of real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-6 text-center">
                <div
                  className={`p-4 bg-gradient-to-r ${stat.gradient} rounded-2xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div>
                  <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {stat.label}
                  </h3>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
