'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ContactForm from '@/components/contact-form'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail size={28} />,
      title: 'Email',
      value: 'hello@relayautomation.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: <Phone size={28} />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9am-6pm EST',
    },
    {
      icon: <MessageCircle size={28} />,
      title: 'Live Chat',
      value: 'Available Now',
      description: 'Chat with our support team',
    },
    {
      icon: <MapPin size={28} />,
      title: 'Office',
      value: 'San Francisco, CA',
      description: 'Visit our headquarters',
    },
  ]

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white pt-24 px-4 flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto w-full text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight mb-6 text-foreground">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 text-balance max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl border border-primary/20 glow-primary-hover text-center"
              >
                <div className="flex justify-center mb-4 text-primary">
                  {method.icon}
                </div>
                <h3 className="font-bold text-foreground mb-2">{method.title}</h3>
                <p className="text-primary font-semibold text-sm mb-1">{method.value}</p>
                <p className="text-foreground/70 text-xs">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              <ContactForm />
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-full h-80 bg-gray-200 rounded-xl border border-primary/20 overflow-hidden glow-primary">
                {/* Placeholder for map */}
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-primary/20 flex items-center justify-center">
                  <p className="text-foreground/50">📍 San Francisco, CA</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 bg-white rounded-xl border border-primary/20 glow-primary">
                <h3 className="font-bold text-foreground mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm text-foreground/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-foreground">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 bg-white rounded-xl border border-primary/20 glow-primary">
                <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary font-semibold text-xs transition-all"
                    >
                      {social[0]}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-foreground/70 text-lg">
              Can't find what you're looking for? Check out our FAQ
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does installation take?',
                a: 'Most installations take between 2-4 hours depending on your home size and complexity.',
              },
              {
                q: 'Do you offer support after installation?',
                a: 'Yes, we offer 24/7 customer support via phone, email, and live chat for all our customers.',
              },
              {
                q: 'Can I integrate with other smart home systems?',
                a: 'RelayAutomation is compatible with most major smart home platforms and devices.',
              },
              {
                q: 'What is your warranty policy?',
                a: 'All products come with a 2-year warranty covering defects and malfunctions.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-white to-blue-50/30 rounded-lg border border-primary/20 glow-primary-hover"
              >
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-foreground/70 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
