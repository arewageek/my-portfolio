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
    <section ref={sectionRef} className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-none text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
                Projects
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              Core
              <span className="block text-primary">Projects</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/40 max-w-3xl mx-auto italic font-light">
                A look at the specific projects I delivered during my time here.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {company.projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white/5 border border-white/5 rounded-none overflow-hidden hover:border-primary/20 transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-56 bg-white/5">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-8 space-y-6">
                {/* Title and Description */}
                <div>
                  <h3 className="text-xs font-black text-white mb-2 uppercase tracking-widest leading-none group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider font-bold italic leading-relaxed">{project.description}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-[10px] font-black text-white uppercase tracking-tighter mb-1">{value}</div>
                      <div className="text-[7px] text-white/20 uppercase tracking-[0.2em] font-black">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/5 text-white/40 border border-white/5 rounded-none text-[8px] uppercase font-black tracking-widest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {project.links.demo && (
                    <Button
                      variant="primary"
                      size="sm"
                      className="flex-1 text-[9px] uppercase font-black tracking-[0.3em] rounded-none py-4"
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-[9px] uppercase font-black tracking-[0.3em] rounded-none py-4 border-white/10 text-white/40 hover:text-white"
                    >
                      GitHub
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
