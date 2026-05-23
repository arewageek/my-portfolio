"use client"

import Link from "next/link"
import { brandConfig } from "@/lib/brand-config"
import { motion } from "framer-motion"

export function CallToAction() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="space-y-6">
          <p className="font-handwriting text-2xl text-gray-500 italic">Let's work together</p>
          <h2 className="text-5xl md:text-7xl font-serif text-gray-900 tracking-tight leading-tight">
            Start a project.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sans font-light max-w-2xl mx-auto">
            I'm currently available for new projects globally. If you have an idea you'd like to discuss, feel free to reach out.
          </p>
          
          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm uppercase tracking-widest font-medium text-gray-800">
            <Link href={brandConfig.calendar} className="group flex items-center gap-2 hover:text-gray-500 transition-colors border-b border-gray-800 hover:border-gray-500 pb-1">
              Schedule a call
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >→</motion.span>
            </Link>
            <span className="text-gray-300 hidden sm:inline">/</span>
            <Link href="/contact" className="group flex items-center gap-2 hover:text-gray-500 transition-colors border-b border-gray-800 hover:border-gray-500 pb-1">
              Contact Me
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >→</motion.span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
