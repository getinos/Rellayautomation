'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronDown, Building2, Home, Layers } from 'lucide-react'

const categories = ['All', 'Houses', 'Villas', 'Cottages', 'Townhouses']

const projects = [
  {
    id: 1,
    title: 'Woodland Retreat House',
    location: 'Oslo, Norway',
    area: '320 m²',
    bedrooms: 3,
    floors: 2,
  },
  {
    id: 2,
    title: 'Lakeview Panorama',
    location: 'Zürich, Switzerland',
    area: '280 m²',
    bedrooms: 4,
    floors: 2,
  },
  {
    id: 3,
    title: 'Mountain Glass Loft',
    location: 'Innsbruck, Austria',
    area: '240 m²',
    bedrooms: 2,
    floors: 1,
  },
  {
    id: 4,
    title: 'Forest Courtyard House',
    location: 'Vancouver, Canada',
    area: '350 m²',
    bedrooms: 4,
    floors: 2,
  },
]

export default function HeroSection() {
  const [activeCategory, setActiveCategory] = useState('Houses')
  const [style, setStyle] = useState('Modern')
  const [area, setArea] = useState('300–500 m²')
  const [bedrooms, setBedrooms] = useState(3)
  const [floors, setFloors] = useState(2)

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#070816]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen pt-24 pb-16">
        {/* Hero copy + tabs + filter panel */}
        <div className="w-full max-w-6xl mx-auto px-4 flex-1 flex flex-col justify-center">
          {/* Headline */}
          <div className="text-center mb-10 md:mb-12">
            <p className="uppercase tracking-[0.28em] text-xs md:text-sm text-white/60 mb-4">
              woodland studio
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold md:font-bold leading-tight mb-4">
              We don&apos;t just build houses
              <span className="block mt-1">we design better living</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-white/70">
              Signature architecture, natural materials, and thoughtful work with the landscape
              for those who value silence, light, and space.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={[
                  'px-4 py-2 rounded-full text-xs md:text-sm transition-all',
                  'border border-white/15 backdrop-blur-md',
                  activeCategory === category
                    ? 'bg-white text-slate-900 shadow-lg shadow-black/30'
                    : 'bg-white/5 text-white/80 hover:bg-white/10',
                ].join(' ')}
              >
                {category}
              </button>
            ))}
          </div>

          {/* (Filter panel removed as requested) */}
        </div>

        {/* Project cards grid */}
        <div className="w-full max-w-6xl mx-auto px-4 mt-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
              >
                <div className="relative h-44 md:h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-slate-900/10 to-amber-600/25" />
                  <Image
                    src="/placeholder.jpg"
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-black/55 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/80">
                    <Building2 className="h-3 w-3" />
                    project
                  </div>
                </div>

                <div className="p-4 md:p-5">
                  <h3 className="text-sm md:text-base font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/60 mb-3">
                    {project.location}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-white/65">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1">
                        <Layers className="h-3 w-3" /> {project.area}
                      </span>
                      <span>· {project.bedrooms} bedrooms</span>
                    </div>
                    <span>{project.floors} floors</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
