'use client'

import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="p-6 bg-white rounded-lg border border-primary/10 hover:border-primary/30 glow-primary-hover transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center mb-4 text-white glow-primary"
      >
        <Icon size={24} />
      </motion.div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
