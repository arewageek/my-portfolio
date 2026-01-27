"use client"

import { useState, useRef, useEffect } from "react"
import { Mail, MessageSquare, Calendar, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { brandConfig } from "@/lib/brand-config"

export function ContactInfo() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      value: brandConfig.email,
      action: "Send Email",
      href: `mailto:${brandConfig.email}`,
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: Twitter,
      title: "Twitter",
      description: "Let's chat about blockchain",
      value: brandConfig.socials[2].href,
      action: "Message Me",
      href: brandConfig.socials[2].href,
      gradient: "from-blue-600 to-purple-600",
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      description: "Book a consultation",
      value: "30-min slots available",
      action: "Book Now",
      href: brandConfig.calendar,
      gradient: "from-green-600 to-blue-600",
    }
  ]

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-8 bg-black">
      <div className="max-w-2xl mx-auto">
        <div className={`space-y-16 lg:space-y-24 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-none text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
                Contact Info
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                Let's
                <span className="block text-primary">Talk</span>
            </h2>
            <p className="text-xl text-white/40 leading-relaxed italic font-light">
                Feel free to reach out for collaborations or just a friendly hello.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="group block p-8 bg-white/5 border border-white/5 rounded-none hover:border-primary/20 transition-all duration-500"
              >
                <div className="flex items-center space-x-6">
                  <div
                    className={`p-4 bg-primary rounded-none transition-transform duration-500 group-hover:scale-110`}
                  >
                    <method.icon className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-black text-white mb-2 uppercase tracking-widest leading-none group-hover:text-primary transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-white/40 text-[9px] uppercase tracking-wider font-bold italic mb-2">{method.description}</p>
                    <p className="text-primary font-bold text-[10px] uppercase tracking-widest">{method.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-12 border-t border-white/5">
            <h3 className="text-[10px] font-black text-white/20 mb-8 uppercase tracking-[0.3em]">Follow Me</h3>
            <div className="flex flex-wrap gap-4">
              {brandConfig.socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`p-4 bg-white/5 border border-white/5 rounded-none hover:border-primary/20 transition-all duration-500 hover:transform hover:scale-110`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Availability Status */}
          <div className="p-8 bg-white/5 border border-white/5 rounded-none">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-2 h-2 bg-primary rounded-none animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
              <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">Status: Available for Work</span>
            </div>
            <p className="text-white/40 text-[10px] uppercase tracking-widest leading-relaxed font-bold italic">
              Typically responding within 24 hours. For urgent matters, reach out on Twitter.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
