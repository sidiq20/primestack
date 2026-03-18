"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { PortfolioGrid } from "@/components/portfolio-grid";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-clash text-5xl md:text-7xl font-bold tracking-tight">
            Our <span className="italic font-fraunces">Work</span>
          </h1>
          <p className="font-general text-muted-foreground text-lg md:text-xl">
            A curated selection of our most impactful projects across various industries.
          </p>
        </div>
      </section>

      <PortfolioGrid />

      <FinalCTA />
      <Footer />
    </main>
  );
}
