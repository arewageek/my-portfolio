"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight, Calendar, MapPin, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { brandConfig } from "@/lib/brand-config"

export function CompaniesGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCompany, setHoveredCompany] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }, // Reduced threshold for faster mobile loading
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const list = [...brandConfig.companies].reverse()

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 lg:mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 lg:mb-8 leading-tight">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-lg lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Each company taught me something new about building at scale
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {
            list.map((company, index) => (
              <Link key={company.id} href={`/work/${company.id}`}>
                <div
                  className={`group relative p-6 lg:p-10 rounded-2xl lg:rounded-3xl border border-white/10 transition-all duration-500 cursor-pointer ${hoveredCompany === index
                    ? "transform scale-105 shadow-2xl shadow-purple-500/20"
                    : "hover:transform hover:scale-102 hover:shadow-xl hover:shadow-purple-500/10"
                    } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    background: `linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05), rgba(0,0,0,0.3))`,
                    backdropFilter: "blur(20px)",
                  }}
                  onMouseEnter={() => setHoveredCompany(index)}
                  onMouseLeave={() => setHoveredCompany(null)}
                >
                  <div className="space-y-6 lg:space-y-8">
                    {/* Company Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-4 sm:space-y-0">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl lg:text-4xl">
                          <Rocket />
                        </div>
                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                            {company.name}
                          </h3>
                          <p className="text-purple-400 font-semibold text-sm lg:text-base">{company.role}</p>
                        </div>
                      </div>
                      <div className="text-right text-xs lg:text-sm text-gray-400">
                        <div className="flex items-center space-x-1 mb-1">
                          <Calendar className="w-3 h-3" />
                          <span>{company.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{company.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-sm lg:text-lg">{company.description}</p>

                    {/* Key Achievements */}
                    {/* <div>
                      <h4 className="text-white font-semibold mb-3 lg:mb-4 text-sm lg:text-base">Key Achievements</h4>
                      <div className="space-y-2">
                        {company.achievements.slice(0, 3).map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-400 text-xs lg:text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div> */}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {company.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 lg:px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {company.technologies.length > 4 && (
                        <span className="px-2 lg:px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">
                          +{company.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Projects Count & CTA */}
                    <div className="flex items-center justify-between pt-4 lg:pt-6 border-t border-white/10">
                      <div className="text-xs lg:text-sm text-gray-400">
                        {/* <span className="text-white font-semibold">{company.projectCount}</span> products */}
                      </div>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 text-xs lg:text-sm"
                      >
                        View Details
                        <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-2" />
                      </Button>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}
