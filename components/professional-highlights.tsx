"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { Code2, Brain, Shield, Zap, Database, Globe, ChevronRight } from "lucide-react"

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
      { threshold: 0.3 },
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
      subtitle: "Secured, Scalable Contracts",
      description:
        "I design and deploy production-ready smart contracts that securely handle high-value transactions. Every contract I build is security-audited, gas-optimized, and designed for easy upgrades. Whether it’s simple tokens or complex DeFi protocols, I make sure your blockchain infrastructure is reliable and solid.",
      "features": [
        "Secure code with full tests",
        "Lower gas costs by up to 40%",
        "Upgradeable contracts that last",
        "Experience deploying across multiple EVM chains"
      ],

      gradient: "from-purple-600 to-blue-600",
      bgGradient: "from-purple-500/10 to-blue-500/10",
    },
    // {
    //   icon: Brain,
    //   title: "AI Integration",
    //   subtitle: "Intelligent blockchain solutions",
    //   description:
    //     "I don't just build blockchain apps—I make them intelligent. By integrating cutting-edge AI technologies, I create solutions that learn, adapt, and optimize themselves. From predictive analytics to automated decision-making, AI transforms how users interact with Web3.",
    //   features: [
    //     "Machine learning models for yield optimization",
    //     "AI-powered price discovery and market analysis",
    //     "Intelligent automation reducing manual processes",
    //     "Natural language interfaces for complex operations",
    //   ],
    //   gradient: "from-pink-600 to-purple-600",
    //   bgGradient: "from-pink-500/10 to-purple-500/10",
    // },
    {
      icon: Globe,
      title: "Full-Stack Development",
      subtitle: "End-to-end Web3 experiences",
      description:
        "I build everything from smart contracts to smooth, user-focused interfaces—making blockchain technology feel simple, approachable, and easy to use. Web3 should feel seamless, even if users don’t fully understand the magic happening behind the scenes.",
      features: [
        "Building modern React and Next.js applications with TypeScript",
        "Creating responsive designs that look great on all devices",
        "Integrating Web3 wallets and handling blockchain transactions",
        "Implementing real-time data sync and smooth state management",
      ],
      gradient: "from-green-600 to-teal-600",
      bgGradient: "from-green-500/10 to-teal-500/10",
    },
    {
      icon: Shield,
      title: "Security & Auditing",
      subtitle: "Zero-compromise protection",
      description:
        "Security is at the core of everything I build. I apply defense-in-depth, perform detailed security reviews, and follow proven best practices to keep your users and assets safe from known vulnerabilities.",
      features: [
        "Thorough security audits and vulnerability checks",
        "Applying proven security best practices and design patterns",
        "Integrating multi-signature wallets and timelock protections",
        "Setting up continuous monitoring and preparing for incident response"
      ],
      gradient: "from-red-600 to-pink-600",
      bgGradient: "from-red-500/10 to-pink-500/10",
    },
    // {
    //   icon: Database,
    //   title: "DeFi Protocols",
    //   subtitle: "Next-generation financial infrastructure",
    //   description:
    //     "I build the financial primitives of tomorrow. From automated market makers to yield farming protocols, I create DeFi solutions that are not only innovative but also sustainable and user-friendly. Every protocol is designed for long-term value creation.",
    //   features: [
    //     "Custom AMM and liquidity pool implementations",
    //     "Yield farming and staking mechanisms",
    //     "Cross-chain bridge and interoperability solutions",
    //     "Governance tokens and DAO infrastructure",
    //   ],
    //   gradient: "from-yellow-600 to-orange-600",
    //   bgGradient: "from-yellow-500/10 to-orange-500/10",
    // },
    {
      icon: Zap,
      title: "Performance & Scalability",
      subtitle: "Fast, Scalable Web3 Applications",
      description: "Speed and scalability are not optional—they’re essential. I optimize every layer of the stack, from gas-efficient smart contracts to frontend loading times, while building systems that scale effortlessly as user demand grows. Web3 users expect Web2-level speed and reliability, and I make sure they get both.",
      features: [
        "Advanced caching strategies and CDN optimization for faster load times",
        "Smart contract gas optimization and scalable architecture design",
        "Progressive loading, code splitting, and efficient asset management",
        "Real-time performance monitoring, load testing, and scaling strategies"
      ],
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 lg:px-8 hidden md:block"
      style={{
        background: `
          linear-gradient(135deg, #0f0f23 0%, #1a0b2e 50%, #0f0f23 100%)
        `,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8 shadow-lg shadow-purple-500/10">
            Core Expertise
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            What I{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Specialize
            </span>{" "}
            In
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Click on any area to discover how I can transform your blockchain vision into reality
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Highlight Navigation */}
          <div className="lg:col-span-1 space-y-4">
            {highlights.map((highlight, index) => (
              <button
                key={index}
                onClick={() => setActiveHighlight(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 group ${activeHighlight === index
                  ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/50 transform scale-105"
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:transform hover:scale-102"
                  } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 bg-gradient-to-r ${highlight.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-lg font-bold mb-1 transition-colors duration-300 ${activeHighlight === index ? "text-white" : "text-gray-300 group-hover:text-white"
                        }`}
                    >
                      {highlight.title}
                    </h3>
                    <p
                      className={`text-sm transition-colors duration-300 ${activeHighlight === index ? "text-purple-400" : "text-gray-400 group-hover:text-gray-300"
                        }`}
                    >
                      {highlight.subtitle}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-all duration-300 ${activeHighlight === index
                      ? "text-purple-400 transform rotate-90"
                      : "text-gray-400 group-hover:text-white group-hover:translate-x-1"
                      }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Highlight Details */}
          <div className="lg:col-span-2">
            <div
              className={`bg-gradient-to-br ${highlights[activeHighlight].bgGradient} backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: "300ms" }}
            >
              <div className="space-y-8">
                {/* Header */}
                <div className="flex items-start space-x-6">
                  <div className={`p-4 bg-gradient-to-r ${highlights[activeHighlight].gradient} rounded-2xl`}>
                    {React.createElement(highlights[activeHighlight].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-white mb-2">{highlights[activeHighlight].title}</h3>
                    <p className="text-xl text-purple-400 font-semibold mb-4">{highlights[activeHighlight].subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed">{highlights[activeHighlight].description}</p>

                {/* Features */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Key Capabilities</h4>
                  <div className="space-y-3">
                    {highlights[activeHighlight].features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300 leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30">
                    Discuss This Service
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
