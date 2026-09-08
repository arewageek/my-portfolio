"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, Github, Plus, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export interface Project {
  id: string
  title: string
  category: string
  description: string | null
  image: string
  status: string
  technologies: string[]
  links: {
    demo: string | null
    github: string | null
    live?: string | null
  } | null
}

interface ProjectShowcaseProps {
  projects: any[]
  categories?: any[]
  showLoadMore?: boolean
  showHeader?: boolean
  layoutMode?: "sticky" | "grid"
}

export function ProjectShowcase({ projects, categories = [], showLoadMore = true, showHeader = true, layoutMode = "sticky" }: ProjectShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState("All")
  const [visibleCount, setVisibleCount] = useState(showLoadMore ? 3 : 100)

  const filters = ["All", ...categories.map((c: any) => c.name)]

  const allFilteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  const filteredProjects = showLoadMore
    ? allFilteredProjects.slice(0, visibleCount)
    : allFilteredProjects

  const hasMoreProjects = showLoadMore && visibleCount < allFilteredProjects.length

  const loadMoreProjects = () => {
    setVisibleCount(prev => Math.min(prev + 3, allFilteredProjects.length))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  } as const

  const isGrid = layoutMode === "grid"

  return (
    <section className={`px-6 sm:px-12 lg:px-24 border-t border-gray-200 ${isGrid ? 'py-12 lg:py-16' : 'py-24'}`}>
      <div className={`${isGrid ? 'max-w-7xl' : 'max-w-5xl'} mx-auto`}>
        {showHeader && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-20"
          >
            <p className="font-handwriting text-xl text-gray-500 mb-2">Selected Works</p>
            <h2 className="text-4xl font-serif text-gray-900">Projects</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl font-sans font-light">
              A curated collection of things I have built. Ranging from minimal web apps to complex blockchain infrastructure.
            </p>
          </motion.div>
        )}

        {/* <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-6 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter)
                setVisibleCount(showLoadMore ? 3 : 100)
              }}
              className={`text-sm font-medium transition-colors pb-1 ${
                activeFilter === filter
                  ? "text-gray-900 border-b border-gray-900"
                  : "text-gray-400 hover:text-gray-900"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div> */}

          <div className="flex flex-col gap-24 sm:gap-32 md:gap-48 mt-12 pb-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={project.id || project.title}
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-0`}
                  >
                    {/* Large Background Number */}
                    <div 
                      className={`absolute -top-6 md:-top-24 ${isEven ? 'left-2 md:-left-12' : 'right-2 md:-right-12'} text-[8rem] md:text-[16rem] font-serif font-bold text-gray-500/5 pointer-events-none select-none leading-none z-0`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Image Container */}
                    <div className="w-full md:w-[60%] relative z-10">
                      <motion.div 
                        whileHover={{ scale: 0.98 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-gray-100 shadow-xl border border-gray-200/50 relative group cursor-pointer"
                      >
                        <img
                          src={project.image?.startsWith('http') || project.image?.startsWith('/') ? project.image : `/projects/${project.image}`}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* External link button overlay if there's a demo */}
                        {project.links?.demo && (
                          <Link href={project.links.demo} target="_blank" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                            <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-900 shadow-xl translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                              <ExternalLink className="w-6 h-6 stroke-[1.5]" />
                            </div>
                          </Link>
                        )}
                      </motion.div>
                    </div>

                    {/* Content Card (Overlapping) */}
                    <motion.div 
                      className={`w-[92%] sm:w-[85%] md:w-[50%] relative z-20 mx-auto md:mx-0 -mt-20 md:mt-0 ${isEven ? 'md:-ml-16 md:mt-24' : 'md:-mr-16 md:-mt-24'} bg-white/95 backdrop-blur-xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-100`}
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="flex items-center gap-4 mb-5 md:mb-6">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400">{project.category || project.status}</span>
                        <div className="h-px w-8 md:w-12 bg-gray-200"></div>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900 mb-4 md:mb-6 leading-tight">{project.title}</h3>
                      
                      <p className="text-gray-600 font-light leading-relaxed mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                        {project.technologies?.map((tech: string) => (
                          <span key={tech} className="text-[9px] md:text-[10px] text-gray-500 border border-gray-200 px-2 md:px-3 py-1 md:py-1.5 uppercase tracking-widest bg-gray-50">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-6 items-center">
                        {project.links?.demo && (
                          <Link href={project.links.demo} target="_blank" className="group inline-flex items-center gap-2 md:gap-3 text-xs md:text-sm font-medium text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
                            Explore Project <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        )}
                        {project.links?.github && (
                          <Link href={project.links.github} target="_blank" className="group flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
                            <Github className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-y-0.5 transition-transform" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        {hasMoreProjects && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 flex justify-center"
          >
            {showLoadMore && visibleCount >= 6 ? (
              <Link
                href="/projects"
                className="flex items-center gap-3 text-sm font-serif text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900 pb-1"
              >
                <Plus className="w-4 h-4 stroke-[1.5]" /> View All Projects
              </Link>
            ) : (
              <button
                onClick={loadMoreProjects}
                className="flex items-center gap-3 text-sm font-serif text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900 pb-1"
              >
                <Plus className="w-4 h-4 stroke-[1.5]" /> View More Projects
              </button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}