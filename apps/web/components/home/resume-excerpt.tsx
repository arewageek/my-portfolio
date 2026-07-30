"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { brandConfig } from "@/lib/brand-config"
import { Briefcase, Calendar, MapPin, ArrowRight, Download } from "lucide-react"

export function ResumeExcerpt() {
  const currentRoles = brandConfig.companies.filter((c) => !c.stopped).reverse()
  const pastRoles = brandConfig.companies.filter((c) => c.stopped).reverse()
  const experiences = [...currentRoles, ...pastRoles].slice(0, 3)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 border-t border-gray-200/60">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="font-handwriting text-xl text-gray-500 mb-2">Experience & Background</p>
            <h2 className="text-4xl font-serif text-gray-900 tracking-tight">Resume Highlights</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <Link
              href="/resume"
              className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
            >
              View Full Resume
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-10"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group relative bg-white/40 p-6 sm:p-8 rounded-lg border border-gray-200/80 hover:border-gray-300 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl font-serif text-gray-900">{exp.name}</h3>
                    <span className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 font-medium text-sm mt-1">
                    <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                    <span>{exp.role}</span>
                  </div>
                </div>

                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-3 text-xs text-gray-500 font-light">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>{exp.started} — {exp.stopped || "Present"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 font-light leading-relaxed mb-6 text-base">
                {exp.overview?.description || exp.description}
              </p>

              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] text-gray-500 bg-gray-50 border border-gray-200/60 px-2 py-0.5 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/resume"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-[#F4F1EA] text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
          >
            <span>Explore Complete Experience</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="/resume/arewageek.pdf"
            download="arewageek.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Download className="w-4 h-4 stroke-[2]" />
            <span>Download CV (PDF)</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
