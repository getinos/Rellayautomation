'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen text-white">
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero image 2.jpg"
          alt="Modern premium house exterior"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen pt-24 pb-16">
        {/* Hero copy + tabs + filter panel */}
        <div className="w-full max-w-6xl mx-auto px-4 flex-1 flex flex-col justify-center">
          {/* Headline */}
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-[family-name:var(--font-montserrat)] tracking-tight">
              We don&apos;t just build houses
              <span className="block mt-1">we design better living</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-[family-name:var(--font-raleway)] font-medium tracking-wide">
              Signature architecture, natural materials, and thoughtful work with the landscape
              for those who value silence, light, and space.
            </p>
            <Button
              className="mt-4 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm md:text-base font-semibold shadow-lg shadow-[#0098ff]/40 hover:shadow-[#37b34a]/60 transition-transform transition-shadow"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
