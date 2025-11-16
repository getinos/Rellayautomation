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
  variant?: 'child' | 'parent'
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  onClick,
  backgroundImage,
  variant = 'child',
}: FeatureCardProps) {
  const isParent = variant === 'parent'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={[
        'relative h-full overflow-hidden transition-all duration-300 cursor-pointer group',
        isParent
          ? 'bg-gradient-to-r from-slate-50 via-emerald-50/30 to-slate-50 shadow-[0_18px_40px_rgba(15,23,42,0.08)] border border-slate-100'
          : 'border border-slate-200 bg-white/80 hover:border-slate-300',
      ].join(' ')}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Background image for both variants */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-slate-100">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className={
              isParent
                ? "object-contain transition-transform duration-500 group-hover:scale-105"
                : "object-cover transition-transform duration-500 group-hover:scale-105"
            }
          />
          {/* Overlay: only for child cards, none for parent */}
          {!isParent && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
          )}
        </div>
      )}

      <div
        className={[
          'relative z-10 h-full w-full flex flex-col',
          isParent
            ? 'px-6 md:px-10 py-8 md:py-10 justify-end items-end text-right'
            : 'px-6 md:px-8 py-6 md:py-8 justify-end items-end text-right',
        ].join(' ')}
      >
        <div>
          <h3
            className={[
              'font-extrabold mb-1 drop-shadow-2xl tracking-tight',
              isParent 
                ? 'text-xl md:text-2xl text-white' 
                : 'text-xl md:text-2xl text-white',
            ].join(' ')}
          >
            {title}
          </h3>
          <p
            className={[
              'leading-relaxed font-medium drop-shadow-xl',
              isParent 
                ? 'text-xs md:text-sm text-white' 
                : 'text-xs md:text-sm text-white',
            ].join(' ')}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
