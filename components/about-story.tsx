"use client"

import { useState, useRef, useEffect } from "react"
import { Code2, Lightbulb, Rocket } from "lucide-react"
import { brandConfig } from "@/lib/brand-config"

export function AboutStory() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Code2,
      title: brandConfig.projects.length,
      description: "Built and deployed",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: Lightbulb,
      title: "5+ Years",
      description: "In blockchain development",
      gradient: "from-pink-500 to-purple-500",
    },
    // {
    //   icon: Rocket,
    //   title: "100K+ Users",
    //   description: "Across all platforms",
    //   gradient: "from-blue-500 to-cyan-500",
    // },
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Story content */}
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 col-span-3">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                  My{" "}
                  <span className="text-pink-400">
                    Story
                  </span>
                </h2>

                <div className="space-y-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
                  <p>
                    I got into blockchain because the space felt alive. Things were moving fast, sometimes too fast, but that energy pulled me in. It felt like being part of something that was still being figured out, and that was exciting.
                  </p>

                  <p>
                    As I worked in Web3, I started to notice a pattern. The tech was powerful, but the experience wasn’t always friendly. People often struggled to use products that were supposed to empower them. That stuck with me, and it shaped how I approach building—I want to create tools that people enjoy using, not just ones that are technically impressive.
                  </p>

                  <p>
                    Since then, I’ve focused on projects that try to make blockchain simpler and more approachable. Along the way, I’ve also been exploring how AI can fit into the picture, as a way to make systems smarter and interactions smoother.
                  </p>

                  <p>
                    For me, it always comes back to people. Blockchain isn’t just code or tokens, it’s about building systems that work for real lives. That’s the part that keeps me hooked and keeps me building.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            {/* <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-3 bg-gradient-to-r ${highlight.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">{highlight.title}</div>
                      <div className="text-gray-400">{highlight.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
