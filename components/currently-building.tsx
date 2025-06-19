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
      className="relative py-12 lg:py-24 px-4 sm:px-6 lg:px-8 w-full"
      style={{
        background: `linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #1a0b2e 100%)`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Compact Header */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium mb-4 shadow-lg shadow-blue-500/10">
              <Rocket className="w-3 h-3 mr-2" />
              Currently Building
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-3 lg:mb-4 leading-tight">
              What I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Creating
              </span>
            </h2>
            <p className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
              Innovative projects shaping the future of Web3
            </p>
          </div>

          {/* Compact Project Showcase */}
          <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 lg:p-8">
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Project Info - More compact */}
              <div className="lg:col-span-3 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-black text-white mb-2">
                      {currentProjects[activeProject].title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-300 leading-relaxed mb-3">
                      {currentProjects[activeProject].description}
                    </p>
                  </div>
                  <div
                    className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(
                      currentProjects[activeProject].status,
                    )} rounded-full text-white font-semibold text-xs whitespace-nowrap`}
                  >
                    {getStatusText(currentProjects[activeProject].status)}
                  </div>
                </div>

                {/* Compact Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-medium text-sm">Progress</span>
                    <span className="text-blue-400 font-bold text-sm">{currentProjects[activeProject].progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${currentProjects[activeProject].progress}%` }}
                    />
                  </div>
                </div>

                {/* Expected Launch */}
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Launch: {currentProjects[activeProject].expectedLaunch}</span>
                </div>

                {/* Compact Features */}
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">Key Features</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {currentProjects[activeProject].highlights.slice(0, 4).map((highlight, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-1.5 flex-shrink-0" />
                        <p className="text-xs lg:text-sm text-gray-300 leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compact Technologies */}
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProjects[activeProject].technologies.slice(0, 6).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full font-medium text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compact Status Card */}
              <div className="lg:col-span-1">
                <div className="p-4 lg:p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl text-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Code className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <h4 className="text-base lg:text-lg font-bold text-white mb-1">In Development</h4>
                  <p className="text-blue-400 font-semibold mb-3 text-sm">
                    {currentProjects[activeProject].progress}% Complete
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-xs"
                  >
                    <Play className="w-3 h-3 mr-1" />
                    Preview
                  </Button>
                </div>
              </div>
            </div>

            {/* Project Navigation - More compact */}
            {showNavigation && (
              <div className="flex justify-center mt-6 pt-6 border-t border-white/10">
                <div className="flex space-x-2 bg-black/20 rounded-lg p-1">
                  {currentProjects.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => setActiveProject(index)}
                      className={`px-3 py-1.5 rounded-md font-medium transition-all duration-300 text-sm ${
                        activeProject === index
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                          : "text-gray-400 hover:text-white"
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
