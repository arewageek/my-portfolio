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
        ? "bg-black/95 backdrop-blur-2xl border-b border-gray-800"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          <Link href="/" className="text-xl font-bold tracking-tighter group flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-none animate-pulse" />
            <span className="text-white uppercase transition-all duration-300">
              {brandConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[10px] uppercase font-bold tracking-[0.3em] transition-all duration-300 group ${pathname === item.href ? "text-primary" : "text-white/40 hover:text-white"
                  }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-500 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              asChild
              className="rounded-none text-white/40 hover:text-white uppercase tracking-widest text-[10px] font-bold"
            >
              <Link href="resume/arewageek.pdf" download="arewageek.pdf" target="_blank">
                <Download className="w-3 h-3 mr-2" />
                Resume
              </Link>
            </Button>
            <Button variant="primary" asChild size="sm" className="rounded-none px-6">
              <Link href="/contact" className="text-[10px] uppercase font-bold tracking-widest">
                Connect
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/40 hover:text-white"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/5 animate-fade-in-up">
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-xs uppercase tracking-[0.3em] font-black transition-colors duration-300 ${pathname === item.href ? "text-primary" : "text-white/40 hover:text-white"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6 space-y-4">
                <Button variant="primary" className="w-full rounded-none uppercase tracking-widest text-[10px] font-bold h-12">
                   Initiate Engagement
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
