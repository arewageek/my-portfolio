"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutQuote() {
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
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #0a0a0f 100%)
        `,
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to innovate together?
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight">
              Let's Build the{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Future
              </span>{" "}
              Together
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Whether you have a revolutionary idea or need to transform an existing project, I'm here to make it
              happen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-bold shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-105 border border-purple-400/20 rounded-2xl"
              >
                Start a Project
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </Link>
            <Link href="/work">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500/60 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 hover:text-white px-8 py-4 text-lg font-bold transition-all duration-500 backdrop-blur-sm rounded-2xl"
              >
                View My Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
