"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight, Sparkles, Rocket, Zap, Star, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { brandConfig } from "@/lib/brand-config"

export function CallToAction() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
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

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      observer.disconnect()
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const achievements = [
    { icon: Rocket, label: "50+ Projects", value: "Delivered" },
    { icon: Star, label: "$50M+ TVL", value: "Managed" },
    { icon: Zap, label: "100K+ Users", value: "Served" },
    { icon: Sparkles, label: "3+ Years", value: "Experience" },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 lg:px-8 overflow-hidden bg-black"
      style={{
        background: `
          radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.05) 0%, transparent 70%)
        `,
      }}
    >
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-[120px]"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-none text-white/40 text-[10px] uppercase tracking-[0.3em] font-light mb-8">
            Contact
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h2 className="text-6xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase">
              Start a
              <span className="block text-primary">Project</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-3xl mx-auto italic">
            I help teams build modern, secure, and user-friendly web and blockchain applications.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-8 justify-center pt-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "600ms" }}
          >
            <Link href={brandConfig.calendar}>
              <Button
                variant="primary"
                size="xl"
                className="px-16 py-6 text-xl font-black uppercase tracking-widest rounded-none border-none"
              >
                Schedule a Call
                <Calendar className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                size="xl"
                className="px-16 py-6 text-xl font-black uppercase tracking-widest rounded-none border-white/10 text-white/40 hover:text-white"
              >
                My Projects
              </Button>
            </Link>
          </div>

          {/* Bottom Message */}
          <div
            className={`pt-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "900ms" }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 rounded-none text-white/30 text-[10px] uppercase font-bold tracking-[0.4em]">
              <div className="w-2 h-2 bg-primary rounded-none mr-4 animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
              Available for new projects globally
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gentleFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </section>
  )
}
