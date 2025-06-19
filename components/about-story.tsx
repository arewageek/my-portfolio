"use client"

import { useState, useRef, useEffect } from "react"
import { Code2, Lightbulb, Rocket } from "lucide-react"

export function AboutStory() {
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

  const highlights = [
    {
      icon: Code2,
      title: "50+ Projects",
      description: "Built and deployed",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: Lightbulb,
      title: "3+ Years",
      description: "In blockchain development",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: Rocket,
      title: "100K+ Users",
      description: "Across all platforms",
      gradient: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Story content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                  My{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Story
                  </span>
                </h2>

                <div className="space-y-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
                  <p>
                    I got into blockchain not because of the hype, but because I was fascinated by the idea of building
                    systems that don't need a middleman to work.
                  </p>

                  <p>
                    Most blockchain apps feel like they were built by engineers for engineers. I think that's backwards.
                    The best technology is invisible.
                  </p>

                  <p>
                    When I'm not coding, I'm probably thinking about how to make complex things simple, or figuring out
                    how AI can make blockchain smarter.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-3 bg-gradient-to-r ${highlight.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">{highlight.title}</div>
                      <div className="text-gray-400">{highlight.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
