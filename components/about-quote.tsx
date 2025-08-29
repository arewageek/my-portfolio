"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight, Calendar, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { brandConfig } from "@/lib/brand-config"

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
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950"
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-full text-gray-300 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2 text-pink-400" />
              Ready to innovate together?
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight">
              Let's Build the{" "}
              <span className="text-pink-400">
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
            <Link href={brandConfig.meetingLink}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-pink-400/60 text-pink-400 hover:bg-pink-400/10 hover:border-pink-400 hover:text-white px-16 py-6 text-2xl font-bold transition-all duration-500 backdrop-blur-sm rounded-2xl"
              >
                Schedule Call
                <Calendar className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
