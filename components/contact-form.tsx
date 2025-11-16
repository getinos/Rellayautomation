'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option value="">Select a subject</option>
          <option value="support">Technical Support</option>
          <option value="sales">Sales Inquiry</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
          placeholder="Tell us more..."
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isSubmitted ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-semibold"
      >
        Thank you! We'll get back to you soon.
      </motion.div>

      <Button
        type="submit"
        disabled={isSubmitted}
        className="w-full bg-primary text-secondary hover:bg-primary/90 font-semibold py-3 glow-primary-hover disabled:opacity-50"
      >
        {isSubmitted ? 'Sending...' : 'Send Message'}
      </Button>
    </motion.form>
  )
}
