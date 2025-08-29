"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { brandConfig } from "@/lib/brand-config"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${scrolled
        ? "bg-black/95 backdrop-blur-2xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/10"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          <Link href="/" className="text-2xl font-bold group">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-purple-500">
              {brandConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-gray-300 hover:text-white transition-all duration-300 font-medium tracking-wide group ${pathname === item.href ? "text-white" : ""
                  }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              asChild
            >
              <Link href="resume/arewageek.pdf" download="arewageek.pdf" target="_blank">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Link>
            </Button>
            <Button variant="primary" asChild>
www              <Link href="/contact">
                <ExternalLink className="w-4 h-4 mr-2" />
                Hire Me
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/98 backdrop-blur-2xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/10 animate-fade-in-up">
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-xl transition-colors duration-300 ${pathname === item.href ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6 space-y-4">
                <Button
                  variant="ghost"
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
                <Button variant="primary" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
