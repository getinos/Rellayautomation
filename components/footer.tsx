import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/assets/logo/logo.png"
                alt="Relay Automation logo"
                width={120}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 text-sm">
              Making homes smarter and safer with intelligent automation.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/products" className="hover:text-primary transition">Smart Lights</Link></li>
              <li><Link href="/products" className="hover:text-primary transition">Smart Windows</Link></li>
              <li><Link href="/products" className="hover:text-primary transition">Security</Link></li>
              <li><Link href="/products" className="hover:text-primary transition">Energy</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-primary transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Careers</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-lg flex items-center justify-center text-primary transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-lg flex items-center justify-center text-primary transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-lg flex items-center justify-center text-primary transition">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-lg flex items-center justify-center text-primary transition">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
          <p>&copy; {currentYear} RelayAutomation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
