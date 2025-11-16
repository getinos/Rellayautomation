'use client'

import { useState } from 'react'
import FeatureCard from './feature-card'
import { Lightbulb, AppWindow as Window, Lock, Zap, Smartphone, BarChart3, Home, ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const features = [
  {
    icon: Zap,
    title: 'Home Theatres',
    description: 'Immersive cinematic experiences with calibrated audio, 4K/8K video, and seamless control.',
    backgroundImage: '/assets/accordion/accordion-1.jpeg',
  },
  {
    icon: Window,
    title: 'Whole Home Audio',
    description: 'Distribute crystal‑clear music to every room with intuitive multi‑room control.',
    backgroundImage: '/assets/accordion/accordion-2.jpeg',
  },
  {
    icon: Lightbulb,
    title: 'Professional Audio',
    description: 'Studio‑grade sound systems designed for performance, clarity, and impact.',
    backgroundImage: '/assets/accordion/accordion-3.jpeg',
  },
  {
    icon: Smartphone,
    title: 'Networking',
    description: 'Robust home network infrastructure for seamless connectivity across all devices.',
    backgroundImage: '/assets/accordion/accordion-4.jpeg',
  },
  {
    icon: Lock,
    title: 'Shades',
    description: 'Automated window shades that respond to sunlight, temperature, and your schedule.',
    backgroundImage: '/assets/accordion/accordion-5.jpeg',
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Advanced security systems with smart locks, cameras, and real-time monitoring.',
    backgroundImage: '/assets/accordion/accordion-6.jpeg',
  },
  {
    icon: Home,
    title: 'Smart Homes',
    description: 'Bring every device, room, and routine together in one beautifully simple experience.',
    backgroundImage: '',
  },
]

interface FeaturesSectionProps {
  title?: string
  subtitle?: string
}

export default function FeaturesSection({
  title = 'Smart Home Categories',
  subtitle = 'Explore how Automation, Climate, Lighting, Networking, Shades, and Security work together.',
}: FeaturesSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const activeFeature = activeIndex !== null ? features[activeIndex] : null

  const handleCardClick = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index))
  }

  const handleClose = () => setActiveIndex(null)

  const childFeatures = features.slice(0, features.length - 1)
  const parentFeature = features[features.length - 1]
  const parentIndex = features.length - 1

  // First group: 3 square cards
  const firstGroup = childFeatures.slice(0, 3)
  // Second group: first 6 cards (3x2 grid)
  const secondGroup = childFeatures.slice(0, 6)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* First group: 3 square cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-6">
            {firstGroup.map((feature, index) => (
              <div key={feature.title} className="aspect-[4/3]">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  backgroundImage={feature.backgroundImage}
                  delay={index * 0.08}
                  variant="child"
                  onClick={() => handleCardClick(index)}
                />
              </div>
            ))}
          </div>

          {/* Intermediate rectangle between first and second group */}
          <div className="w-full mb-6">
            <div className="w-full min-h-[160px] rounded-[24px] border border-slate-100 bg-gradient-to-r from-slate-50 via-slate-50 to-emerald-50/30 shadow-[0_12px_30px_rgba(15,23,42,0.06)] px-6 md:px-10 py-6 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 mb-2">
                Audio · Video · Experience
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-1">
                AUDIO VIDEO SOLUTIONS
              </h3>
              <p className="text-sm md:text-base text-slate-600">
                Home Theatres, Whole Home Audio, and Professional Audio combined into a single,
                carefully engineered solution.
              </p>
            </div>
          </div>

          {/* Second group: 6 cards (3×2 grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {secondGroup.map((feature, index) => (
              <div key={`${feature.title}-second-${index}`} className="aspect-[4/3]">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  backgroundImage={feature.backgroundImage}
                  delay={index * 0.08}
                  variant="child"
                  onClick={() => handleCardClick(index)}
                />
              </div>
            ))}
          </div>

          {/* Visual flow indicator to parent card */}
          <div className="flex items-center justify-center mt-6 mb-2 gap-2 text-slate-400">
            <span className="text-xs uppercase tracking-[0.22em]">All modules below</span>
            <ChevronDown className="h-4 w-4" />
          </div>

          {/* Bottom full-width parent card */}
          <div className="mt-2">
            <div className="w-full min-h-[220px] lg:min-h-[260px]">
              <FeatureCard
                icon={parentFeature.icon}
                title={parentFeature.title}
                description={parentFeature.description}
                variant="parent"
                delay={childFeatures.length * 0.08}
                onClick={() => handleCardClick(parentIndex)}
              />
            </div>
          </div>

          {/* Description panel overlay (still available, but now using lighter palette could be adjusted later) */}
          <AnimatePresence>
            {activeFeature && (
              <>
                {/* Click-away overlay */}
                <motion.button
                  type="button"
                  aria-label="Close feature details"
                  className="fixed inset-0 z-30 cursor-default bg-slate-900/5"
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
                  <div className="bg-white/95 border border-slate-200 rounded-2xl shadow-xl shadow-slate-200 px-6 py-5 md:px-8 md:py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2 text-slate-900">
                          {activeFeature.title}
                        </h3>
                        <p className="text-sm md:text-base text-slate-600">{activeFeature.description}</p>
                      </div>
                      <button
                        type="button"
                        onClick={handleClose}
                        className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-colors text-sm font-semibold"
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
