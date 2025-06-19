"use client"

import { useState, useRef, useEffect } from "react"

interface CompanyOverviewProps {
  company: {
    overview: {
      description: string
      responsibilities: string[]
      impact: string
    }
    technologies: string[]
  }
}

export function CompanyOverview({ company }: CompanyOverviewProps) {
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

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              What I{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Built
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Description & Impact */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">My Role</h3>
                <p className="text-xl text-gray-300 leading-relaxed">{company.overview.description}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Impact Created</h3>
                <p className="text-lg text-purple-400 leading-relaxed font-medium">{company.overview.impact}</p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Key Responsibilities</h3>
                <div className="space-y-4">
                  {company.overview.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="pt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Technologies Used</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {company.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
