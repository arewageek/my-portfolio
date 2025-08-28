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
    <footer className="relative bg-gradient-to-t from-black via-slate-900/90 to-slate-900/80 border-t border-purple-500/30 py-16 px-4 sm:px-6 lg:px-8 backdrop-blur-xl">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text-primary mb-4 hover:scale-105 transition-transform duration-300 cursor-default">
              {brandConfig.name}
            </div>
            <p className="text-gray-300 leading-relaxed font-light">
              {brandConfig.about.intro}
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
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
                  className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-1 hover:font-medium group flex items-center"
                >
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Connect</h3>
            <div className="flex space-x-4">
              {brandConfig.socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  className={`p-3 rounded-xl glass-card ${color} transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 group`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                </a>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-purple-500/20">
              <p className="text-sm text-gray-400 font-light">
                Let's build something amazing together
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/30 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm font-light">
            © 2025 {brandConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">Terms</a>
            <span className="text-xs">Made with ❤️ in Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
