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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-40"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] opacity-20"
          style={{
            transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center space-y-16 lg:space-y-24">
          <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-none text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
                Contact
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase whitespace-pre-line">
              Get In
              <span className="block text-primary">Touch</span>
            </h1>

            <p className="text-xl lg:text-3xl text-white/40 leading-relaxed max-w-3xl mx-auto italic font-light">
                I'm currently available for new projects, collaborations, and consulting.
            </p>
          </div>

          {/* Quick contact options */}
          <div
            className={`grid md:grid-cols-2 gap-8 max-w-3xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            <a
              href={`mailto:${brandConfig.email}`}
              className="group p-10 bg-white/5 border border-white/5 rounded-none hover:border-primary/20 transition-all duration-500"
            >
              <div className="space-y-6 text-center">
                <div className="p-4 bg-primary rounded-none w-fit mx-auto transition-transform duration-500 group-hover:scale-110">
                  <Mail className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xs font-black text-white mb-2 uppercase tracking-widest leading-none">
                    Email
                  </h3>
                  <p className="text-primary font-bold text-xs uppercase tracking-widest">{brandConfig.email}</p>
                </div>
              </div>
            </a>

            <a
              href={brandConfig.socials[2].href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-10 bg-white/5 border border-white/5 rounded-none hover:border-primary/20 transition-all duration-500"
            >
              <div className="space-y-6 text-center">
                <div className="p-4 bg-primary rounded-none w-fit mx-auto transition-transform duration-500 group-hover:scale-110">
                  <MessageSquare className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xs font-black text-white mb-2 uppercase tracking-widest leading-none">
                    X (Twitter)
                  </h3>
                  <p className="text-primary font-bold text-xs uppercase tracking-widest">@arewaofweb3</p>
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
