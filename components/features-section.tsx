'use client'

import FeatureCard from './feature-card'
import { Lightbulb, AppWindow as Window, Lock, Zap, Smartphone, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Lightbulb,
    title: 'Smart Lighting Automation',
    description: 'Automate your lights with schedules, voice control, and smart sensors for the perfect ambiance.',
  },
  {
    icon: Window,
    title: 'Auto Window Closing',
    description: 'Intelligent window automation that responds to weather, time, and your preferences.',
  },
  {
    icon: Lock,
    title: 'Door & Curtain Automation',
    description: 'Secure your home with automated locks and curtains that work on your schedule.',
  },
  {
    icon: Zap,
    title: 'Energy Saving AI',
    description: 'Reduce energy consumption with intelligent optimization and real-time monitoring.',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web Remote Control',
    description: 'Control your entire home from anywhere with our intuitive mobile and web apps.',
  },
  {
    icon: BarChart3,
    title: 'Energy Monitoring',
    description: 'Track and analyze your home energy usage with detailed analytics and insights.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Your Smart Home
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Everything you need to automate, control, and optimize your home.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
