"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, Github, Plus } from "lucide-react"
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
  }

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

        {isGrid ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id || project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col gap-6"
                >
                  <div className="w-full aspect-[4/3] overflow-hidden relative bg-gray-100 border border-gray-200 shadow-sm rounded-sm">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <img
                        src={project.image?.startsWith('http') || project.image?.startsWith('/') ? project.image : `/projects/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Creative Hover Overlay */}
                    <div className="absolute inset-0 bg-[#F4F1EA]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-6">
                      <div className="flex gap-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        {project.links?.demo && (
                          <Link href={project.links.demo} target="_blank" className="flex flex-col items-center gap-2 group/link">
                            <div className="w-12 h-12 rounded-full border border-gray-900 flex items-center justify-center bg-transparent group-hover/link:bg-gray-900 group-hover/link:text-[#F4F1EA] transition-all duration-300">
                              <ExternalLink className="w-5 h-5 stroke-[1.5]" />
                            </div>
                            <span className="text-xs font-medium uppercase tracking-wider text-gray-900">Live</span>
                          </Link>
                        )}
                        {project.links?.github && (
                          <Link href={project.links.github} target="_blank" className="flex flex-col items-center gap-2 group/link">
                            <div className="w-12 h-12 rounded-full border border-gray-900 flex items-center justify-center bg-transparent group-hover/link:bg-gray-900 group-hover/link:text-[#F4F1EA] transition-all duration-300">
                              <Github className="w-5 h-5 stroke-[1.5]" />
                            </div>
                            <span className="text-xs font-medium uppercase tracking-wider text-gray-900">Code</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 px-2">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="text-2xl font-serif text-gray-900 group-hover:text-gray-600 transition-colors duration-300">{project.title}</h3>
                        {/* <p className="text-sm font-handwriting text-gray-500 mt-1">{project.category}</p> */}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 font-light leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies?.slice(0, 4).map((tech: string) => (
                        <span key={tech} className="text-[10px] text-gray-600 border border-gray-200 px-2 py-1 uppercase tracking-wider bg-white">
                          {tech}
                        </span>
                      ))}
                      {project.technologies?.length > 4 && (
                        <span className="text-[10px] text-gray-400 border border-transparent px-1 py-1 uppercase tracking-wider">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id || project.title}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                  className={`sticky w-full ${index !== filteredProjects.length - 1 ? 'mb-24 lg:mb-32' : ''}`}
                  style={{
                    top: `calc(6rem + ${index * 1.5}rem)`,
                    zIndex: index,
                  }}
                >
                  <div className="group flex flex-col md:flex-row gap-8 md:gap-12 items-center bg-[#FAF9F6] p-4 sm:p-6 md:p-10 border border-gray-200 shadow-[0_-8px_30px_rgba(0,0,0,0.04)] rounded-sm">
                    {/* Project Image */}
                    <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden relative bg-gray-100">
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <img
                          src={project.image?.startsWith('http') || project.image?.startsWith('/') ? project.image : `/projects/${project.image}`}
                          alt={project.title}
                          className="w-full h-full object-cover shadow-sm"
                        />
                      </motion.div>
                    </div>

                    {/* Project Info */}
                    <div className="w-full md:w-1/2 space-y-6">
                      <div>
                        <h3 className="text-3xl font-serif text-gray-900 group-hover:text-gray-600 transition-colors duration-300">{project.title}</h3>
                        <p className="text-sm font-handwriting text-gray-500 mt-2">{/*project.category • */}{project.status}</p>
                      </div>
                      
                      <p className="text-lg text-gray-600 leading-relaxed font-light">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.technologies?.map((tech: string) => (
                          <span key={tech} className="text-xs text-gray-500 border border-gray-200 px-3 py-1 uppercase tracking-wider bg-white">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-6 pt-6">
                        {project.links?.demo && (
                          <Link href={project.links.demo} target="_blank" className="text-sm font-medium text-gray-900 hover:text-gray-500 flex items-center gap-2 border-b border-gray-900 hover:border-gray-500 pb-1 transition-colors">
                            Live Demo <ExternalLink className="w-4 h-4 stroke-[1.5]" />
                          </Link>
                        )}
                        {project.links?.github && (
                          <Link href={project.links.github} target="_blank" className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center gap-2 border-b border-transparent hover:border-gray-900 pb-1 transition-colors">
                            GitHub <Github className="w-4 h-4 stroke-[1.5]" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

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