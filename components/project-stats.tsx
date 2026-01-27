"use client"

import { useState, useRef, useEffect } from "react"
import { TrendingUp, Users, Code, Award, Shield, Zap } from "lucide-react"
import { brandConfig } from "@/lib/brand-config"

export function ProjectStats() {
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

  const stats = [
    {
      icon: Code,
      value: brandConfig.stats.projects,
      label: "Projects Delivered",
      description: "Across multiple blockchain ecosystems",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: Users,
      value: brandConfig.stats.users,
      label: "Users Served",
      description: "Active users across all platforms",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: TrendingUp,
      value: brandConfig.stats.tvl,
      label: "Total Value Locked",
      description: "Managed across DeFi protocols",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      icon: Shield,
      value: "0",
      label: "Security Incidents",
      description: "Perfect security track record",
      gradient: "from-red-600 to-pink-600",
    },
    {
      icon: Zap,
      value: "2s",
      label: "Average Load Time",
      description: "Optimized for performance",
      gradient: "from-yellow-600 to-orange-600",
    },
    {
      icon: Award,
      value: brandConfig.stats.successRate,
      label: "Success Rate",
      description: "Projects delivered on time",
      gradient: "from-indigo-600 to-purple-600",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 lg:mb-24 space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-none text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
                Overall Impact
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              My
              <span className="block text-primary">Results</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/40 max-w-3xl mx-auto italic font-light">
                Numbers that show the scale and impact of the work I've done.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group p-10 bg-white/5 border border-white/5 rounded-none hover:border-primary/20 transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-8 text-center">
                <div
                  className={`p-4 bg-primary rounded-none w-fit mx-auto transition-transform duration-500 group-hover:scale-110 shadow-[0_0_15px_rgba(0,255,255,0.3)]`}
                >
                  <stat.icon className="w-8 h-8 text-black" />
                </div>

                <div className="space-y-4">
                  <div className="text-5xl font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors">{stat.value}</div>
                  <h3 className="text-xs font-black text-white mb-2 uppercase tracking-widest leading-none">
                    {stat.label}
                  </h3>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider font-bold italic leading-relaxed">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
