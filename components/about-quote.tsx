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
          <div className="space-y-12">
            <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-none text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
                Collaborate
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase">
              Let's Work
              <span className="block text-primary">Together</span>
            </h2>

            <p className="text-xl lg:text-2xl text-white/40 leading-relaxed max-w-4xl mx-auto italic font-light">
              I'm always open to new ideas and challenging projects. Let's create something amazing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
            <Link href={brandConfig.calendar}>
              <Button
                variant="primary"
                size="xl"
                className="px-16 py-6 text-xl font-black uppercase tracking-widest rounded-none border-none"
              >
                Schedule Call
                <Calendar className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="xl"
                className="px-16 py-6 text-xl font-black uppercase tracking-widest rounded-none border-white/10 text-white/40 hover:text-white"
              >
                Contact Me
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
