"use client"

import { useState, useRef, useEffect } from "react"
import { Brain, Shield, Zap, Globe, Database, Coins } from "lucide-react"

export function ProjectCategories() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }, // Reduced threshold for mobile
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const categories = [
    {
      icon: Brain,
      title: "AI-Powered DeFi",
      description: "Intelligent protocols that optimize yields and minimize risks using machine learning",
      count: "8 projects",
      gradient: "from-purple-600 to-blue-600",
    },
    {
      icon: Coins,
      title: "NFT Platforms",
      description: "Next-generation marketplaces with cross-chain support and AI price discovery",
      count: "12 projects",
      gradient: "from-pink-600 to-purple-600",
    },
    {
      icon: Shield,
      title: "Security Tools",
      description: "Advanced vulnerability scanners and audit tools for smart contract security",
      count: "6 projects",
      gradient: "from-red-600 to-pink-600",
    },
    {
      icon: Database,
      title: "Infrastructure",
      description: "Core blockchain infrastructure including bridges, oracles, and scaling solutions",
      count: "10 projects",
      gradient: "from-green-600 to-teal-600",
    },
    {
      icon: Globe,
      title: "Cross-Chain",
      description: "Interoperability solutions connecting multiple blockchain ecosystems",
      count: "7 projects",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "High-performance applications optimized for speed and user experience",
      count: "15 projects",
      gradient: "from-yellow-600 to-orange-600",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 lg:mb-24 space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-none text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
                Categories
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              Project
              <span className="block text-primary">Types</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/40 max-w-3xl mx-auto italic font-light">
                Exploring the different industries and solutions I've built for.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group p-8 bg-white/5 border border-white/5 rounded-none hover:border-primary/20 transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-8">
                <div
                  className={`p-4 bg-primary rounded-none w-fit group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(0,255,255,0.3)]`}
                >
                  <category.icon className="w-8 h-8 text-black" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-white/40 text-sm lg:text-base italic font-light leading-relaxed">
                    {category.description}
                  </p>
                  <div className="text-primary font-black text-[9px] uppercase tracking-widest">{category.count}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
