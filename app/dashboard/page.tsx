'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { Lightbulb, Thermometer, Lock, Wind, Zap, Smartphone, Bell, Settings, LogOut } from 'lucide-react'
import { useState } from 'react'

export default function DashboardPage() {
  const [activeRoom, setActiveRoom] = useState('living-room')
  const [lightIntensity, setLightIntensity] = useState(75)

  const rooms = ['living-room', 'bedroom', 'kitchen', 'bathroom']
  const routines = [
    { id: 1, name: 'Good Morning', time: '7:00 AM', active: true },
    { id: 2, name: 'Leave Home', time: '8:30 AM', active: false },
    { id: 3, name: 'Good Night', time: '10:00 PM', active: true },
  ]

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Sidebar + Main Content */}
      <div className="pt-20 flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-64 bg-secondary text-white flex-col p-6 min-h-screen">
          <div className="mb-8">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold mb-3">
              RA
            </div>
            <p className="text-sm text-white/70">Home Control System</p>
          </div>

          {/* User Info */}
          <div className="bg-white/10 rounded-lg p-4 mb-8">
            <p className="font-semibold mb-1">Alex Johnson</p>
            <p className="text-sm text-white/70">Home Owner</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2 flex-1">
            <NavItem icon={<Smartphone size={20} />} label="Dashboard" active />
            <NavItem icon={<Settings size={20} />} label="Settings" />
            <NavItem icon={<Bell size={20} />} label="Notifications" />
          </nav>

          <button className="flex items-center gap-2 text-white/70 hover:text-white transition w-full p-3 rounded-lg hover:bg-white/10">
            <LogOut size={20} />
            Logout
          </button>
        </aside>

        {/* Main Content */}
        <div className="flex-1 px-4 md:px-8 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-foreground mb-2">Welcome Home</h1>
              <p className="text-foreground/70">Friday, November 16, 2025 • 14:32</p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid md:grid-cols-4 gap-4 my-8"
            >
              <StatCard icon={<Zap className="text-yellow-500" />} label="Power Usage" value="2.4 kW" />
              <StatCard icon={<Thermometer className="text-red-500" />} label="Temperature" value="22°C" />
              <StatCard icon={<Lock className="text-green-500" />} label="Security" value="All Secure" />
              <StatCard icon={<Wind className="text-blue-500" />} label="Windows" value="3 Open" />
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Control Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                {/* Room Selection */}
                <div className="bg-white rounded-xl border border-primary/20 p-6 glow-primary">
                  <h2 className="text-xl font-bold text-foreground mb-4">Select Room</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {rooms.map((room) => (
                      <motion.button
                        key={room}
                        onClick={() => setActiveRoom(room)}
                        whileHover={{ scale: 1.05 }}
                        className={`p-4 rounded-lg font-semibold transition-all ${
                          activeRoom === room
                            ? 'bg-primary text-secondary'
                            : 'bg-gray-100 text-foreground hover:bg-gray-200'
                        }`}
                      >
                        {room.replace('-', ' ').toUpperCase()}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Light Control */}
                <div className="bg-white rounded-xl border border-primary/20 p-6 glow-primary">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-2xl">
                        💡
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{activeRoom} Lights</h3>
                        <p className="text-sm text-foreground/70">Intensity: {lightIntensity}%</p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white"
                    >
                      <Lightbulb size={20} />
                    </motion.button>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={lightIntensity}
                    onChange={(e) => setLightIntensity(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Climate Control */}
                <div className="bg-white rounded-xl border border-primary/20 p-6 glow-primary">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-foreground">Climate Control</h3>
                    <span className="text-2xl font-bold text-primary">22°C</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <ControlButton label="↑ Increase" />
                    <ControlButton label="↓ Decrease" />
                    <ControlButton label="Heat" active />
                    <ControlButton label="Cool" />
                  </div>
                </div>
              </motion.div>

              {/* Right Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-6"
              >
                {/* Automation Routines */}
                <div className="bg-white rounded-xl border border-primary/20 p-6 glow-primary">
                  <h3 className="font-bold text-foreground mb-4">Automation Routines</h3>
                  <div className="space-y-3">
                    {routines.map((routine) => (
                      <div key={routine.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-semibold text-sm text-foreground">{routine.name}</p>
                          <p className="text-xs text-foreground/70">{routine.time}</p>
                        </div>
                        <motion.div
                          className={`w-10 h-6 rounded-full transition-colors ${
                            routine.active ? 'bg-primary' : 'bg-gray-300'
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl border border-primary/20 p-6 glow-primary">
                  <h3 className="font-bold text-foreground mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <QuickAction label="Lock All Doors" icon={<Lock size={18} />} />
                    <QuickAction label="Close All Windows" icon={<Wind size={18} />} />
                    <QuickAction label="Lights Off" icon={<Lightbulb size={18} />} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg border border-primary/20 p-4 glow-primary-hover"
    >
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <span className="text-sm text-foreground/70">{label}</span>
      </div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
    </motion.div>
  )
}

function ControlButton({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={`p-3 rounded-lg font-semibold transition-all ${
        active ? 'bg-primary text-white' : 'bg-gray-100 text-foreground hover:bg-gray-200'
      }`}
    >
      {label}
    </motion.button>
  )
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <motion.button
      whileHover={{ x: 5 }}
      className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all ${
        active ? 'bg-primary text-white' : 'text-white/70 hover:text-white hover:bg-white/10'
      }`}
    >
      {icon}
      {label}
    </motion.button>
  )
}

function QuickAction({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ x: 5 }}
      className="flex items-center gap-2 w-full p-3 bg-gray-50 hover:bg-primary/10 rounded-lg transition-all text-foreground hover:text-primary font-semibold text-sm"
    >
      {icon}
      {label}
    </motion.button>
  )
}
