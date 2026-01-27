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
    projects: any[]
    categories?: any[]
    showLoadMore?: boolean
    showHeader?: boolean
}

export function ProjectShowcase({ projects, categories = [], showLoadMore = true, showHeader = true }: ProjectShowcaseProps) {
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

    const filters = ["All", ...categories.map((c: any) => c.name)];

    const allFilteredProjects = activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter);

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
                        <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-none text-white/40 text-[10px] uppercase tracking-[0.3em] font-light mb-8">
                            Portfoilo
                        </div>

                        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                            My
                            <span className="block text-primary">Work</span>
                        </h2>

                        <p className="text-lg lg:text-xl text-white/40 max-w-3xl mx-auto leading-relaxed mb-8 italic">
                            A collection of my recent web and blockchain projects.
                        </p>
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
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`group relative py-2 transition-all duration-500 text-[10px] uppercase tracking-[0.2em] ${activeFilter === filter
                                    ? "text-primary font-bold"
                                    : "text-white/30 hover:text-white/60"
                                    }`}
                            >
                                <span className="relative z-20">{filter}</span>
                                {activeFilter === filter && (
                                    <motion.div
                                        layoutId="activeFilterShowcase"
                                        className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 transition-all duration-200 ${viewMode === 'grid'
                                ? 'bg-primary text-black'
                                : 'text-white/30 hover:text-white'
                                }`}
                        >
                            <Grid3X3 className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 transition-all duration-200 ${viewMode === 'list'
                                ? 'bg-primary text-black'
                                : 'text-white/30 hover:text-white'
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
                                            <div className={`flex items-center gap-2 px-3 py-1.5 border border-white/10 text-[10px] uppercase font-black backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-105 bg-black text-primary`}>
                                                <div className="w-1.5 h-1.5 bg-primary rounded-none animate-pulse" />
                                                {project.status}
                                            </div>
                                        </div>

                                        {/* Project Image */}
                                        <div className="relative h-48 lg:h-56 bg-zinc-900 overflow-hidden">
                                            <img
                                                src={project.image?.startsWith('http') || project.image?.startsWith('/') ? project.image : `/projects/${project.image}`}
                                                alt={project.title}
                                                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                            {/* Quick Actions */}
                                            <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                                {project.links?.demo && (
                                                    <Button
                                                        size="sm"
                                                        asChild
                                                        className="bg-primary text-black hover:bg-primary/90 border-none rounded-none flex-1 font-bold uppercase tracking-widest text-[10px]"
                                                    >
                                                        <Link href={project.links.demo} target="_blank">
                                                            Preview
                                                        </Link>
                                                    </Button>
                                                )}
                                                {project.links?.github && (
                                                    <Button
                                                        size="sm"
                                                        asChild
                                                        variant="outline"
                                                        className="bg-black/50 backdrop-blur-md border-white/10 text-white hover:bg-black rounded-none flex-1 font-bold uppercase tracking-widest text-[10px]"
                                                    >
                                                        <Link href={project.links.github} target="_blank">
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
                                                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 line-clamp-1 uppercase tracking-tighter">
                                                        {project.title}
                                                    </h3>
                                                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">
                                                        {project.category}
                                                    </span>
                                                </div>
                                                <p className="text-white/40 text-xs leading-relaxed line-clamp-2 italic">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies?.slice(0, 3).map((tech: string, techIndex: number) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-2 py-1 bg-white/5 text-white/40 border border-white/5 text-[9px] uppercase font-bold tracking-widest hover:text-primary transition-colors cursor-default"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    // Enhanced List View
                                    <div className="relative overflow-hidden">
                                        <div className="relative flex flex-col lg:flex-row gap-8 p-4">
                                            {/* Enhanced Project Image */}
                                            <div className="relative lg:w-96 h-56 lg:h-48 rounded-none overflow-hidden flex-shrink-0 group/image">
                                                <img
                                                    src={project.image?.startsWith('http') || project.image?.startsWith('/') ? project.image : `/projects/${project.image}`}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                                                {/* Floating Status Badge */}
                                                <div className="absolute top-4 right-4">
                                                    <div className={`flex items-center gap-1.5 px-3 py-1 bg-black border border-white/10 text-[9px] uppercase font-black backdrop-blur-xl text-primary`}>
                                                        <div className="w-1 h-1 bg-primary rounded-none animate-pulse" />
                                                        {project.status}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Enhanced Content */}
                                            <div className="flex-1 space-y-6">
                                                {/* Header Section */}
                                                <div className="space-y-3">
                                                    <div className="flex items-start justify-between">
                                                        <div className="space-y-1">
                                                            <div className="flex items-center gap-4">
                                                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-primary transition-all duration-300">
                                                                    {project.title}
                                                                </h3>
                                                                <span className="text-[10px] bg-white/5 text-white/30 border border-white/5 px-2 py-0.5 font-bold uppercase tracking-widest">
                                                                    {project.category}
                                                                </span>
                                                            </div>
                                                            <p className="text-white/40 text-sm leading-relaxed max-w-2xl italic font-light">
                                                                {project.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Technologies Section */}
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies?.map((tech: string, techIndex: number) => (
                                                        <span
                                                            key={techIndex}
                                                            className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/30 border border-white/5 px-2 py-1 bg-white/5 hover:text-primary transition-colors"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Action Buttons */}
                                                <div className="flex gap-4 pt-2">
                                                    {project.links?.demo && (
                                                        <Button
                                                            asChild
                                                            size="sm"
                                                            className="bg-primary text-black rounded-none px-6 font-bold uppercase tracking-widest text-[10px]"
                                                        >
                                                            <Link href={project.links.demo} target="_blank">
                                                                Live Demo
                                                            </Link>
                                                        </Button>
                                                    )}
                                                    {project.links?.github && (
                                                        <Button
                                                            asChild
                                                            size="sm"
                                                            variant="outline"
                                                            className="bg-transparent text-white/40 border-white/10 rounded-none px-6 font-bold uppercase tracking-widest text-[10px] hover:text-white"
                                                        >
                                                            <Link href={project.links.github} target="_blank">
                                                                GitHub
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
                            className="bg-primary text-black rounded-none px-12 py-6 font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 hover:bg-white hover:text-black group shadow-2xl"
                        >
                            <Plus className="w-4 h-4 mr-3 group-hover:rotate-90 transition-transform duration-500" />
                            View More
                            <span className="ml-4 px-2 py-0.5 bg-black/10 text-black/40 text-[9px] font-black">
                                +{Math.min(6, allFilteredProjects.length - visibleCount)}
                            </span>
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    )
}