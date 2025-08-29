import { brandConfig } from "@/lib/brand-config"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative bg-black border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-pink-400"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300 cursor-default">
              {brandConfig.name}
            </div>
            <p className="text-gray-400 leading-relaxed font-light">
              {brandConfig.about.intro}
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:translate-x-1 hover:font-medium group flex items-center"
                >
                  <span className="w-0 h-0.5 bg-pink-400 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Connect</h3>
            <div className="flex space-x-4">
              {brandConfig.socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-pink-400/30 hover:bg-gray-900/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-all duration-300 group-hover:rotate-6" />
                </a>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-400 font-light">
                Let's build something amazing together
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm font-light">
            © 2025 {brandConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
