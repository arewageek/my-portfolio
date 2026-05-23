"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <p className="font-handwriting text-2xl text-gray-500 mb-4">404 Error</p>
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6">Well, this is awkward.</h1>
        
        <div className="space-y-4 mb-12">
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            I build robust software and scalable systems... but I clearly forgot to build this page.
          </p>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed italic">
            "I swear it worked on my local machine."
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="group flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-[#F4F1EA] text-sm font-medium hover:bg-gray-800 transition-all shadow-sm"
          >
            <Home className="w-4 h-4 stroke-[1.5] group-hover:-translate-y-0.5 transition-transform" />
            Go Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
