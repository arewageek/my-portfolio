"use client"

import { useState, useRef, useEffect } from "react"
import { Building, Calendar, Users } from "lucide-react"
import { brandConfig } from "@/lib/brand-config"

export function CurrentlyWorking() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
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

  const currentCompanies = brandConfig.currentWork.filter((work) => work.status === "current")

  // Don't render if no current work
  if (currentCompanies.length === 0) return null

  const showTabs = currentCompanies.length > 1

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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-full text-green-300 text-xs font-medium mb-4 shadow-lg shadow-green-500/10">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              Currently Working At
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-3 lg:mb-4 leading-tight">
              Where I'm{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 bg-clip-text text-transparent">
                Building
              </span>
            </h2>
            <p className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
              Currently focused on pushing blockchain boundaries
            </p>
          </div>

          {/* Compact Company Display */}
          <div className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6 lg:p-8">
            <div className="grid lg:grid-cols-4 gap-6 items-center">
              {/* Company Info - More compact */}
              <div className="lg:col-span-3 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="text-3xl lg:text-4xl">{currentCompanies[activeTab].logo}</div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-black text-white mb-1">
                      {currentCompanies[activeTab].name}
                    </h3>
                    <p className="text-base lg:text-lg text-green-400 font-bold mb-2">
                      {currentCompanies[activeTab].role}
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>Since {currentCompanies[activeTab].startDate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Building className="w-3 h-3" />
                        <span>Full-time</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                  {currentCompanies[activeTab].description}
                </p>

                {/* Compact Highlights */}
                <div>
                  <h4 className="text-sm lg:text-base font-bold text-white mb-2">Current Focus</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {currentCompanies[activeTab].highlights.slice(0, 4).map((highlight, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
                        <p className="text-xs lg:text-sm text-gray-300 leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compact Status Card */}
              <div className="lg:col-span-1">
                <div className="p-4 lg:p-6 bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl text-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <h4 className="text-base lg:text-lg font-bold text-white mb-1">Active Role</h4>
                  <p className="text-green-400 font-semibold text-sm">Leading Innovation</p>
                </div>
              </div>
            </div>

            {/* Tabs for multiple companies - More compact */}
            {showTabs && (
              <div className="flex justify-center mt-6 pt-6 border-t border-white/10">
                <div className="flex space-x-2 bg-black/20 rounded-lg p-1">
                  {currentCompanies.map((company, index) => (
                    <button
                      key={company.id}
                      onClick={() => setActiveTab(index)}
                      className={`px-3 py-1.5 rounded-md font-medium transition-all duration-300 text-sm ${
                        activeTab === index
                          ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {company.name}
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
