'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white pt-24 px-4 flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-balance leading-tight mb-6 text-foreground"
        >
          Make Your Home <span className="text-primary">Smarter</span>. Safer. Automated.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-foreground/70 text-balance max-w-2xl mx-auto mb-8"
        >
          RelayAutomation brings intelligent lighting, window automation, and home control to your fingertips.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <Button
            size="lg"
            className="bg-primary text-secondary hover:bg-primary/90 font-semibold text-base glow-primary-hover px-8"
          >
            Get Started
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </motion.div>

      </motion.div>
    </section>
  )
}
