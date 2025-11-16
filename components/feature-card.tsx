'use client'

import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'
import Image from 'next/image'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  onClick?: () => void
  backgroundImage?: string
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  onClick,
  backgroundImage,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full relative overflow-hidden border border-primary/10 hover:border-primary/30 glow-primary-hover transition-all duration-300 cursor-pointer group"
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 h-full p-6 flex flex-col items-center justify-center text-center">
        <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">{title}</h3>
        <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">{description}</p>
      </div>
    </motion.div>
  )
}
