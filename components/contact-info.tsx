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
    <section ref={sectionRef} className="py-32 px-6 lg:px-8 bg-gradient-to-br from-purple-900/10 to-pink-900/10">
      <div className="max-w-2xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Amazing
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Whether you have a revolutionary idea or need to transform an existing project, I'm here to help bring
              your vision to life.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="group block p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 bg-gradient-to-r ${method.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">{method.description}</p>
                    <p className="text-purple-400 font-medium text-sm">{method.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-8 border-t border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
            <div className="flex space-x-4">
              {brandConfig.socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 ${color} transition-all duration-300 hover:transform hover:scale-110`}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Availability Status */}
          <div className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-semibold">Available for new projects</span>
            </div>
            <p className="text-gray-300 text-sm">
              I typically respond within 24 hours. For urgent inquiries, feel free to reach out via Discord or schedule
              a call directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
