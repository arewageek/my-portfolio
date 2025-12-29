"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight, Briefcase, Calendar, MapPin, Rocket, Building2, Users, TrendingUp, Award, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence, Variants } from "framer-motion"

export interface Company {
  id: string
  name: string
  role: string
  period: string
  location: string
  type: string
  description: string
  technologies: string[]
}

interface CompaniesGridProps {
  companies: Company[]
}

export function CompaniesGrid({ companies }: CompaniesGridProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCompany, setHoveredCompany] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'timeline' | 'grid'>('timeline')
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getCompanyIcon = (type: string = '') => {
    switch (type.toLowerCase()) {
      case 'startup':
        return <Rocket className="w-5 h-5" />
      case 'enterprise':
        return <Building2 className="w-5 h-5" />
      case 'agency':
        return <Users className="w-5 h-5" />
      default:
        return <Briefcase className="w-5 h-5" />
    }
  }

  const getTypeColor = (type: string = '') => {
    switch (type.toLowerCase()) {
      case 'startup':
        return 'from-emerald-500 to-green-500'
      case 'enterprise':
        return 'from-blue-500 to-cyan-500'
      case 'agency':
        return 'from-purple-500 to-pink-500'
      default:
        return 'from-gray-500 to-slate-500'
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <div className="inline-flex items-center px-6 py-3 glass-card rounded-full text-purple-300 text-sm font-medium mb-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse" />
            Professional Journey
            <div className="ml-3 px-2 py-1 bg-purple-500/20 rounded-full text-xs">
              {companies.length} Companies
            </div>
          </div> */}

          {/* <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-8 leading-tight">
            Career{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
              Journey
            </span>
          </h2> */}

          {/* <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            From startups to enterprises, each experience shaped my expertise in building scalable solutions and leading high-performing teams.
          </p> */}

          {/* Stats */}
          {/* <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{companies.length}+</div>
              <div className="text-sm text-gray-400">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {companies.reduce((acc, company) => acc + company.technologies.length, 0)}+
              </div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {new Set(companies.map(c => c.type)).size}
              </div>
              <div className="text-sm text-gray-400">Industries</div>
            </div>
          </div> */}

          {/* View Toggle */}
          {/* <div className="flex items-center justify-center gap-2 glass-card rounded-xl p-1 max-w-xs mx-auto">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${activeTab === 'timeline'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
            >
              Timeline
            </button>
            <button
              onClick={() => setActiveTab('grid')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${activeTab === 'grid'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
            >
              Grid
            </button>
          </div> */}
        </motion.div>

        {/* Companies Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {activeTab === 'timeline' ? (
              // Timeline View
              <div className="relative">
                {/* Timeline Line - Responsive positioning */}
                <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 opacity-30" />

                <div className="space-y-8 sm:space-y-12">
                  {companies.toReversed().map((company, index) => (
                    <motion.div
                      key={company.id}
                      variants={itemVariants}
                      className="relative"
                    >
                      {/* Timeline Dot - Responsive positioning */}
                      <div className="absolute left-2.5 sm:left-6 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 sm:border-4 border-black shadow-lg z-10" />

                      <Link href={`/work/${company.id}`}>
                        <div
                          className="group relative ml-10 sm:ml-20 p-4 sm:p-6 lg:p-8 glass-card rounded-2xl sm:rounded-3xl hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-[1.01] sm:hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20"
                          onMouseEnter={() => setHoveredCompany(index)}
                          onMouseLeave={() => setHoveredCompany(null)}
                        >
                          {/* Background Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl" />

                          <div className="relative space-y-4 sm:space-y-6">
                            {/* Header */}
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                              <div className="space-y-3">
                                <div className="flex items-center gap-3 sm:gap-4">
                                  <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${getTypeColor(company.type)} shadow-lg`}>
                                    {getCompanyIcon(company.type)}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 truncate">
                                      {company.name}
                                    </h3>
                                    <p className="text-purple-400 font-semibold text-sm sm:text-base lg:text-lg">{company.role}</p>
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col sm:flex-row sm:items-start lg:flex-col lg:items-end gap-3 sm:gap-4">
                                <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold backdrop-blur-md shadow-lg bg-gradient-to-r ${getTypeColor(company.type)} text-white self-start sm:self-auto`}>
                                  {getCompanyIcon(company.type)}
                                  <span className="hidden sm:inline">{company.type}</span>
                                </div>
                                <div className="flex flex-wrap gap-3 sm:gap-4 lg:flex-col lg:items-end lg:gap-1 text-xs sm:text-sm text-gray-400">
                                  <div className="flex items-center gap-1.5 sm:gap-2">
                                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span>{company.period}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5 sm:gap-2">
                                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span>{company.location}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                              {company.description}
                            </p>

                            {/* Technologies */}
                            <div className="space-y-2 sm:space-y-3">
                              <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider">Technologies</h4>
                              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {company.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-white/5 to-white/10 text-gray-300 border border-white/10 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-500/30 hover:text-purple-300 hover:scale-105 transition-all duration-200 cursor-default"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 pt-4 sm:pt-6 border-t border-white/10">
                              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                                <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span>View detailed experience</span>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-purple-400 hover:text-white hover:bg-purple-500/10 group/btn self-start sm:self-auto"
                              >
                                <span className="text-xs sm:text-sm">Learn More</span>
                                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              // Grid View
              <div className="grid lg:grid-cols-2 gap-8">
                {companies.map((company, index) => (
                  <motion.div
                    key={company.id}
                    variants={itemVariants}
                  >
                    <Link href={`/work/${company.id}`}>
                      <div
                        className="group relative p-8 glass-card rounded-3xl hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 h-full"
                        onMouseEnter={() => setHoveredCompany(index)}
                        onMouseLeave={() => setHoveredCompany(null)}
                      >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                        <div className="relative space-y-6 h-full flex flex-col">
                          {/* Header */}
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                              <div className={`p-3 rounded-xl bg-gradient-to-r ${getTypeColor(company.type)} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {getCompanyIcon(company.type)}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                                  {company.name}
                                </h3>
                                <p className="text-purple-400 font-semibold">{company.role}</p>
                              </div>
                            </div>

                            <div className={`px-3 py-1.5 rounded-xl text-xs font-bold backdrop-blur-md shadow-lg bg-gradient-to-r ${getTypeColor(company.type)} text-white`}>
                              {company.type}
                            </div>
                          </div>

                          {/* Meta Info */}
                          <div className="flex flex-col gap-2 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{company.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{company.location}</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 leading-relaxed flex-grow">
                            {company.description}
                          </p>

                          {/* Technologies */}
                          <div className="space-y-3">
                            <div className="flex flex-wrap gap-2">
                              {company.technologies.slice(0, 4).map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2.5 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-lg text-xs font-medium backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition-all duration-200"
                                >
                                  {tech}
                                </span>
                              ))}
                              {company.technologies.length > 4 && (
                                <span className="px-2.5 py-1 bg-gray-500/20 text-gray-400 rounded-lg text-xs font-medium">
                                  +{company.technologies.length - 4}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <TrendingUp className="w-4 h-4" />
                              <span>View details</span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-purple-400 hover:text-white hover:bg-purple-500/10 group/btn"
                            >
                              Explore
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}