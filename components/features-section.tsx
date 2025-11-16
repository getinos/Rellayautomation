'use client'

import { useState } from 'react'
import Image from 'next/image'
import FeatureCard from './feature-card'
import { Lightbulb, AppWindow as Window, Lock, Zap, Smartphone, BarChart3, Home, ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

type FeatureItem = {
  icon: any
  title: string
  description: string
  backgroundImage?: string
}

// Top audio group (3 cards)
const topFeatures: FeatureItem[] = [
  {
    icon: Zap,
    title: 'Home Theatres',
    description: 'Immersive cinema-quality audio-visual orchestration at home.',
    backgroundImage: '/assets/cards/hometheater.jpeg',
  },
  {
    icon: Window,
    title: 'Whole Home Audio',
    description: 'Multi-zone audio for synchronized home-wide listening.',
    backgroundImage: '/assets/cards/whole home audio.jpeg',
  },
  {
    icon: Lightbulb,
    title: 'Professional Audio',
    description: 'Premium sound engineering for dynamic hospitality and event spaces.',
    backgroundImage: '/assets/cards/professional audio.jpeg',
  },
]

// Middle smart-home modules group (6 cards)
const bottomFeatures: FeatureItem[] = [
  {
    icon: Zap,
    title: 'Automation',
    description: 'Seamless controls elevating comfort, efficiency, and system interoperability.',
    backgroundImage: '/assets/cards/Automation.jpeg',
  },
  {
    icon: Window,
    title: 'Climate',
    description: 'Dynamic climate systems for seamless temperature mastery.',
    backgroundImage: '/assets/accordion/accordion-2.jpeg',
  },
  {
    icon: Lightbulb,
    title: 'Lighting',
    description: 'Smart lighting creating ambiance, depth, and spatial harmony.',
    backgroundImage: '/assets/cards/lighting.jpeg',
  },
  {
    icon: Smartphone,
    title: 'Networking',
    description: 'Robust infrastructure powering seamless digital ecosystems.',
    backgroundImage: '/assets/cards/networkings.jpeg',
  },
  {
    icon: Lock,
    title: 'Shades',
    description: 'Automated shades for precise light and privacy control.',
    backgroundImage: '/assets/cards/Shades.avif',
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Integrated security solutions for continuous peace of mind.',
    backgroundImage: '/assets/cards/Security.jpeg',
  },
]

const parentFeature: FeatureItem = {
  icon: Home,
  title: 'Smart Homes',
  description: 'Parent Category — Includes Automation, Climate, Lighting, Networking, Shades, and Security.',
  backgroundImage: '/assets/cards/smarthomes.jpeg',
}

interface FeaturesSectionProps {
  title?: string
  subtitle?: string
}

export default function FeaturesSection({
  title = 'Smart Home Categories',
  subtitle = 'Explore how Automation, Climate, Lighting, Networking, Shades, and Security work together.',
}: FeaturesSectionProps) {
  const [activeFeature, setActiveFeature] = useState<FeatureItem | null>(null)

  const handleCardClick = (feature: FeatureItem) => {
    setActiveFeature((current) => (current?.title === feature.title ? null : feature))
  }

  const handleClose = () => setActiveFeature(null)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* First group: 3 square cards (Audio/Video solutions) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-4">
            {topFeatures.map((feature, index) => (
              <div key={feature.title} className="aspect-[4/3]">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  backgroundImage={feature.backgroundImage}
                  delay={index * 0.08}
                  variant="child"
                  onClick={() => handleCardClick(feature)}
                />
              </div>
            ))}
          </div>

          {/* Visual flow indicator between first group and AUDIO VIDEO SOLUTIONS rectangle */}
          <div className="flex items-center justify-center mb-4 text-slate-400">
            <ChevronDown className="h-5 w-5" />
          </div>

          {/* Intermediate rectangle between first and second group */}
          <div className="w-full mb-6">
            <div className="relative w-full min-h-[160px] border border-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.06)] overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/assets/cards/audiovideosolutions.jpeg"
                  alt="Audio Video Solutions"
                  fill
                  className="object-fill"
                />
              </div>
              <div className="relative z-10 px-6 md:px-10 py-6 flex flex-col items-end justify-end text-right h-full">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 drop-shadow-2xl">
                  AUDIO VIDEO SOLUTIONS
                </h3>
                <p className="text-sm md:text-base text-white max-w-xl drop-shadow-xl">
                  Home Theatres, Whole Home Audio, and Professional Audio combined into a single,
                  carefully engineered solution.
                </p>
              </div>
            </div>
          </div>

          {/* Second group: 6 cards (3×2 grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {bottomFeatures.map((feature, index) => (
              <div key={`${feature.title}-second-${index}`} className="aspect-[4/3]">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  backgroundImage={feature.backgroundImage}
                  delay={index * 0.08}
                  variant="child"
                  onClick={() => handleCardClick(feature)}
                />
              </div>
            ))}
          </div>

          {/* Visual flow indicator to parent card (icon only) */}
          <div className="flex items-center justify-center mt-6 mb-2 text-slate-400">
            <ChevronDown className="h-5 w-5" />
          </div>

          {/* Bottom full-width parent card */}
          <div className="mt-2">
            <div className="w-full min-h-[280px] lg:min-h-[140px]">
              <FeatureCard
                icon={parentFeature.icon}
                title={parentFeature.title}
                description={parentFeature.description}
                backgroundImage={parentFeature.backgroundImage}
                variant="parent"
                delay={(topFeatures.length + bottomFeatures.length) * 0.08}
                onClick={() => handleCardClick(parentFeature)}
              />
            </div>
          </div>

          {/* Peace of Mind Section */}
          <div className="mt-6">
            <div className="w-full min-h-[200px] border border-slate-100 bg-gradient-to-r from-slate-50 via-slate-50 to-emerald-50/30 shadow-[0_12px_30px_rgba(15,23,42,0.06)] px-6 md:px-10 py-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Relay Peace Of Mind Policy
              </h3>
              <p className="text-base md:text-lg text-slate-600 max-w-4xl">
                At Relay Automation, our exclusive Peace of Mind Program champions an elevated ownership experience—completely avoiding traditional AMC fees. We meticulously curate and install only premium, maintenance-free systems designed for flawless, enduring performance without hidden service contracts. Your investment enjoys unparalleled reliability and sophistication, giving you true freedom from ongoing upkeep and unexpected costs.
              </p>
            </div>
          </div>

          {/* Description panel overlay */}
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
                        <p className="text-sm md:text-base text-slate-600">
                          {activeFeature.description}
                        </p>
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
