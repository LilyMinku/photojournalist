import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MarqueeBar } from "@/components/marquee-bar"
import { StoriesSection } from "@/components/stories-section"
import { AboutSection } from "@/components/about-section"
import { ValuesSection } from "@/components/values-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <MarqueeBar />
      <StoriesSection />
      <AboutSection />
      <ValuesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
