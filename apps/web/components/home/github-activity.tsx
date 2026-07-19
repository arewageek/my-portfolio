"use client"

import { GitHubCalendar } from 'react-github-calendar'
import { motion } from 'framer-motion'
import { brandConfig } from "@/lib/brand-config"

export function GithubActivity() {
  // We extract the github username from the brand config URL
  const githubUrl = brandConfig.socials.find(s => s.label === "GitHub")?.href || ""
  const username = githubUrl.split('/').pop() || "arewageek"

  // Green theme to match the paper/ink aesthetic and show contributions clearly
  const customTheme = {
    light: [
      '#f4f1ea', // level 0 (empty)
      '#dcfce7', // level 1
      '#86efac', // level 2
      '#16a34a', // level 3
      '#14532d'  // level 4 (highest)
    ],
    dark: [
      '#f4f1ea',
      '#dcfce7',
      '#86efac',
      '#16a34a',
      '#14532d'
    ]
  }

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 border-t border-gray-200 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="font-handwriting text-xl text-gray-500 mb-2">Code Contributions</p>
          <h2 className="text-4xl font-serif text-gray-900">GitHub Activity</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl font-sans font-light">
            A visual overview of my coding consistency and public contributions over the last year.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex justify-center p-4 sm:p-6 md:p-12 bg-[#FAF9F6] border border-gray-200 shadow-[0_-8px_30px_rgba(0,0,0,0.04)] rounded-sm"
        >
          <div className="w-full max-w-4xl flex justify-center text-gray-600 [&_article]:w-full [&_svg]:w-full [&_svg]:h-auto">
            <GitHubCalendar 
              username={username} 
              theme={customTheme as any}
              colorScheme="light"
              fontSize={14}
              blockSize={13}
              blockMargin={5}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
