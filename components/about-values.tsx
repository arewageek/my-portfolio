"use client"

import { useState, useRef, useEffect } from "react"
import { Coffee, Music, Book, Globe, Heart, Code, Gamepad } from "lucide-react"

export function AboutValues() {
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

  const interests = [
    {
      icon: Gamepad,
      title: "Video Games",
      description: "I play video games to keep my mental health in check ;)",
      color: "text-amber-400",
    },
    {
      icon: Music,
      title: "Music Lover",
      description: "Afrobeats, jazz, and lo-fi keep me focused",
      color: "text-pink-400",
    },
    // {
    //   icon: Book,
    //   title: "Always Learning",
    //   description: "I read and watch videos about new tools and understanding existng systems",
    //   color: "text-blue-400",
    // },
    // {
    //   icon: Globe,
    //   title: "Global Mindset",
    //   description: "Working with teams across different time zones",
    //   color: "text-green-400",
    // },
    // {
    //   icon: Heart,
    //   title: "Care About Craft",
    //   description: "Every line of code matters to me",
    //   color: "text-red-400",
    // },
    {
      icon: Code,
      title: "Problem Solver",
      description: "Love turning complex ideas into simple solutions",
      color: "text-purple-400",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              Beyond{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Code</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What makes me tick when I'm not building the future of Web3
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <interest.icon
                    className={`w-8 h-8 ${interest.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{interest.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{interest.description}</p>
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
