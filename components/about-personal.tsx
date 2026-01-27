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
      <div className="max-w-7xl mx-auto text-center">
        <div className={`space-y-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="h-20 w-px bg-primary mx-auto opacity-40 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />

          <blockquote className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-[0.9] uppercase tracking-tighter">
            Where we're going, we won't need
            <span className="block text-primary">
              wallets, gas, or complexity.
            </span>
          </blockquote>

          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-none text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
                My Vision
            </div>

            <p className="text-xl lg:text-3xl text-white/40 leading-relaxed max-w-4xl mx-auto italic font-light">
                Engineering a future where decentralized infrastructure is as invisible and reliable as the air we breathe.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
