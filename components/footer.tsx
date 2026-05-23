"use client";

import { brandConfig } from "@/lib/brand-config"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ]

  if (pathname.startsWith("/login") || pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <footer className="py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-serif tracking-tight text-gray-900">
            {brandConfig.name}
          </Link>
          <p className="text-sm font-handwriting text-gray-500 italic max-w-sm">
            {brandConfig.about.intro}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12">
          <div className="flex gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-6">
            {brandConfig.socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4 stroke-[1.5]" />
              </a>
            ))}
          </div>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-light">
        <p>© {new Date().getFullYear()} {brandConfig.name}. All rights reserved.</p>
        <p>{brandConfig.location}</p>
      </div>
    </footer>
  )
}
