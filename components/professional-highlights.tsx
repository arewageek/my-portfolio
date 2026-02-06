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
          <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-none text-white/60 text-[10px] uppercase tracking-[0.3em] font-light mb-8">
            Skills
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
            What I
            <span className="block text-primary">Do</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed italic">
            Building modern, secure web and blockchain applications.
          </p>
        </div>

        {/* Mobile-First Card Layout */}
        <div className="space-y-6 lg:hidden">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`bg-white/5 border border-white/5 rounded-none overflow-hidden transition-all duration-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setActiveHighlight(activeHighlight === index ? -1 : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-none ${activeHighlight === index ? "bg-primary" : "bg-white/5"}`}>
                    <highlight.icon className={`w-5 h-5 ${activeHighlight === index ? "text-black" : "text-white/60"}`} />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-white uppercase tracking-widest leading-none">
                      {highlight.title}
                    </h3>
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-white/40 transition-transform duration-200 ${activeHighlight === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              {activeHighlight === index && (
                <div className="px-6 pb-6 border-t border-white/5">
                  <div className="pt-6 space-y-6">
                    <p className="text-white/60 text-xs leading-relaxed italic">
                      {highlight.description}
                    </p>

                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-4">Key Features</h4>
                      <div className="space-y-3">
                        {highlight.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-1 h-1 bg-primary rounded-none mt-1.5 flex-shrink-0" />
                            <p className="text-[10px] uppercase tracking-wider text-white/60 leading-relaxed">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="primary" size="sm" className="w-full rounded-none">
                      Learn More
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          {/* Selection Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid gap-4">
              {highlights.map((highlight, index) => (
                <button
                  key={index}
                  onClick={() => setActiveHighlight(index)}
                  className={`group relative p-6 text-left border transition-all duration-300 rounded-none overflow-hidden ${activeHighlight === index
                      ? "bg-white/5 border-primary shadow-[0_0_20px_rgba(0,255,255,0.05)]"
                      : "bg-black border-white/5 hover:border-white/20"
                    } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-none ${activeHighlight === index
                        ? 'bg-primary'
                        : 'bg-white/5 group-hover:bg-white/10'
                      }`}>
                      <highlight.icon className={`w-5 h-5 ${activeHighlight === index ? 'text-black' : 'text-white/60'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold mb-1 uppercase tracking-wider text-xs transition-colors duration-200 ${activeHighlight === index ? "text-white" : "text-white/60 group-hover:text-white"
                        }`}>
                        {highlight.title}
                      </h3>
                      <p className={`text-[10px] uppercase tracking-widest transition-colors duration-200 ${activeHighlight === index
                          ? "text-primary"
                          : "text-white/45 group-hover:text-white/65"
                        }`}>
                        {highlight.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-7">
            <div
              className={`bg-white/5 border border-white/5 p-12 h-full transition-all duration-500 rounded-none ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: "300ms" }}
            >
              <div className="space-y-10">
                {/* Header */}
                <div className="flex items-start space-x-6">
                  <div className="p-6 bg-primary rounded-none">
                    {React.createElement(highlights[activeHighlight].icon, {
                      className: "w-10 h-10 text-black"
                    })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-5xl font-black text-white mb-2 uppercase tracking-tighter leading-none">
                      {highlights[activeHighlight].title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 leading-relaxed text-xl italic font-light">
                  {highlights[activeHighlight].description}
                </p>

                {/* Features */}
                <div>
                  <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Key Features</h4>
                  <div className="grid sm:grid-cols-2 gap-8">
                    {highlights[activeHighlight].features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-1.5 h-1.5 bg-primary rounded-none mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
                        <p className="text-[11px] uppercase tracking-widest text-white/60 leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-8">
                  <Button variant="primary" size="xl" className="rounded-none px-12 h-16 text-xs uppercase tracking-[0.3em]">
                    Contact Me
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