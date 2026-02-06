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
    <section ref={sectionRef} className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`space-y-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Story content */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-none text-white/60 text-[9px] font-black tracking-[0.4em] uppercase">
                    Genesis
                </div>
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                  My
                  <span className="block text-primary">Story</span>
                </h2>

                <div className="space-y-8 text-lg lg:text-xl text-white/60 leading-relaxed italic font-light">
                  <p>
                    I entered the crypto space because it felt alive. The pace of innovation was intense, and building within an ecosystem that was still taking shape in real time offered a rare and deeply engaging challenge.
                  </p>

                  <p>
                    As I worked across Web3 systems, a consistent issue became clear: the disconnect between cryptographic capability and human usability. While protocols grew increasingly secure and advanced, user experience often lagged behind. This pushed me toward building interfaces that make decentralized systems understandable and usable by real people.
                  </p>

                  <p>
                    My focus is now centered on creating systems that balance clarity with performance. By combining thoughtful design with reliable, scalable infrastructure, I work to reduce friction for emerging use cases in digital identity and online commerce.
                  </p>

                  <p>
                    At the core of my work is the human behind the hash. Decentralization is not just a technical concept, but a social one. Building systems that strengthen individual autonomy is the motivation behind everything I ship.
                  </p>
                </div>
              </div>
            </div>

            {/* Side Info / Highlights */}
            <div className="lg:col-span-4 space-y-8">
                <div className="bg-white/5 border border-white/5 p-8 rounded-none">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-white mb-6">Kernel Parameters</h4>
                    <div className="space-y-8">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <div className="p-3 bg-primary rounded-none">
                                    <highlight.icon className="w-5 h-5 text-black" />
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-white uppercase tracking-tighter">{highlight.title}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-white/45 font-bold">{highlight.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
