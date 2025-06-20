"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MessageSquare, Sparkles } from "lucide-react"
import { brandConfig } from "@/lib/brand-config"

export function ContactHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.08) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #0a0a0f 100%)
        `,
      }}
    >
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            animation: "gentleFloat 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
            animation: "gentleFloat 12s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-12">
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center px-8 py-4 bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Let's Connect
            </div>

            <h1 className="text-7xl lg:text-9xl font-black text-white leading-tight">
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Ready to build something amazing together? Let's discuss your next blockchain project
            </p>
          </div>

          {/* Quick contact options */}
          <div
            className={`grid md:grid-cols-2 gap-8 max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            <a
              href={`mailto:${brandConfig.email}`}
              className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="space-y-4 text-center">
                <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    Email Me
                  </h3>
                  <p className="text-gray-400">{brandConfig.email}</p>
                </div>
              </div>
            </a>

            <a
              href={brandConfig.socials[2].href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="space-y-4 text-center">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    Message Me
                  </h3>
                  <p className="text-gray-400">@arewaofweb3</p>
                </div>
              </div>
            </a>
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
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  )
}
