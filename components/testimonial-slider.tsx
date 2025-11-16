'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'RelayAutomation completely transformed how I manage my home. Everything is so convenient now!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Tech Enthusiast',
    content: 'The automation routines work flawlessly. Best investment for my smart home setup.',
    rating: 5,
  },
  {
    name: 'Emma Davis',
    role: 'Environmental Advocate',
    content: 'I love how much energy I\'m saving. The AI truly understands my habits and optimizes perfectly.',
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50/30 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by Homeowners
          </h2>
          <p className="text-foreground/70 text-lg">
            See what our users are saying about RelayAutomation
          </p>
        </div>

        <div className="relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-8 bg-white rounded-xl border border-primary/20 glow-primary"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              "{testimonials[activeIndex].content}"
            </p>
            <div>
              <p className="font-bold text-foreground">{testimonials[activeIndex].name}</p>
              <p className="text-sm text-foreground/70">{testimonials[activeIndex].role}</p>
            </div>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-primary w-8' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
