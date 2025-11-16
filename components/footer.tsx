import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
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
              Revolutionize your lifestyle with sophisticated automation designed for unmatched convenience and elegance.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-bold mb-4">Product</h4>
             <div className="flex gap-12">
               <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <Link href="/audio-video" className="hover:text-primary transition">
                    Audio/Video
                  </Link>
                </li>
                <li>
                  <Link href="/automation" className="hover:text-primary transition">
                    Automation
                  </Link>
                </li>
                <li>
                  <Link href="/climate" className="hover:text-primary transition">
                    Climate
                  </Link>
                </li>
                <li>
                  <Link href="/lighting" className="hover:text-primary transition">
                    Lighting
                  </Link>
                </li>
              </ul>
               <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <Link href="/networking" className="hover:text-primary transition">
                    Networking
                  </Link>
                </li>
                <li>
                  <Link href="/shades" className="hover:text-primary transition">
                    Shades
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="hover:text-primary transition">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-primary transition">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-1 text-sm text-white/80">
              <p className="text-white/70">Phone</p>
              <a
                href="tel:+917070154040"
                className="text-base font-semibold text-white hover:text-primary transition"
              >
                +91 7070-15-4040
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-bold mb-4">Follow Us</h4>
             <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1AT6vxysR4/"
                className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-lg flex items-center justify-center text-primary transition"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/relay_automation?igsh=anIxbnM1bTR5Y2gz"
                className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-lg flex items-center justify-center text-primary transition"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:shubham@relayautomation.co.in"
                className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-lg flex items-center justify-center text-primary transition"
                aria-label="Email"
                target="_blank"
                rel="noreferrer noopener"
              >
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
