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
    <footer className="relative bg-black border-t border-white/5 py-16 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="text-xl font-bold text-white uppercase tracking-tighter flex items-center gap-2">
              <div className="w-5 h-5 bg-primary" />
              {brandConfig.name}
            </div>
            <p className="text-sm text-white/40 leading-relaxed font-light italic max-w-sm">
              {brandConfig.about.intro}
            </p>
            <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] text-white/30">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span>Available for Work</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold uppercase tracking-[0.2em] text-[10px]">Navigation</h3>
            <div className="grid grid-cols-1 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[10px] uppercase tracking-widest text-white/40 hover:text-primary transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold uppercase tracking-[0.2em] text-[10px]">Follow Me</h3>
            <div className="flex flex-wrap gap-4">
              {brandConfig.socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 bg-white/5 border border-white/10 text-white/40 hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-light">
            © 2025 Arewa Geek. All rights reserved.
          </p>
          <div className="flex gap-6">
             <span className="text-white/20 text-[10px] uppercase tracking-[0.3em]">{brandConfig.location}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
