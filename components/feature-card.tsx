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
      {/* Child card image background */}
      {!isParent && backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Dark gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
      )}

      <div
        className={[
          'relative z-10 h-full w-full flex flex-col',
          isParent
            ? 'px-6 md:px-10 py-8 md:py-10 justify-center text-left'
            : 'px-6 md:px-8 py-6 md:py-8 justify-end items-end text-right',
        ].join(' ')}
      >
        {isParent && (
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500 mb-3">
            Parent Category
          </p>
        )}

        <div>
          <h3
            className={[
              'font-extrabold mb-1 drop-shadow-2xl tracking-tight',
              isParent 
                ? 'text-xl md:text-2xl text-slate-900' 
                : 'text-xl md:text-2xl text-white',
            ].join(' ')}
          >
            {title}
          </h3>
          <p
            className={[
              'leading-relaxed font-medium drop-shadow-xl',
              isParent 
                ? 'text-xs md:text-sm text-slate-600' 
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
