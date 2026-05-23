"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { brandConfig } from "@/lib/brand-config"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ]

  if (pathname.startsWith("/login") || pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F4F1EA]/90 backdrop-blur-md border-b border-gray-200 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif tracking-tight text-gray-900 flex items-center gap-2 overflow-hidden">
            <motion.span
              initial={{ y: 0 }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {brandConfig.name}
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors duration-300 relative group ${
                  pathname === item.href ? "text-gray-900 font-medium" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-[1px] bg-gray-900" 
                  />
                )}
              </Link>
            ))}
            
            <Link
              href="/resume"
              className={`text-sm tracking-wide transition-colors duration-300 relative group ${
                pathname === "/resume" ? "text-gray-900 font-medium" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Resume
              {pathname === "/resume" && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-1 h-[1px] bg-gray-900" 
                />
              )}
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 stroke-[1.5]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 stroke-[1.5]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden absolute top-full left-0 w-full bg-[#F4F1EA] border-b border-gray-200 shadow-xl overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col space-y-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`text-lg font-serif transition-colors ${
                        pathname === item.href ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + navItems.length * 0.05 }}
                >
                  <Link
                    href="/resume"
                    className={`text-lg font-serif transition-colors ${
                      pathname === "/resume" ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Resume
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
