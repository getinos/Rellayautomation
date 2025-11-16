'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { CheckCircle, Users, Lightbulb, Target } from 'lucide-react'

export default function AboutPage() {
  const timeline = [
    { year: '2020', title: 'Company Founded', description: 'Started with a vision to revolutionize home automation' },
    { year: '2021', title: 'First Product Launch', description: 'Introduced Smart Lighting System to the market' },
    { year: '2022', title: 'Series A Funding', description: 'Raised $5M to accelerate product development' },
    { year: '2023', title: '100K+ Homes', description: 'Reached milestone of 100,000 homes automated' },
    { year: '2024', title: 'Global Expansion', description: 'Expanded operations to 15+ countries worldwide' },
    { year: '2025', title: 'AI Integration', description: 'Launched AI-powered automation routines' },
  ]

  const whyUs = [
    {
      icon: <Lightbulb size={32} />,
      title: 'Innovation First',
      description: 'We continuously push the boundaries of smart home technology with cutting-edge solutions.',
    },
    {
      icon: <Users size={32} />,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We listen and iterate based on user feedback.',
    },
    {
      icon: <Target size={32} />,
      title: 'Mission Driven',
      description: 'We believe in creating sustainable, efficient homes for a better tomorrow.',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Quality Assured',
      description: 'Every product meets rigorous quality standards and goes through extensive testing.',
    },
  ]

  const team = [
    { name: 'Alex Chen', role: 'CEO & Co-founder', avatar: '👨‍💼' },
    { name: 'Sarah Williams', role: 'CTO & Co-founder', avatar: '👩‍💻' },
    { name: 'Mike Rodriguez', role: 'Head of Product', avatar: '👨‍🔧' },
    { name: 'Emma Davis', role: 'Head of Operations', avatar: '👩‍💼' },
  ]

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
            About <span className="text-primary">RelayAutomation</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 text-balance max-w-2xl mx-auto">
            We're on a mission to make smart homes accessible, affordable, and delightful for everyone.
          </p>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              At RelayAutomation, we believe every home should be smart, safe, and sustainable. Our mission is to provide cutting-edge automation technology that empowers homeowners to live more comfortably, save energy, and enjoy greater peace of mind. We're committed to making smart home technology accessible to everyone, regardless of their technical expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Why RelayAutomation?</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              We stand out in the smart home industry through our commitment to excellence and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-xl border border-primary/20 glow-primary-hover text-center"
              >
                <div className="flex justify-center mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-foreground/70 text-lg">
              From startup to industry leader in smart home automation
            </p>
          </motion.div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`flex gap-6 items-start ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-24 flex-shrink-0">
                  <p className="text-2xl font-bold text-primary">{item.year}</p>
                </div>
                <div className="flex-1 p-6 bg-gradient-to-br from-white to-blue-50/30 rounded-lg border border-primary/20 glow-primary-hover">
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Leadership Team</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Meet the talented individuals leading RelayAutomation towards the future of smart homes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl border border-primary/20 glow-primary-hover text-center"
              >
                <p className="text-5xl mb-4">{member.avatar}</p>
                <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '100K+', label: 'Homes Automated' },
              { number: '15+', label: 'Countries' },
              { number: '$10M+', label: 'Revenue' },
              { number: '500+', label: 'Team Members' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 text-center"
              >
                <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-foreground/70 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
