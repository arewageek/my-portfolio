"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Send, CheckCircle, Loader2 } from "lucide-react"
import { sendContactEmail } from "@/actions/contact"
import { toast } from "sonner"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isPending, startTransition] = useTransition()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    startTransition(async () => {
      const res = await sendContactEmail(formData);
      if (res.error) {
        toast.error("Failed to send message: " + res.error);
        return;
      }
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000)
    })
  }

  if (isSubmitted) {
    return (
      <section className="py-24 px-6 lg:px-12 flex items-center justify-center border-t border-gray-200">
        <div className="text-center space-y-6">
          <CheckCircle className="w-12 h-12 text-gray-900 mx-auto" strokeWidth={1.5} />
          <h3 className="text-3xl font-serif text-gray-900">Message Sent</h3>
          <p className="text-gray-600 font-light max-w-md mx-auto">
            Thanks for reaching out. I'll get back to you as soon as I can.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-6 lg:px-12 border-t border-gray-200">
      <div className="max-w-xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">
            Send a Message
          </h2>
          <p className="text-gray-600 font-light">Tell me about your vision and let's build it together.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-handwriting text-gray-500">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-300 focus:border-gray-900 px-0 py-2 text-gray-900 focus:ring-0 outline-none transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-handwriting text-gray-500">Email Address</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-300 focus:border-gray-900 px-0 py-2 text-gray-900 focus:ring-0 outline-none transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-handwriting text-gray-500">Subject</label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b border-gray-300 focus:border-gray-900 px-0 py-2 text-gray-900 focus:ring-0 outline-none transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-handwriting text-gray-500">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full bg-transparent border-b border-gray-300 focus:border-gray-900 px-0 py-2 text-gray-900 focus:ring-0 outline-none transition-colors resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="group flex items-center gap-3 text-gray-900 font-serif text-lg hover:text-gray-500 transition-colors pt-4 border-b border-gray-900 hover:border-gray-500 pb-1 w-fit disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Sending..." : "Send Message"}
            {isPending ? (
              <Loader2 className="w-4 h-4 animate-spin" strokeWidth={1.5} />
            ) : (
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
