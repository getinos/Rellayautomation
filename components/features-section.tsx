'use client'

import { useState } from 'react'
import FeatureCard from './feature-card'
import { Lightbulb, AppWindow as Window, Lock, Zap, Smartphone, BarChart3, Home } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const features = [
  {
    icon: Lightbulb,
    title: 'Smart Lighting Automation',
    description:
      'Automate your lights with schedules, voice control, and smart sensors for the perfect ambiance.',
  },
  {
    icon: Window,
    title: 'Auto Window Closing',
    description: 'Intelligent window automation that responds to weather, time, and your preferences.',
  },
  {
    icon: Lock,
    title: 'Door & Curtain Automation',
    description: 'Secure your home with automated locks and curtains that work on your schedule.',
  },
  {
    icon: Zap,
    title: 'Energy Saving AI',
    description: 'Reduce energy consumption with intelligent optimization and real-time monitoring.',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web Remote Control',
    description: 'Control your entire home from anywhere with our intuitive mobile and web apps.',
  },
  {
    icon: BarChart3,
    title: 'Energy Monitoring',
    description: 'Track and analyze your home energy usage with detailed analytics and insights.',
  },
  {
    icon: Home,
    title: 'Whole Home Automation Suite',
    description: 'Bring every device, room, and routine together in one beautifully simple experience.',
  },
]

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const activeFeature = activeIndex !== null ? features[activeIndex] : null

  const handleCardClick = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index))
  }

  const handleClose = () => setActiveIndex(null)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Your Smart Home
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Everything you need to automate, control, and optimize your home.
          </p>
        </div>

        <div className="relative">
          {/* Grid layout: 3 cards, 3 cards, 1 centered card on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={
                  index === features.length - 1
                    ? 'w-full h-40 md:h-48 lg:h-56 lg:col-span-3'
                    : 'aspect-square'
                }
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.1}
                  onClick={() => handleCardClick(index)}
                />
              </div>
            ))}
          </div>

          {/* Description panel overlay (blue card) */}
          <AnimatePresence>
            {activeFeature && (
              <>
                {/* Click-away overlay */}
                <motion.button
                  type="button"
                  aria-label="Close feature details"
                  className="fixed inset-0 z-30 cursor-default bg-black/10"
                  onClick={handleClose}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 40, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="pointer-events-auto fixed left-1/2 top-1/2 z-40 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 px-4"
                >
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white shadow-2xl shadow-indigo-900/40 px-6 py-5 md:px-8 md:py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                          {activeFeature.title}
                        </h3>
                        <p className="text-sm md:text-base text-indigo-50/90">
                          {activeFeature.description}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleClose}
                        className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white/80 hover:bg-white/25 hover:text-white transition-colors text-sm font-semibold"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
