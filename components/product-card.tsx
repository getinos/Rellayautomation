'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface ProductCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  delay?: number
}

export default function ProductCard({
  icon: Icon,
  title,
  description,
  features,
  delay = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group p-6 bg-gradient-to-br from-white to-primary/5 rounded-xl border border-primary/20 hover:border-primary/40 glow-primary-hover transition-all"
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 10 }}
        className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-4 text-primary glow-primary"
      >
        <Icon size={28} />
      </motion.div>

      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm mb-4">{description}</p>

      <div className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-foreground/70">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            {feature}
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        className="text-primary hover:bg-primary/10 w-full justify-between group-hover:translate-x-1 transition-transform"
      >
        Learn More
        <ArrowRight size={16} />
      </Button>
    </motion.div>
  )
}
