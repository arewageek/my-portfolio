"use client"

import React from "react"
import { Feather, Layers, Fingerprint, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function ProfessionalHighlights() {
  const highlights = [
    {
      icon: Layers,
      title: "Software Development",
      description:
        "Full-stack web applications from the ground up. Fast APIs, clean databases, and smooth interfaces that do what they promise."
    },
    {
      icon: Sparkles,
      title: "AI Integrations",
      description:
        "Connecting practical AI models and automation directly into workflows to eliminate repetitive tasks and make products smarter."
    },
    {
      icon: Feather,
      title: "Smart Contract Development",
      description:
        "Secure, gas-efficient smart contracts for Ethereum and EVM chains, tested thoroughly to protect user assets."
    },
    {
      icon: Fingerprint,
      title: "System Architecture",
      description:
        "Clean, modular backend services. Systems designed to stay fast, cheap to run, and easy to maintain as traffic grows."
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as const

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="font-handwriting text-xl text-gray-500 mb-2">My expertise</p>
          <h2 className="text-4xl font-serif text-gray-900">What I Do</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12"
        >
          {highlights.map((highlight, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group">
              <div className="text-gray-300 group-hover:text-gray-900 transition-colors duration-500 pt-1 hidden md:block">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <highlight.icon className="w-6 h-6 stroke-[1.5]" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-sans font-light">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}