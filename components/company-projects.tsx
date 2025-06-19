"use client"

import { useState, useRef, useEffect } from "react"
import { Github, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CompanyProjectsProps {
  company: {
    projects: Array<{
      title: string
      description: string
      image: string
      technologies: string[]
      metrics: Record<string, string>
      links: { demo?: string; github?: string }
    }>
  }
}

export function CompanyProjects({ company }: CompanyProjectsProps) {
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

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 lg:px-8"
      style={{
        background: `linear-gradient(135deg, #0f0f23 0%, #1a0b2e 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Key projects that showcase the impact and innovation delivered
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {company.projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                {/* Title and Description */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-white/5 rounded-lg">
                      <div className="text-sm font-bold text-white">{value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  {project.links.demo && (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex-1 text-xs"
                    >
                      <Play className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 flex-1 text-xs"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
