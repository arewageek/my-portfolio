import Link from "next/link"
import { brandConfig } from "@/lib/brand-config"

export function AboutQuote() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="space-y-6">
          <p className="font-handwriting text-2xl text-gray-500 italic">Collaborate</p>
          <h2 className="text-5xl md:text-7xl font-serif text-gray-900 tracking-tight leading-tight">
            Let's Work Together.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sans font-light max-w-2xl mx-auto">
            I'm always open to new ideas and challenging projects. Let's create something amazing.
          </p>
          
          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm uppercase tracking-widest font-medium text-gray-800">
            <Link href={brandConfig.calendar} className="hover:text-gray-500 transition-colors border-b border-gray-800 hover:border-gray-500 pb-1">
              Schedule a call
            </Link>
            <span className="text-gray-300 hidden sm:inline">/</span>
            <Link href="/contact" className="hover:text-gray-500 transition-colors border-b border-gray-800 hover:border-gray-500 pb-1">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
