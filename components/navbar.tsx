'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const desktopNavItems = navLinks.flatMap((link) => {
    const items = [
      <Link
        key={link.href}
        href={link.href}
        className="text-foreground hover:text-primary transition-colors text-sm font-medium"
      >
        {link.label}
      </Link>,
    ]

    if (link.label === 'Products') {
      items.push(
        <DropdownMenu key="category-dropdown">
          <DropdownMenuTrigger asChild>
            <button className="inline-flex items-center gap-1 text-foreground hover:text-primary text-sm font-medium">
              Category
              <ChevronDown className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Audio/Video</DropdownMenuItem>
            <DropdownMenuItem>Automation</DropdownMenuItem>
            <DropdownMenuItem>Climate</DropdownMenuItem>
            <DropdownMenuItem>Lighting</DropdownMenuItem>
            <DropdownMenuItem>Networking</DropdownMenuItem>
            <DropdownMenuItem>Shades</DropdownMenuItem>
            <DropdownMenuItem>Security</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      )
    }

    return items
  })

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm glow-primary">
              RA
            </div>
            <span className="font-bold text-foreground hidden sm:inline">RelayAutomation</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {desktopNavItems}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-2">
            <Button className="bg-primary text-secondary hover:bg-primary/90 font-semibold glow-primary-hover">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-primary/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:text-primary transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button className="w-full bg-primary text-secondary hover:bg-primary/90 font-semibold">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
