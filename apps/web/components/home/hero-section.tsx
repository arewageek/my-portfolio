"use client"

import { brandConfig } from "@/lib/brand-config"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2, // Wait for preloader to mostly finish
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  } as const

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 sm:px-12 lg:px-24 pt-24 pb-16">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="font-handwriting text-2xl text-gray-500 italic flex items-center gap-3">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-gray-900 leading-tight">
              {brandConfig.name}.
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 max-w-2xl">
            <p className="text-xl md:text-2xl font-serif text-gray-700 leading-relaxed">
              I am a software engineer focused on building clean, intuitive, and highly scalable applications.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sans font-light">
              My work spans full-stack web development and Web3 engineering. I believe that powerful technology should feel invisible, and that the best interfaces are the ones that quietly get out of your way.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8 flex flex-wrap items-center gap-6 text-sm uppercase tracking-widest font-medium text-gray-800">
            <Link href="/projects" className="group flex items-center gap-2 hover:text-gray-500 transition-colors border-b border-gray-800 hover:border-gray-500 pb-1">
              View my work
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >→</motion.span>
            </Link>
            <span className="text-gray-300">/</span>
            <Link href="/contact" className="group flex items-center gap-2 hover:text-gray-500 transition-colors border-b border-gray-800 hover:border-gray-500 pb-1">
              Reach out
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >→</motion.span>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-16 flex gap-6">
            {brandConfig.socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5 stroke-[1.5]" />
              </motion.a>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}