"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight, Sparkles, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { brandConfig } from "@/lib/brand-config"

export function ContactCTA() {
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
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #0f0f23 0%, #1a0b2e 50%, #0f0f23 100%)
        `,
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 glass-card rounded-full text-purple-300 text-sm font-medium shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Ready to innovate?
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Your Next Big{" "}
              <span className="gradient-text-primary drop-shadow-lg">
                Breakthrough
              </span>{" "}
              Starts Here
            </h2>

            <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Don't let your blockchain vision remain just an idea. Let's build something that changes the game.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Clock, label: "24h Response", description: "Quick turnaround guaranteed" },
              { icon: Sparkles, label: "100% Success", description: "All projects delivered on time" },
              { icon: ArrowRight, label: "Ready to Start", description: "Available for new projects" },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl w-fit mx-auto">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{item.label}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a href={`mailto:${brandConfig.email}`}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white px-12 py-6 text-xl font-bold shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-105 border border-purple-400/20 rounded-2xl"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </a>
            <Link href="/work">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500/60 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 hover:text-white px-12 py-6 text-xl font-bold transition-all duration-500 backdrop-blur-sm rounded-2xl"
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
