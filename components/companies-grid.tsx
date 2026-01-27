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
  started: string
  stopped?: string
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
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/40 text-[10px] uppercase tracking-[0.3em] font-light mb-8">
            Experience
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
            Professional
            <span className="block text-primary">Experiences</span>
          </h2>

          <p className="text-lg lg:text-xl text-white/40 max-w-3xl mx-auto italic leading-relaxed">
            A look at the companies I've worked with and the roles I held.
          </p>
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
                <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-white/5" />

                <div className="space-y-16 lg:space-y-24">
                  {companies.toReversed().map((company, index) => (
                    <motion.div
                      key={company.id}
                      variants={itemVariants}
                      className="relative"
                    >
                      {/* Timeline Dot - Responsive positioning */}
                      <div className="absolute left-3.5 sm:left-[31px] top-8 w-1.5 h-1.5 bg-primary rounded-none shadow-[0_0_10px_rgba(0,255,255,0.5)] z-10" />

                      <Link href={`/work/${company.id}`}>
                        <div
                          className={`group relative ml-12 sm:ml-24 p-8 lg:p-12 bg-white/5 border transition-all duration-500 ${
                            !company.stopped ? "border-primary/40 shadow-[0_0_20px_rgba(0,255,255,0.05)]" : "border-white/5 hover:border-primary/20"
                          }`}
                          onMouseEnter={() => setHoveredCompany(index)}
                          onMouseLeave={() => setHoveredCompany(null)}
                        >
                          <div className="relative space-y-8">
                            {/* Header */}
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                              <div className="space-y-4">
                                <div className="flex items-center gap-6">
                                  <div className="p-4 bg-primary rounded-none">
                                    {getCompanyIcon(company.type)}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter line-clamp-1 group-hover:text-primary transition-colors">
                                      {company.name}
                                    </h3>
                                    <p className="text-primary font-bold text-xs uppercase tracking-[0.3em]">{company.role}</p>
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col lg:items-end gap-4">
                                <div className="flex items-center gap-2">
                                  {!company.stopped && (
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary border border-primary/20 text-[9px] font-black text-black uppercase tracking-widest shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                                      <div className="w-1.5 h-1.5 bg-black rounded-none animate-pulse" />
                                      Current Role
                                    </div>
                                  )}
                                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[9px] uppercase font-black tracking-widest text-white/40">
                                     {company.type}
                                  </div>
                                </div>
                                <div className="flex flex-col lg:items-end gap-1 text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="w-3 h-3" />
                                    <span>{company.started} - {company.stopped || 'Present'}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <MapPin className="w-3 h-3" />
                                    <span>{company.location}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm lg:text-base text-white/60 leading-relaxed italic max-w-4xl">
                              {company.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                                {company.technologies.map((tech, techIndex) => (
                                    <span
                                    key={techIndex}
                                    className="px-2 py-1 bg-white/5 border border-white/5 text-white/30 text-[9px] uppercase font-bold tracking-widest hover:text-primary transition-colors cursor-default"
                                    >
                                    {tech}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="flex items-center justify-between pt-8 border-t border-white/5">
                              <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/20 font-black">
                                <Award className="w-3 h-3 text-primary" />
                                <span>View Details</span>
                              </div>
                              <div className="text-primary group-hover:translate-x-2 transition-transform duration-500">
                                <ChevronRight className="w-5 h-5" />
                              </div>
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
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {companies.map((company, index) => (
                  <motion.div
                    key={company.id}
                    variants={itemVariants}
                  >
                    <Link href={`/work/${company.id}`}>
                      <div
                        className={`group relative p-8 lg:p-10 bg-white/5 border transition-all duration-500 h-full rounded-none ${
                          !company.stopped ? "border-primary/40 shadow-[0_0_20px_rgba(0,255,255,0.05)]" : "border-white/5 hover:border-primary/20"
                        }`}
                        onMouseEnter={() => setHoveredCompany(index)}
                        onMouseLeave={() => setHoveredCompany(null)}
                      >
                        <div className="relative space-y-8 h-full flex flex-col">
                          {/* Header */}
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                              <div className="p-4 bg-primary rounded-none shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {getCompanyIcon(company.type)}
                              </div>
                              <div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors">
                                  {company.name}
                                </h3>
                                <p className="text-primary font-bold text-xs uppercase tracking-widest">{company.role}</p>
                              </div>
                            </div>

                            <div className="flex flex-col items-end gap-2">
                              {!company.stopped && (
                                <div className="px-2 py-0.5 bg-primary text-black text-[8px] font-black uppercase tracking-widest shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                                  Current
                                </div>
                              )}
                              <div className="px-2 py-1 bg-white/5 border border-white/10 text-[9px] uppercase font-black tracking-widest text-white/40">
                                {company.type}
                              </div>
                            </div>
                          </div>

                          {/* Meta Info */}
                          <div className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{company.started} - {company.stopped || 'Present'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{company.location}</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-white/40 leading-relaxed text-sm italic flex-grow">
                            {company.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                                {company.technologies.slice(0, 4).map((tech, techIndex) => (
                                    <span
                                    key={techIndex}
                                    className="px-2 py-1 bg-white/5 border border-white/5 text-white/30 text-[9px] uppercase font-bold tracking-widest hover:text-primary transition-colors cursor-default"
                                    >
                                    {tech}
                                    </span>
                                ))}
                            </div>

                          {/* CTA */}
                          <div className="flex items-center justify-between pt-6 border-t border-white/5">
                            <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/20 font-black">
                              <TrendingUp className="w-4 h-4 text-primary" />
                              <span>Details</span>
                            </div>
                            <div className="text-primary group-hover:translate-x-2 transition-transform duration-500">
                                <ArrowRight className="w-5 h-5" />
                            </div>
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