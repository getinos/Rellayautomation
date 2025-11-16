'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Thermometer, Lock, Zap, Wind } from 'lucide-react'

interface DeviceProps {
  icon: React.ReactNode
  label: string
  status: string
  percentage?: number
}

function DeviceStatus({ icon, label, status, percentage }: DeviceProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-4 bg-white rounded-lg border border-primary/20 hover:border-primary/40 glow-primary-hover transition-all"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
          {icon}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{label}</p>
          <p className="text-xs text-foreground/70">{status}</p>
        </div>
      </div>
      {percentage && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            transition={{ duration: 1 }}
            className="h-2 bg-gradient-to-r from-primary to-primary/70 rounded-full"
          />
        </div>
      )}
    </motion.div>
  )
}

export default function DashboardPreview() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Control Everything from One Dashboard
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl">
            Get a complete overview of your home's status and manage all devices with intuitive controls.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl border border-primary/20 glow-primary"
        >
          {/* Dashboard header */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Home Overview</h3>
            <p className="text-foreground/70">Last updated: Just now</p>
          </div>

          {/* Device grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <DeviceStatus
              icon={<Lightbulb size={20} />}
              label="Living Room Light"
              status="On at 80%"
              percentage={80}
            />
            <DeviceStatus
              icon={<Thermometer size={20} />}
              label="Temperature"
              status="22°C"
              percentage={68}
            />
            <DeviceStatus
              icon={<Wind size={20} />}
              label="Windows"
              status="2 Open"
            />
            <DeviceStatus
              icon={<Lock size={20} />}
              label="Front Door"
              status="Locked"
            />
            <DeviceStatus
              icon={<Zap size={20} />}
              label="Power Usage"
              status="850W"
              percentage={42}
            />
            <DeviceStatus
              icon={<Lightbulb size={20} />}
              label="Bedroom Light"
              status="Off"
            />
          </div>

          {/* Energy chart preview */}
          <div className="p-4 bg-white rounded-lg border border-primary/20">
            <p className="text-sm font-semibold text-foreground mb-4">Energy Usage Today</p>
            <div className="flex items-end gap-2 h-24">
              {[40, 65, 45, 80, 70, 90].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${value}%` }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex-1 bg-gradient-to-t from-primary to-primary/60 rounded-t-lg"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
