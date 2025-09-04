"use client"

import { useState, useRef, useEffect } from "react"
import { Quote } from "lucide-react"

export function AboutPersonal() {
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

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <Quote className="w-16 h-16 text-pink-400 mx-auto opacity-50" />

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            "Where we're going, we won't need {" "}
            <span className="text-pink-400">
              wallets, gas fees, or complex interfaces.
            </span>
          </blockquote>

          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-0.5 bg-pink-400" />
              <span className="text-pink-400 font-medium">My vision for Web3</span>
              <div className="w-12 h-0.5 bg-pink-400" />
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">

            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
