'use client'

import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  onClick?: () => void
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  onClick,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full p-6 bg-white border border-primary/10 hover:border-primary/30 glow-primary-hover transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center"
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
