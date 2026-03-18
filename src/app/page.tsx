import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustHighlights } from "@/components/trust-highlights";
import { ServicesPreview } from "@/components/services-preview";
import { MissionVision } from "@/components/mission-vision";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { FAQSection } from "@/components/faq-section";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <TrustHighlights />
      <MissionVision />
      <ServicesPreview />
      <PortfolioGrid />
      <Process />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
