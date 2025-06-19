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
    <section ref={sectionRef} className="relative py-16 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 lg:mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 lg:mb-8 leading-tight">
            Project{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore different types of blockchain solutions I've built across various domains
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group p-6 lg:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl lg:rounded-3xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }} // Reduced delay
            >
              <div className="space-y-4 lg:space-y-6">
                <div
                  className={`p-3 lg:p-4 bg-gradient-to-r ${category.gradient} rounded-xl lg:rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>

                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3 lg:mb-4 text-sm lg:text-base">
                    {category.description}
                  </p>
                  <div className="text-purple-400 font-semibold text-sm">{category.count}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
