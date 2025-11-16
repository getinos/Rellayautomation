'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import ProductCard from '@/components/product-card'
import { Lightbulb, Wind, Lock, Zap, Home, Settings } from 'lucide-react'

const products = [
  {
    icon: Lightbulb,
    title: 'Smart Lighting System',
    description: 'Intelligent lighting with dimming, color control, and automation',
    features: ['Voice control', 'Scheduling', 'Motion sensors', 'Scene creation'],
  },
  {
    icon: Wind,
    title: 'Auto Window System',
    description: 'Weather-responsive window automation for comfort and security',
    features: ['Weather detection', 'Manual override', 'Schedule automation', 'Security alerts'],
  },
  {
    icon: Lock,
    title: 'Smart Door Locks',
    description: 'Secure access control with multiple authentication methods',
    features: ['Keyless entry', 'Guest codes', 'Entry logs', 'Emergency access'],
  },
  {
    icon: Zap,
    title: 'Energy Monitoring',
    description: 'Real-time energy tracking and optimization for savings',
    features: ['Live consumption', 'Daily reports', 'Peak detection', 'Recommendations'],
  },
  {
    icon: Home,
    title: 'Full Home Kit',
    description: 'Complete automation solution for your entire home',
    features: ['All systems', 'Hub included', 'Professional setup', 'Priority support'],
  },
  {
    icon: Settings,
    title: 'Advanced Automation',
    description: 'Complex automation routines and AI-powered optimization',
    features: ['Custom routines', 'AI learning', 'Triggers', 'Integrations'],
  },
]

export default function ProductsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white pt-24 px-4 flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto w-full text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight mb-6 text-foreground">
            Our <span className="text-primary">Smart Home</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 text-balance max-w-2xl mx-auto mb-8">
            Choose from our comprehensive range of products designed to transform your living space into an intelligent, efficient home.
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((product, index) => (
              <ProductCard
                key={index}
                icon={product.icon}
                title={product.title}
                description={product.description}
                features={product.features}
                delay={index * 0.05}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-t border-primary/10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-foreground/70 mb-8">
            Transform your home with RelayAutomation's intelligent automation solutions.
          </p>
          <button className="bg-primary text-secondary hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-all glow-primary-hover">
            Contact Sales
          </button>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
