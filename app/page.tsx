import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TechnologySection from "@/components/technology-section"
import AboutSection from "@/components/about-section"
import CommunitySection from "@/components/community-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TechnologySection />
      <AboutSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
