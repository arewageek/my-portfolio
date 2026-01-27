"use client"

import { useState, useRef, useEffect } from "react"
import { Github, ExternalLink, Play, Star, TrendingUp, Users, Calendar, Grid3X3, List, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { usePathname } from "next/navigation"

type ViewMode = 'grid' | 'list'

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
    metrics?: any | null
}

interface ProjectShowcaseProps {
    projects: Project[]
    showLoadMore?: boolean
    showHeader?: boolean
}

export function ProjectShowcase({ projects, showLoadMore = true, showHeader = true }: ProjectShowcaseProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [activeFilter, setActiveFilter] = useState("All")
    const [viewMode, setViewMode] = useState<ViewMode>('grid')
    const [hoveredProject, setHoveredProject] = useState<number | null>(null)
    const [visibleCount, setVisibleCount] = useState(9)
    const sectionRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()
    const isHomePage = pathname === '/'

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

    const filters = ["All", "DeFi", "Infra", "NFT", "E-Commerce", "AI"]
    const allFilteredProjects = activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter)

    const filteredProjects = isHomePage && showLoadMore
        ? allFilteredProjects.slice(0, visibleCount)
        : allFilteredProjects

    const hasMoreProjects = isHomePage && showLoadMore && visibleCount < allFilteredProjects.length

    const loadMoreProjects = () => {
        setVisibleCount(prev => Math.min(prev + 6, allFilteredProjects.length))
    }

    // Reset visible count when filter changes
    useEffect(() => {
        setVisibleCount(15)
    }, [activeFilter])

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'live':
                return 'from-emerald-500 to-green-500'
            case 'beta':
                return 'from-blue-500 to-cyan-500'
            case 'dev':
                return 'from-amber-500 to-orange-500'
            default:
                return 'from-gray-500 to-slate-500'
        }
    }

    const getStatusIcon = (status: string) => {
        switch (status.toLowerCase()) {
            case 'live':
                return <TrendingUp className="w-3 h-3" />
            case 'beta':
                return <Users className="w-3 h-3" />
            case 'dev':
                return <Calendar className="w-3 h-3" />
            default:
                return <Star className="w-3 h-3" />
        }
    }

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 30,
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
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/10 via-transparent to-zinc-900/10" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl opacity-20" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section - Conditionally rendered */}
                {showHeader && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center px-6 py-3 glass-card rounded-full text-purple-300 text-sm font-medium mb-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse" />
                            Featured Projects
                            <div className="ml-3 px-2 py-1 bg-purple-500/20 rounded-full text-xs">
                                {projects.length}
                            </div>
                        </div>

                        <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-8 leading-tight">
                            My{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
                                Projects
                            </span>
                        </h2>

                        <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                            Explore my journey through innovative projects that blend cutting-edge technology with exceptional user experiences.
                        </p>

                        {/* Stats */}
                        <div className="flex justify-center gap-8 mb-12">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">{projects.length}+</div>
                                <div className="text-sm text-gray-400">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">{filters.length - 1}</div>
                                <div className="text-sm text-gray-400">Categories</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">
                                    {projects.filter(p => p.status?.toLowerCase() === 'live').length}
                                </div>
                                <div className="text-sm text-gray-400">Live</div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Controls */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 ${!showHeader ? 'mt-8' : ''}`}
                >
                    {/* Filter Controls */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 text-sm hover:-translate-y-0.5 ${activeFilter === filter
                                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/40"
                                    : "glass-card text-gray-400 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-purple-500/20"
                                    }`}
                            >
                                <span className="relative z-10">{filter}</span>
                                {activeFilter === filter && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex items-center gap-2 glass-card rounded-xl p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid'
                                ? 'bg-purple-600 text-white shadow-lg'
                                : 'text-gray-400 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            <Grid3X3 className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list'
                                ? 'bg-purple-600 text-white shadow-lg'
                                : 'text-gray-400 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            <List className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>

                {/* Projects Display */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeFilter}-${viewMode}`}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className={
                            viewMode === 'grid'
                                ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                                : "space-y-6"
                        }
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={`${project.title}-${index}`}
                                variants={itemVariants}
                                onHoverStart={() => setHoveredProject(index)}
                                onHoverEnd={() => setHoveredProject(null)}
                                className={`group relative overflow-hidden transition-all duration-500 ${viewMode === 'grid'
                                    ? 'glass-card rounded-3xl hover:border-purple-500/40 hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30'
                                    : 'glass-card rounded-2xl p-6 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/20'
                                    }`}
                            >
                                {viewMode === 'grid' ? (
                                    // Grid View
                                    <>
                                        {/* Status Badge */}
                                        <div className="absolute top-6 right-6 z-20">
                                            <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 bg-gradient-to-r ${getStatusColor(project.status)} text-white`}>
                                                {getStatusIcon(project.status)}
                                                {project.status}
                                            </div>
                                        </div>

                                        {/* Project Image */}
                                        <div className="relative h-48 lg:h-56 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
                                            <img
                                                src={`${project.image}` || "/placeholder.svg"}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Quick Actions */}
                                            <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                                {project.links?.demo && (
                                                    <Button
                                                        size="sm"
                                                        asChild
                                                        className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 flex-1"
                                                    >
                                                        <Link href={project.links.demo} target="_blank">
                                                            <Play className="w-3 h-3 mr-1" />
                                                            Preview
                                                        </Link>
                                                    </Button>
                                                )}
                                                {project.links?.github && (
                                                    <Button
                                                        size="sm"
                                                        asChild
                                                        variant="outline"
                                                        className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 flex-1"
                                                    >
                                                        <Link href={project.links.github} target="_blank">
                                                            <Github className="w-3 h-3 mr-1" />
                                                            Code
                                                        </Link>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>

                                        <div className="p-6 space-y-4">
                                            {/* Title and Category */}
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-1">
                                                        {project.title}
                                                    </h3>
                                                    <span className="px-2 py-1 bg-secondary text-purple-300 border border-purple-500/30 rounded-full text-xs font-medium whitespace-nowrap">
                                                        {project.category}
                                                    </span>
                                                </div>
                                                <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-2.5 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-lg text-xs font-medium backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition-all duration-200"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 3 && (
                                                    <span className="px-2.5 py-1 bg-gray-500/20 text-gray-400 rounded-lg text-xs font-medium">
                                                        +{project.technologies.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    // Enhanced List View
                                    <div className="relative overflow-hidden">
                                        {/* Background Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative flex flex-col lg:flex-row gap-6 p-2">
                                            {/* Enhanced Project Image */}
                                            <div className="relative lg:w-80 h-48 lg:h-40 rounded-2xl overflow-hidden flex-shrink-0 group/image">
                                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30" />
                                                <img
                                                    src={`/projects/${project.image}` || "/placeholder.svg"}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                                {/* Floating Status Badge */}
                                                <div className="absolute top-4 right-4">
                                                    <div className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold backdrop-blur-xl shadow-2xl bg-gradient-to-r ${getStatusColor(project.status)} text-white border border-white/20`}>
                                                        {getStatusIcon(project.status)}
                                                        {project.status}
                                                    </div>
                                                </div>

                                                {/* Hover Overlay with Quick Actions */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
                                                    <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                        {project.links?.demo && (
                                                            <Button
                                                                size="sm"
                                                                asChild
                                                                className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 shadow-xl"
                                                            >
                                                                <Link href={project.links.demo} target="_blank">
                                                                    <Play className="w-3 h-3 mr-1" />
                                                                    Preview
                                                                </Link>
                                                            </Button>
                                                        )}
                                                        {project.links?.github && (
                                                            <Button
                                                                size="sm"
                                                                asChild
                                                                variant="outline"
                                                                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 shadow-xl"
                                                            >
                                                                <Link href={project.links.github} target="_blank">
                                                                    <Github className="w-3 h-3 mr-1" />
                                                                    Code
                                                                </Link>
                                                            </Button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Enhanced Content */}
                                            <div className="flex-1 space-y-6">
                                                {/* Header Section */}
                                                <div className="space-y-3">
                                                    <div className="flex items-start justify-between">
                                                        <div className="space-y-2">
                                                            <div className="flex items-center gap-3">
                                                                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                                                                    {project.title}
                                                                </h3>
                                                                <span className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 rounded-xl text-sm font-medium backdrop-blur-sm">
                                                                    {project.category}
                                                                </span>
                                                            </div>
                                                            <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                                                                {project.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Technologies Section */}
                                                <div className="space-y-3">
                                                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Technologies</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.map((tech, techIndex) => (
                                                            <span
                                                                key={techIndex}
                                                                className="px-3 py-1.5 bg-secondary text-gray-300 border border-white/10 rounded-xl text-sm font-medium backdrop-blur-sm hover:bg-secondary/80 hover:border-purple-500/30 hover:text-purple-300 hover:scale-105 transition-all duration-200 cursor-default"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Action Buttons */}
                                                <div className="flex gap-3 pt-2">
                                                    {project.links?.demo && (
                                                        <Button
                                                            asChild
                                                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5 px-6 py-2.5 text-sm font-medium"
                                                        >
                                                            <Link href={project.links.demo} target="_blank">
                                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                                View Project
                                                            </Link>
                                                        </Button>
                                                    )}
                                                    {project.links?.github && (
                                                        <Button
                                                            asChild
                                                            variant="outline"
                                                            className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 backdrop-blur-sm hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 px-6 py-2.5 text-sm font-medium"
                                                        >
                                                            <Link href={project.links.github} target="_blank">
                                                                <Github className="w-4 h-4 mr-2" />
                                                                Source Code
                                                            </Link>
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Simple Load More Button */}
                {hasMoreProjects && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex justify-center mt-12"
                    >
                        <Button
                            onClick={loadMoreProjects}
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 group"
                        >
                            <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                            Load More Projects
                            <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-sm">
                                +{Math.min(6, allFilteredProjects.length - visibleCount)}
                            </span>
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    )
}