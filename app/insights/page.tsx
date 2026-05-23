"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { sampleArticles } from "@/lib/mock-articles";
import { ArrowRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = sampleArticles.map(a => a.category);
    return ["All", ...Array.from(new Set(cats))];
  }, []);

  const filteredArticles = useMemo(() => {
    return sampleArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-[#F4F1EA]">
      <div className="max-w-4xl mx-auto">
        <motion.header 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-gray-900 mb-4">
            Insights & Articles
          </h1>
          <p className="text-lg text-gray-600">
            Thoughts, tutorials, and deep dives into Web3, smart contracts, and modern frontend development.
          </p>
        </motion.header>

        {/* Filter & Search Bar */}
        <motion.div 
          className="mb-16 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gray-900 text-white shadow-md"
                    : "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-gray-300 pl-8 pr-4 py-2 text-sm focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-400 text-gray-900"
            />
          </div>
        </motion.div>

        {/* Articles List */}
        <div className="flex flex-col gap-8">
          <AnimatePresence mode="popLayout">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <motion.article 
                  key={article.slug} 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="group relative flex flex-col sm:flex-row gap-6 md:gap-10 items-center py-8 border-b border-gray-200/60 hover:border-gray-900/10 transition-colors"
                >
                  <div className="w-full sm:w-72 h-44 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0 relative shadow-sm">
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
                    <h3 className="text-2xl font-serif text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-2 pr-4">
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
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="py-16 text-center text-gray-500 text-lg"
              >
                No insights found matching your search criteria.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Minimal Newsletter Section */}
        <motion.div 
          className="mt-32 pt-16 border-t border-gray-200 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl font-serif tracking-tight text-gray-900 mb-4">Stay in the loop</h2>
            <p className="text-gray-600 mb-8">
              Get my latest articles, tutorials, and Web3 insights delivered straight to your inbox. No spam, ever.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); toast.success("Subscribed successfully!"); }}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 min-w-0 rounded-full bg-white px-5 py-3 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900 transition-all shadow-sm"
                required
              />
              <button 
                type="submit" 
                className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
