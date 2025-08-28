"use client"

import { useState, useRef, useEffect } from "react"
import { Github, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { brandConfig } from "@/lib/brand-config"
import Link from "next/link"

export function ProjectShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")
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

  const filters = ["All", "DeFi", "Infra", "NFT", "E-Commerce", "AI"]


  const filteredProjects = activeFilter === "All" ? brandConfig.projects : brandConfig.projects.filter((p) => p.category === activeFilter)

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 lg:mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 glass-card rounded-full text-purple-300 text-xs lg:text-sm font-medium mb-8 lg:mb-10 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse" />
            Project Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 lg:mb-8 leading-tight">
            My{" "}
            <span className="gradient-text-primary drop-shadow-lg">
              Creations
            </span>
          </h2>
          <p className="text-lg lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A curated collection of projects that push the boundaries of what’s possible.
          </p>
        </div>

        {/* Filter Controls - Mobile optimized */}
        <div
          className={`flex flex-wrap justify-center gap-2 lg:gap-3 mb-8 lg:mb-12 px-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "200ms" }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-xl lg:rounded-2xl font-medium transition-all duration-300 text-sm lg:text-base hover:-translate-y-0.5 ${activeFilter === filter
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/40 scale-105"
                : "glass-card text-gray-400 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-purple-500/20"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid - Responsive */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.toReversed().map((project, index) => (
            <div
              key={index}
              className={`group relative glass-card rounded-2xl lg:rounded-3xl overflow-hidden hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30 ${project.status == 'current' && "border-purple-500/40 transform shadow-2xl shadow-purple-500/30"} ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Status Badge */}
              <div className="absolute top-4 lg:top-6 right-4 lg:right-6 z-10">
                <span
                  className={`px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs font-bold backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 ${project.status === "Live"
                    ? "bg-green-500/30 text-green-300 border border-green-500/50 shadow-green-500/20"
                    : "bg-yellow-500/30 text-yellow-300 border border-yellow-500/50 shadow-yellow-500/20"
                    }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Project Image */}
              <div className="relative h-40 lg:h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                <img
                  src={`/projects/${project.image}` || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-4 lg:p-6 space-y-4">
                {/* Title and Description */}
                <div>
                  <div className="flex items-center gap-2 lg:gap-3 mb-2">
                    <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                </div>

                {/* Metrics */}
                {/* <div className="grid grid-cols-3 gap-2">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-white/5 rounded-lg">
                      <div className="text-xs lg:text-sm font-bold text-white truncate">{value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide truncate">{key}</div>
                    </div>
                  ))}
                </div> */}

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-xs font-medium backdrop-blur-sm hover:bg-purple-500/30 hover:scale-105 transition-all duration-200"
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
                      asChild={true}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex-1 text-xs shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Link href={project.links.demo} target="_blank">
                        <Play className="w-3 h-3 mr-1" />
                        Preview
                      </Link>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      size="sm"
                      asChild={true}
                      className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 flex-1 text-xs hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
                      variant="outline"
                    >
                      <Link href={project.links.github} target="_blank">
                        <Github className="w-3 h-3 mr-1" />
                        Repo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 lg:mt-16">
          <Link href="/projects">
            <Button
              size="lg"
              variant="outline"
              className="glass-card border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 px-8 lg:px-12 py-3 lg:py-4 text-base lg:text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1"
            >
              Load More Projects
            </Button>
          </Link>
        </div>
      </div>
    </section >
  )
}
