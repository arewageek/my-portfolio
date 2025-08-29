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
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
      style={{
        background: `
          radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #0f0f23 0%, #1a0b2e 100%)
        `,
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <Quote className="w-16 h-16 text-purple-400 mx-auto opacity-50" />

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            "Where we're going, we won't need {" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              wallets, gas fees, or complex interfaces.
            </span>
          </blockquote>

          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
              <span className="text-purple-400 font-medium">My vision for Web3</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500" />
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">

            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
