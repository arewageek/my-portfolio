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
      title: "Music",
      description: "Afrobeats, jazz, and lo-fi keep me focused",
      color: "text-pink-400",
    },
    {
      icon: Book,
      title: "Reading",
      description: "I read books that help me think better, grow personally, and see the world more clearly.",
      color: "text-blue-400",
    },
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
    // {
    //   icon: Code,
    //   title: "Problem Solver",
    //   description: "Love turning complex ideas into simple solutions",
    //   color: "text-purple-400",
    // },
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`space-y-16 lg:space-y-24 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-none text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
                  Telemetry
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                My
                <span className="block text-primary">Interests</span>
              </h2>
            </div>
            <p className="text-lg lg:text-xl text-white/40 max-w-3xl mx-auto italic font-light">
              What you'll find me doing when I'm not shipping
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 border border-white/5 rounded-none hover:border-primary/20 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-6">
                  <interest.icon
                    className={`w-10 h-10 text-primary transition-transform duration-500`}
                  />
                  <div>
                    <h3 className="text-xs font-black text-white mb-2 uppercase tracking-widest leading-none">{interest.title}</h3>
                    <p className="text-white/40 text-[9px] uppercase tracking-wider font-bold italic leading-relaxed">{interest.description}</p>
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
