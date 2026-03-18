"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { Laptop, RefreshCw, Search, Fingerprint, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const detailedServices = [
  {
    id: "web-design",
    title: "Website Design & Development",
    description: "We create complete websites for businesses that do not yet have one or want to start fresh. Every site is built to be modern, fast, and mobile-friendly, ensuring it works smoothly on phones, tablets, and desktops.",
    icon: <Laptop className="w-12 h-12 text-primary" />,
    items: ["Custom Structure Planning", "Modern Layout Design", "Full Responsiveness", "Startup Optimized"],
    outcome: "A professional online presence that builds trust and converts.",
  },
  {
    id: "redesign",
    title: "Website Redesign & Modernization",
    description: "We update and improve existing websites that look outdated or are not performing well. We focus on appearance, navigation, and usability while enhancing loading speed and overall performance.",
    icon: <RefreshCw className="w-12 h-12 text-primary" />,
    items: ["Aesthetic Overhaul", "Usability Enhancements", "Performance Upgrades", "Mobile Compatibility"],
    outcome: "A fresh, modern image that increases engagement and conversions.",
  },
  {
    id: "audit",
    title: "Website Audit & Optimization",
    description: "Careful review of your website to identify technical, design, and performance problems. We fix broken links, slow pages, and layout issues to improve stability.",
    icon: <Search className="w-12 h-12 text-primary" />,
    items: ["Technical Problem Identification", "Speed Bottleneck Fixes", "Stability Improvements", "Cross-Device Testing"],
    outcome: "A faster, more reliable website with better user experience.",
  },
  {
    id: "branding",
    title: "Brand Identity & Visual Design",
    description: "Create or refine your visual identity. Developing logo direction, choosing suitable colors and typography, and defining a visual style that reflects your personality.",
    icon: <Fingerprint className="w-12 h-12 text-primary" />,
    items: ["Logo Direction", "Typography Selection", "Color System Design", "Consistency Roadmap"],
    outcome: "A clear, attractive brand identity that strengthens recognition.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-40 pb-24 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-clash text-5xl md:text-8xl font-bold tracking-tight text-white"
          >
            Digital Excellence
          </motion.h1>
          <p className="font-general text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Combining thoughtful design with modern technology to create products ready for future growth.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-40">
          {detailedServices.map((service, index) => (
            <motion.div 
              key={service.id} 
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-center gap-16 lg:gap-32 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-10">
                <div className="inline-flex items-center gap-4">
                  <div className="border border-white/10 p-5 rounded-3xl text-white/80">
                    <service.icon.type {...service.icon.props} className="w-12 h-12 text-white/60" />
                  </div>
                  <div className="h-px w-12 bg-white/10" />
                </div>
                
                <div className="space-y-6">
                  <h2 className="font-clash text-4xl md:text-6xl font-bold text-white tracking-tight">
                    {service.title}
                  </h2>
                  <p className="font-general text-white/40 text-lg md:text-xl leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pb-4">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-white transition-colors" />
                      <span className="font-satoshi font-bold text-white/50 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                   <div className="relative z-10">
                     <p className="font-satoshi text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">The Outcome</p>
                     <p className="font-general text-white/80 md:text-lg italic leading-relaxed">
                       "{service.outcome}"
                     </p>
                   </div>
                </div>
              </div>

              <div className="flex-1 w-full relative">
                <div className="aspect-square rounded-[3rem] border border-white/10 flex items-center justify-center relative overflow-hidden group">
                  <service.icon.type {...service.icon.props} className="w-32 h-32 md:w-48 md:h-48 text-white/[0.03] group-hover:text-white/[0.05] transition-all duration-700 group-hover:scale-105" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
