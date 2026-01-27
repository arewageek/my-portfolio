"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  if (isSubmitted) {
    return (
      <section ref={sectionRef} className="py-32 px-6 lg:px-8 flex items-center justify-center bg-black">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="w-20 h-20 bg-primary rounded-none flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,255,255,0.4)]">
            <CheckCircle className="w-10 h-10 text-black" />
          </div>
          <h3 className="text-4xl font-black text-white uppercase tracking-tighter">Transmission Successful</h3>
          <p className="text-white/40 text-xs uppercase tracking-widest font-bold italic">Verification complete. Architectural review initiated. Latency: &lt; 24h.</p>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-8 bg-black">
      <div className="max-w-2xl mx-auto">
        <div className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-none text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
                Contact Form
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                Start a
                <span className="block text-primary">Project</span>
              </h2>
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold italic">Tell me about your vision and let's build it together.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black tracking-widest text-white/20">Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/10 focus:border-primary focus:ring-0 h-14 rounded-none uppercase text-xs tracking-widest font-bold"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black tracking-widest text-white/20">Email Address *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/10 focus:border-primary focus:ring-0 h-14 rounded-none uppercase text-xs tracking-widest font-bold"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black tracking-widest text-white/20">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full h-14 bg-white/5 border border-white/10 text-white/40 px-4 focus:border-primary focus:outline-none rounded-none uppercase text-[10px] tracking-widest font-bold appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">Select Budget</option>
                    <option value="5k-10k" className="bg-black">$5K - $10K</option>
                    <option value="10k-25k" className="bg-black">$10K - $25K</option>
                    <option value="25k-50k" className="bg-black">$25K - $50K</option>
                    <option value="50k+" className="bg-black">$50K+</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black tracking-widest text-white/20">Project Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full h-14 bg-white/5 border border-white/10 text-white/40 px-4 focus:border-primary focus:outline-none rounded-none uppercase text-[10px] tracking-widest font-bold appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">Select Timeline</option>
                    <option value="asap" className="bg-black">ASAP</option>
                    <option value="1-2months" className="bg-black">1-2 Months</option>
                    <option value="3-6months" className="bg-black">3-6 Months</option>
                    <option value="6months+" className="bg-black">6+ Months</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase font-black tracking-widest text-white/20">Subject *</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Discussion"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/10 focus:border-primary focus:ring-0 h-14 rounded-none uppercase text-xs tracking-widest font-bold"
                  required
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase font-black tracking-widest text-white/20">Message Details *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me more about your project..."
                  rows={6}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/10 focus:border-primary focus:ring-0 rounded-none uppercase text-xs tracking-widest font-bold resize-none p-4"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-black h-16 text-xs font-black uppercase tracking-[0.4em] rounded-none shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-500"
              >
                <Send className="w-5 h-5 mr-3" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
