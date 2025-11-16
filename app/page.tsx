import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import DashboardPreview from '@/components/dashboard-preview'
import TestimonialSlider from '@/components/testimonial-slider'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <TestimonialSlider />
      <Footer />
    </main>
  )
}
