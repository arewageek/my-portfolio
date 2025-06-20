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
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%),
          linear-gradient(135deg, #000000 0%, #1a0b2e 50%, #000000 100%)
        `,
      }}
    >
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            animation: "gentleFloat 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
            animation: "gentleFloat 10s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-xl"
          style={{
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            animation: "gentleFloat 12s ease-in-out infinite",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium shadow-lg shadow-purple-500/10">
            <Sparkles className="w-4 h-4 mr-2" />
            Ready to transform your vision?
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h2 className="text-6xl lg:text-8xl font-black text-white leading-tight">
              Let's Build{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Something
              </span>
            </h2>
            <h2 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 bg-clip-text text-transparent leading-tight">
              Extraordinary
            </h2>
          </div>

          {/* Description */}
          <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Your blockchain vision deserves more than ordinary execution. Let's create a solution that doesn't just
            work—it <span className="text-purple-400 font-semibold">transforms industries</span> and{" "}
            <span className="text-pink-400 font-semibold">delights users</span>.
          </p>

          {/* Achievement Stats */}
          {/* <div
            className={`grid md:grid-cols-4 gap-8 py-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105"
                style={{ animation: `gentleFloat 6s ease-in-out infinite ${index * 0.5}s` }}
              >
                <div className="space-y-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white mb-1">{achievement.label}</div>
                    <div className="text-purple-400 font-medium text-sm">{achievement.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-8 justify-center pt-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "600ms" }}
          >
            <Link href={brandConfig.meetingLink}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500/60 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 hover:text-white px-16 py-6 text-2xl font-bold transition-all duration-500 backdrop-blur-sm rounded-2xl"
              >
                Book an Appointment
                <Calendar className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            {/* <Link href="/projects">
              <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white px-16 py-6 text-2xl font-bold shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-105 border border-purple-400/20 rounded-2xl"
              >
                View My Work
              </Button>
            </Link> */}
          </div>

          {/* Bottom Message */}
          {/* <div
            className={`pt-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "900ms" }}
          >
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-full text-green-300 text-lg font-medium shadow-lg shadow-green-500/10">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" />
              Available for new projects • Response within 24 hours
            </div>
          </div> */}
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
