"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sampleArticles } from "@/lib/mock-articles";
import { motion } from "framer-motion";

export function RecentInsights() {
  // Take the 3 most recent articles
  const recentArticles = sampleArticles.slice(0, 3);

  return (
    <section className="py-24 px-6 lg:px-8 bg-transparent border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-gray-900">
              Recent Insights
            </h2>
            <p className="text-gray-600 mt-2">
              Writing on technology, Web3 development, and smart contract engineering.
            </p>
          </div>
          <Link 
            href="/insights" 
            className="group inline-flex items-center text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            View all articles 
            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="flex flex-col gap-8">
          {recentArticles.map((article, index) => (
            <motion.article 
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col sm:flex-row gap-6 md:gap-8 items-center py-6 border-b border-gray-200/60 hover:border-gray-900/10 transition-colors"
            >
              <div className="w-full sm:w-56 h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 relative shadow-sm">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-[10px] font-bold tracking-wider uppercase text-gray-900 shadow-sm">
                  {article.category}
                </div>
              </div>
              <div className="flex flex-col flex-grow justify-center w-full">
                <div className="flex items-center gap-x-3 text-xs mb-2 text-gray-500 font-medium">
                  <time dateTime={article.date}>{article.date}</time>
                  <span>&middot;</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-serif text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-2 pr-4">
                  <Link href={`/insights/${article.slug}`}>
                    <span className="absolute inset-0" />
                    {article.title}
                  </Link>
                </h3>
                <p className="line-clamp-2 text-sm leading-relaxed text-gray-600 mb-3 max-w-2xl pr-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mt-auto">
                  Read article <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
