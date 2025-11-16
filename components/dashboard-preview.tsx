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
  return null
}
