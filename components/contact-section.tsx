"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Mail, MessageSquare, Calendar, MapPin, Send, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      value: "hello@atfkt.dev",
      action: "Send Email",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageSquare,
      title: "Discord",
      description: "Let's chat about blockchain",
      value: "@atfkt_dev",
      action: "Message Me",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      description: "Book a consultation",
      value: "30-min slots available",
      action: "Book Now",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Based in San Francisco",
      value: "Available worldwide",
      action: "View Timezone",
      color: "from-pink-500 to-red-500",
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-900/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
            Let's Connect
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Ready to Build{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your next blockchain project and turn your vision into reality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>

              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start space-x-6">
                    <div
                      className={`p-4 bg-gradient-to-r ${method.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {method.title}
                      </h4>
                      <p className="text-gray-400 mb-2">{method.description}</p>
                      <p className="text-purple-400 font-semibold mb-4">{method.value}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400"
                      >
                        {method.action}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-xl font-bold text-white mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-400" },
                  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
                  { icon: MessageSquare, href: "#", label: "Discord", color: "hover:text-purple-400" },
                  { icon: Mail, href: "#", label: "Email", color: "hover:text-pink-400" },
                ].map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    className={`p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 ${color} transition-all duration-300 hover:transform hover:scale-110`}
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-3">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 h-12"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-3">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 h-12"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-3">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project discussion"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 h-12"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-3">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, timeline, and budget..."
                    rows={6}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 text-lg font-semibold shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-semibold">Available for new projects</span>
                </div>
                <p className="text-gray-300 text-sm">
                  I typically respond within 24 hours. For urgent inquiries, feel free to reach out via Discord or
                  schedule a call directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
