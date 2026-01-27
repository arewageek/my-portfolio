"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowLeft, Briefcase, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CompanyHeroProps {
  company: {
    name: string
    role: string
    started: string
    stopped?: string
    location: string
    logo: string
    type: string
  }
}

export function CompanyHero({ company }: CompanyHeroProps) {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className={`space-y-16 lg:space-y-24 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Back button */}
          <Link href="/work">
            <Button
              variant="outline"
              className="px-6 py-2 bg-white/5 border border-white/10 rounded-none text-white/40 text-[9px] font-black tracking-[0.4em] uppercase hover:bg-white/10 hover:text-white transition-all duration-500"
            >
              <ArrowLeft className="w-3 h-3 mr-2" />
              Go Back
            </Button>
          </Link>

          {/* Company Header */}
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-none text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
                  Experience
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase">
                {company.name}
              </h1>
              
              <div className="flex flex-col items-center gap-4">
                 <p className="text-2xl lg:text-4xl text-primary font-black uppercase tracking-tighter leading-none">{company.role}</p>
                 <div className="h-px w-20 bg-primary/20" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8">
                <div className="flex items-center justify-center gap-4 p-4 bg-white/5 border border-white/5 rounded-none group transition-all duration-500 hover:border-primary/20">
                  <div className="p-3 bg-primary rounded-none shadow-[0_0_10px_rgba(0,255,255,0.2)]">
                    <Calendar className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-left">
                    <div className="text-[8px] uppercase font-black text-white/20 tracking-widest mb-1 group-hover:text-primary transition-colors">Period</div>
                    <div className="text-[10px] uppercase font-bold text-white tracking-widest italic">{company.started} - {company.stopped || 'Present'}</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 p-4 bg-white/5 border border-white/5 rounded-none group transition-all duration-500 hover:border-primary/20">
                  <div className="p-3 bg-primary rounded-none shadow-[0_0_10px_rgba(0,255,255,0.2)]">
                    <MapPin className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-left">
                    <div className="text-[8px] uppercase font-black text-white/20 tracking-widest mb-1 group-hover:text-primary transition-colors">Location</div>
                    <div className="text-[10px] uppercase font-bold text-white tracking-widest italic">{company.location}</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 p-4 bg-white/5 border border-white/5 rounded-none group transition-all duration-500 hover:border-primary/20">
                  <div className="p-3 bg-primary rounded-none shadow-[0_0_10px_rgba(0,255,255,0.2)]">
                    <Briefcase className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-left">
                    <div className="text-[8px] uppercase font-black text-white/20 tracking-widest mb-1 group-hover:text-primary transition-colors">Type</div>
                    <div className="text-[10px] uppercase font-bold text-white tracking-widest italic">{company.type}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
