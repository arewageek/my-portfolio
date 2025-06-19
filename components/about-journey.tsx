"use client"

import { useState, useRef, useEffect } from "react"
import { MapPin } from "lucide-react"

export function AboutJourney() {
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

  const milestones = [
    {
      year: "2021",
      title: "The Beginning",
      description:
        "Started my journey into blockchain development, fascinated by the potential of decentralized systems.",
      icon: "🌱",
      location: "Nigeria",
    },
    {
      year: "2022",
      title: "First Major Project",
      description: "Launched my first DeFi protocol, managing over $1M in total value locked within the first month.",
      icon: "🚀",
      location: "Remote",
    },
    {
      year: "2023",
      title: "AI Integration Pioneer",
      description:
        "Became one of the first developers to successfully integrate AI with blockchain technology at scale.",
      icon: "🧠",
      location: "Global",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Projects now serve 100K+ users and manage $50M+ in total value, setting new industry standards.",
      icon: "🏆",
      location: "Worldwide",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-32 px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            The{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From curious beginner to industry innovator—every step has been a learning experience
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full opacity-30" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black z-10" />

                {/* Content Card */}
                <div
                  className={`w-full lg:w-5/12 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 ${
                    index % 2 === 0 ? "lg:mr-auto lg:ml-0" : "lg:ml-auto lg:mr-0"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-4xl">{milestone.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-purple-400">{milestone.year}</div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          {milestone.location}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                    </div>
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
