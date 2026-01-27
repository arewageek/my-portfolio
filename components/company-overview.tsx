"use client"

import { brandConfig } from "@/lib/brand-config"
import { useState, useRef, useEffect } from "react"

interface CompanyOverviewProps {
  company: {
    overview: {
      description: string
      responsibilities: string[]
      impact: string
    }
    technologies: string[]
    logo: string
  }
}

export function CompanyOverview({ company }: CompanyOverviewProps) {
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
    <section ref={sectionRef} className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`space-y-16 lg:space-y-24 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-8">
             <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-none text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
                Summary
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              Role
              <span className="block text-primary">Overview</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Description & Impact */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">My Role</h3>
                <p className="text-xl lg:text-2xl text-white/40 leading-relaxed italic font-light">{company.overview.description}</p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">Responsibilities</h3>
                <div className="space-y-6">
                  {company.overview.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="w-1.5 h-1.5 bg-primary rounded-none mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-transform duration-500 group-hover:scale-150" />
                      <p className="text-white/40 text-[11px] uppercase tracking-widest leading-relaxed font-bold italic">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="pt-16 border-t border-white/5">
            <h3 className="text-xs font-black text-white/20 mb-12 uppercase tracking-[0.4em] text-center">Tech Stack</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {company.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 text-primary border border-white/5 rounded-none text-[10px] uppercase font-black tracking-widest transition-all duration-500 hover:border-primary/20 hover:bg-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
