"use client"

import { useRef, useEffect, useState } from "react"
import { Code2, Zap, Brain, Shield, Rocket, Globe } from "lucide-react"

export function AboutSection() {
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
    { number: "50+", label: "Projects Delivered", icon: Rocket },
    { number: "3+", label: "Years Experience", icon: Code2 },
    { number: "15+", label: "Technologies Mastered", icon: Zap },
    { number: "100%", label: "Client Satisfaction", icon: Globe },
  ]

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
                About Me
              </div>

              <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                Building the{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Future
                </span>{" "}
                of Web3
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a passionate fullstack blockchain engineer who believes that the future of technology lies in the
                seamless integration of <span className="text-purple-400 font-semibold">artificial intelligence</span>{" "}
                and
                <span className="text-pink-400 font-semibold"> blockchain technology</span>.
              </p>

              <p>
                My mission is to bridge the gap between complex blockchain infrastructure and intuitive user
                experiences. Every line of code I write is optimized for{" "}
                <span className="text-purple-400 font-semibold">scalability</span>,
                <span className="text-pink-400 font-semibold"> performance</span>, and most importantly,
                <span className="text-purple-400 font-semibold"> user adoption</span>.
              </p>

              <p>
                When I'm not architecting the next generation of decentralized applications, you'll find me exploring
                cutting-edge AI tools and finding innovative ways to integrate machine learning into blockchain
                solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <stat.icon className="w-6 h-6 text-purple-400" />
                    <span className="text-3xl font-black text-white">{stat.number}</span>
                  </div>
                  <p className="text-gray-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Core Values */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up delay-300" : "opacity-0"}`}>
            {[
              {
                icon: Brain,
                title: "AI-First Approach",
                description:
                  "Leveraging artificial intelligence to create smarter, more efficient blockchain solutions that adapt and evolve.",
                gradient: "from-purple-500 to-blue-500",
              },
              {
                icon: Shield,
                title: "Security & Trust",
                description:
                  "Building bulletproof smart contracts and applications with security-first architecture and rigorous testing.",
                gradient: "from-pink-500 to-red-500",
              },
              {
                icon: Zap,
                title: "Performance Obsessed",
                description:
                  "Optimizing every aspect of the stack for lightning-fast performance and seamless user experiences.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Globe,
                title: "Scalable Solutions",
                description:
                  "Designing systems that grow with your business, from MVP to enterprise-scale applications.",
                gradient: "from-blue-500 to-purple-500",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`p-4 bg-gradient-to-r ${value.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
