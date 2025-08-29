"use client"

import React, { useState, useRef, useEffect } from "react"
import { Code2, Globe, Shield, Zap, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProfessionalHighlights() {
  const [activeHighlight, setActiveHighlight] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Code2,
      title: "Smart Contract Development",
      subtitle: "Secure & Scalable Blockchain Solutions",
      description:
        "I design and deploy production-ready smart contracts that securely handle high-value transactions. Every contract is security-audited, gas-optimized, and built for scalability.",
      features: [
        "Security-first development with comprehensive testing",
        "Gas optimization reducing costs by up to 40%",
        "Upgradeable architecture for future-proofing",
        "Multi-chain deployment expertise"
      ],
      color: "purple",
    },
    {
      icon: Globe,
      title: "Full-Stack Development",
      subtitle: "End-to-End Web3 Experiences",
      description:
        "I build complete Web3 applications from smart contracts to intuitive user interfaces, making blockchain technology accessible and user-friendly.",
      features: [
        "Modern React/Next.js applications with TypeScript",
        "Responsive design optimized for all devices",
        "Seamless Web3 wallet integration",
        "Real-time data synchronization"
      ],
      color: "pink",
    },
    {
      icon: Shield,
      title: "Security & Auditing",
      subtitle: "Zero-Compromise Protection",
      description:
        "Security is paramount in Web3. I implement defense-in-depth strategies and conduct thorough audits to protect your users and assets.",
      features: [
        "Comprehensive security audits and reviews",
        "Industry-standard security patterns",
        "Multi-signature and timelock implementations",
        "Continuous monitoring and incident response"
      ],
      color: "purple",
    },
    {
      icon: Zap,
      title: "Performance & Scalability",
      subtitle: "Lightning-Fast Web3 Applications",
      description:
        "I optimize every layer of the stack for maximum performance, ensuring your Web3 application delivers Web2-level speed and reliability.",
      features: [
        "Advanced caching and CDN optimization",
        "Gas-efficient smart contract architecture",
        "Progressive loading and code splitting",
        "Real-time performance monitoring"
      ],
      color: "pink",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 lg:mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-sm font-medium mb-6">
            Core Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            What I{" "}
            <span className="text-pink-400">
              Specialize
            </span>{" "}
            In
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transforming blockchain visions into production-ready solutions
          </p>
        </div>

        {/* Mobile-First Card Layout */}
        <div className="space-y-6 lg:hidden">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setActiveHighlight(activeHighlight === index ? -1 : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${highlight.color === 'pink'
                      ? 'bg-pink-600'
                      : 'bg-purple-600'
                    }`}>
                    <highlight.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {highlight.subtitle}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${activeHighlight === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              {activeHighlight === index && (
                <div className="px-6 pb-6 border-t border-white/10">
                  <div className="pt-6 space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      {highlight.description}
                    </p>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Capabilities</h4>
                      <div className="space-y-2">
                        {highlight.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${highlight.color === 'pink' ? 'bg-pink-400' : 'bg-purple-400'
                              }`} />
                            <p className="text-sm text-gray-300 leading-relaxed">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="primary" size="sm" className="w-full">
                      Discuss This Service
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8">
          {/* Navigation Cards */}
          <div className="lg:col-span-2 space-y-4">
            {highlights.map((highlight, index) => (
              <button
                key={index}
                onClick={() => setActiveHighlight(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group ${activeHighlight === index
                    ? "bg-white/10 border-white/20 scale-[1.02]"
                    : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/15"
                  } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl transition-transform duration-200 group-hover:scale-110 ${highlight.color === 'pink'
                      ? 'bg-pink-600'
                      : 'bg-purple-600'
                    }`}>
                    <highlight.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-1 transition-colors duration-200 ${activeHighlight === index ? "text-white" : "text-gray-300 group-hover:text-white"
                      }`}>
                      {highlight.title}
                    </h3>
                    <p className={`text-sm transition-colors duration-200 ${activeHighlight === index
                        ? highlight.color === 'pink' ? "text-pink-400" : "text-purple-400"
                        : "text-gray-400 group-hover:text-gray-300"
                      }`}>
                      {highlight.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-3">
            <div
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: "300ms" }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start space-x-4">
                  <div className={`p-4 rounded-2xl ${highlights[activeHighlight].color === 'pink'
                      ? 'bg-pink-600'
                      : 'bg-purple-600'
                    }`}>
                    {React.createElement(highlights[activeHighlight].icon, {
                      className: "w-6 h-6 text-white"
                    })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {highlights[activeHighlight].title}
                    </h3>
                    <p className={`text-lg font-medium mb-4 ${highlights[activeHighlight].color === 'pink' ? 'text-pink-400' : 'text-purple-400'
                      }`}>
                      {highlights[activeHighlight].subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-lg">
                  {highlights[activeHighlight].description}
                </p>

                {/* Features */}
                <div>
                  <h4 className="text-white font-semibold mb-4">Key Capabilities</h4>
                  <div className="space-y-3">
                    {highlights[activeHighlight].features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${highlights[activeHighlight].color === 'pink' ? 'bg-pink-400' : 'bg-purple-400'
                          }`} />
                        <p className="text-gray-300 leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button variant="primary" size="lg">
                    Discuss This Service
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}