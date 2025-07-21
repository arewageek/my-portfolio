"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowLeft, Briefcase, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CompanyHeroProps {
  company: {
    name: string
    role: string
    period: string
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
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #0a0a0f 100%)
        `,
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`space-y-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Back button */}
          <Link href="/work">
            <Button
              variant="outline"
              className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Work
            </Button>
          </Link>

          {/* Company Header */}
          <div className="text-center space-y-8">
            {/* <div className="flex justify-center">
              <div className="p-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl text-6xl shadow-2xl">
                {company.logo}
              </div>
            </div> */}

            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight">{company.name}</h1>
              <p className="text-2xl lg:text-3xl text-purple-400 font-semibold">{company.role}</p>

              <div className="flex items-center justify-center space-x-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg">{company.period}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{company.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5" />
                  <span className="text-lg">{company.type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
