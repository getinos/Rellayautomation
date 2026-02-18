import type { Metadata } from 'next'
import { Geist, Geist_Mono, Montserrat, Raleway } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat'
});
const raleway = Raleway({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
  variable: '--font-raleway'
});

export const metadata: Metadata = {
  title: 'RelayAutomation - Smart Home Automation',
  description: 'Make your home smarter, safer, and automated with RelayAutomation intelligent home control solutions.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${raleway.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
