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
      className="relative py-12 lg:py-24 px-4 sm:px-6 lg:px-8 w-full bg-black"
      style={{
        background: `radial-gradient(circle at 100% 0%, rgba(0, 255, 255, 0.03) 0%, transparent 40%)`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Compact Header */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/40 text-[10px] uppercase tracking-[0.3em] font-light mb-8">
                Active Engagement
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-3 lg:mb-4 tracking-tighter uppercase leading-[0.9]">
              Currently
              <span className="block text-primary">Deploying</span>
            </h2>
            <p className="text-base lg:text-lg text-white/40 max-w-2xl mx-auto italic">
              Pioneering infrastructure for the decentralized future.
            </p>
          </div>

          {/* Compact Company Display */}
          <div className="bg-white/5 border border-white/10 p-6 lg:p-8">
            <div className="grid lg:grid-cols-4 gap-6 items-center">
              {/* Company Info - More compact */}
              <div className="lg:col-span-3 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="text-3xl lg:text-4xl">{currentCompanies[activeTab].logo}</div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-black text-white mb-1 uppercase tracking-tighter">
                      {currentCompanies[activeTab].name}
                    </h3>
                    <p className="text-base lg:text-lg text-primary font-bold mb-2 uppercase tracking-widest text-xs">
                      {currentCompanies[activeTab].role}
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs text-white/30 mb-3 uppercase tracking-widest">
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

                <p className="text-sm lg:text-base text-white/60 leading-relaxed italic">
                  {currentCompanies[activeTab].description}
                </p>

                {/* Compact Highlights */}
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">Operational Focus</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {currentCompanies[activeTab].highlights.slice(0, 4).map((highlight, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-none mt-1.5 flex-shrink-0" />
                        <p className="text-[10px] uppercase tracking-wider text-white/40 leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compact Status Card */}
              <div className="lg:col-span-1">
                <div className="p-4 lg:p-6 bg-primary/5 border border-primary/10 rounded-none text-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-none flex items-center justify-center mx-auto mb-3">
                    <Users className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h4 className="text-base lg:text-lg font-black text-white mb-1 tracking-tighter uppercase">Active Role</h4>
                  <p className="text-primary font-bold text-[10px] uppercase tracking-widest">Leading Innovation</p>
                </div>
              </div>
            </div>

            {/* Tabs for multiple companies - More compact */}
            {showTabs && (
              <div className="flex justify-center mt-6 pt-6 border-t border-white/5">
                <div className="flex space-x-2 bg-white/5 p-1">
                  {currentCompanies.map((company, index) => (
                    <button
                      key={company.id}
                      onClick={() => setActiveTab(index)}
                      className={`px-3 py-1.5 transition-all duration-300 text-[10px] uppercase tracking-widest font-bold ${
                        activeTab === index
                          ? "bg-primary text-black"
                          : "text-white/30 hover:text-white"
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
