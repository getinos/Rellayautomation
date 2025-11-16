import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import DashboardPreview from '@/components/dashboard-preview'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FeaturesSection
        title="Smart Home Solutions"
        subtitle="Smart Homes combines all these categories into a complete RelayAutomation experience."
      />
      <DashboardPreview />
      <Footer />
    </main>
  )
}
