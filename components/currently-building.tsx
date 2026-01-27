"use client"

import { useState, useRef, useEffect } from "react"
import { Rocket, Clock, Code, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { brandConfig } from "@/lib/brand-config"

export function CurrentlyBuilding() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const currentProjects = brandConfig.currentProjects

  // Don't render if no current projects
  if (currentProjects.length === 0) return null

  const showNavigation = currentProjects.length > 1

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-development":
        return "from-blue-600 to-cyan-600"
      case "beta":
        return "from-yellow-600 to-orange-600"
      case "launching-soon":
        return "from-green-600 to-emerald-600"
      default:
        return "from-purple-600 to-pink-600"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "in-development":
        return "In Development"
      case "beta":
        return "Beta Testing"
      case "launching-soon":
        return "Launching Soon"
      default:
        return "Active"
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-12 lg:py-24 px-4 sm:px-6 lg:px-8 w-full bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Compact Header */}
          <div className="text-center mb-12 lg:mb-16 space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-none text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
                Active Projects
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              Currently
              <span className="block text-primary">Building</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/40 max-w-2xl mx-auto italic font-light">
                A look at the projects I'm actively working on right now.
            </p>
          </div>

          {/* Compact Project Showcase */}
          <div className="bg-white/5 border border-white/5 rounded-none p-8 lg:p-12 relative overflow-hidden group hover:border-primary/20 transition-all duration-500">
            <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
              {/* Project Info */}
              <div className="lg:col-span-3 space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">
                      {currentProjects[activeProject].title}
                    </h3>
                    <p className="text-white/40 text-sm lg:text-base italic font-light leading-relaxed">
                      {currentProjects[activeProject].description}
                    </p>
                  </div>
                  <div
                    className="px-3 py-1 bg-white/5 border border-white/10 text-white/40 font-black text-[9px] uppercase tracking-widest whitespace-nowrap"
                  >
                    {getStatusText(currentProjects[activeProject].status)}
                  </div>
                </div>

                {/* Compact Progress Bar */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-[0.3em]">
                    <span className="text-white/20">Development Progress</span>
                    <span className="text-primary">{currentProjects[activeProject].progress}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-none h-1.5 relative overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-primary transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                      style={{ width: `${currentProjects[activeProject].progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-white/20">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] italic">Expected Launch: {currentProjects[activeProject].expectedLaunch}</span>
                </div>

                {/* Compact Features */}
                <div className="grid sm:grid-cols-2 gap-8">
                   <div className="space-y-4">
                      <h4 className="text-[10px] uppercase font-black tracking-widest text-white/40">Key Features</h4>
                      <div className="space-y-3">
                        {currentProjects[activeProject].highlights.slice(0, 4).map((highlight, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-none mt-1.5 flex-shrink-0" />
                            <p className="text-[10px] text-white/40 leading-relaxed font-bold uppercase tracking-wider italic">{highlight}</p>
                          </div>
                        ))}
                      </div>
                   </div>

                   <div className="space-y-4">
                      <h4 className="text-[10px] uppercase font-black tracking-widest text-white/40">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProjects[activeProject].technologies.slice(0, 6).map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white/5 text-white/30 border border-white/5 rounded-none font-bold text-[9px] uppercase tracking-widest group-hover:border-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                   </div>
                </div>
              </div>

              {/* Compact Status Card */}
              <div className="lg:col-span-1">
                <div className="h-full p-8 bg-white/5 border border-white/5 rounded-none text-center flex flex-col items-center justify-center space-y-6 transition-all duration-500 hover:bg-white/10 group/status">
                  <div className="w-16 h-16 bg-primary rounded-none flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.4)] group-hover/status:scale-110 transition-transform">
                    <Code className="w-8 h-8 text-black" />
                  </div>
                  <div className="space-y-2">
                      <h4 className="text-xs font-black text-white uppercase tracking-widest">In Development</h4>
                      <p className="text-primary font-black text-[10px] uppercase tracking-widest">
                        {currentProjects[activeProject].progress}% Complete
                      </p>
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full text-[9px] uppercase font-black tracking-[0.4em] rounded-none py-4"
                  >
                    <Play className="w-3 h-3 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>
            </div>

            {/* Project Navigation */}
            {showNavigation && (
              <div className="flex justify-center mt-12 pt-12 border-t border-white/5">
                <div className="flex space-x-4">
                  {currentProjects.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => setActiveProject(index)}
                      className={`px-4 py-2 rounded-none font-black transition-all duration-300 text-[10px] uppercase tracking-widest ${
                        activeProject === index
                          ? "bg-primary text-black"
                          : "bg-white/5 text-white/40 hover:text-white"
                      }`}
                    >
                      {project.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
