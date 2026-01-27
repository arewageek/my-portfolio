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
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      <div className="max-w-7xl mx-auto text-center border-t border-white/5 pt-20 lg:pt-32">
        <div className={`space-y-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="space-y-12">
            <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-none text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
                Final Protocol
            </div>

            <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              Initiate
              <span className="block text-primary">Breakthrough</span>
            </h2>

            <p className="text-xl lg:text-3xl text-white/40 leading-relaxed max-w-4xl mx-auto italic font-light">
                Engineering a future where decentralized infrastructure is as invisible and reliable as the air we breathe.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Clock, label: "24h Latency", description: "Standard response buffer" },
              { icon: Sparkles, label: "Synchronized", description: "Verification complete" },
              { icon: ArrowRight, label: "Online", description: "Awaiting instruction" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 group">
                <div className="p-3 bg-primary rounded-none transition-transform duration-500 group-hover:scale-110 shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                  <item.icon className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-[10px] font-black text-white uppercase tracking-widest leading-none mb-1">{item.label}</h3>
                  <p className="text-white/20 text-[8px] uppercase tracking-widest font-bold italic">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
            <a href={`mailto:${brandConfig.email}`}>
              <Button
                variant="primary"
                size="xl"
                className="px-12 py-6 text-xl font-black uppercase tracking-widest rounded-none border-none"
              >
                Initalize Deployment
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </a>
            <Link href="/work">
              <Button
                variant="outline"
                size="xl"
                className="px-12 py-6 text-xl font-black uppercase tracking-widest rounded-none border-white/10 text-white/40 hover:text-white"
              >
                Inspect Ledger
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
