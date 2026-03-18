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
            Digital <span className="text-gradient">Excellence</span>
          </motion.h1>
          <p className="font-general text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Combining thoughtful design with modern technology to create products ready for future growth.
          </p>
        </div>
        {/* Abstract background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10" />
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
                  <div className="bg-primary/10 p-5 rounded-3xl text-primary shadow-2xl shadow-primary/5">
                    {service.icon}
                  </div>
                  <div className="h-px w-12 bg-white/10" />
                </div>
                
                <div className="space-y-6">
                  <h2 className="font-clash text-4xl md:text-6xl font-bold text-white tracking-tight">
                    {service.title}
                  </h2>
                  <p className="font-general text-muted-foreground text-lg md:text-xl leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pb-4">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      <span className="font-satoshi font-bold text-white/70 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
                   <div className="relative z-10">
                     <p className="font-satoshi text-[10px] font-black uppercase tracking-widest text-primary mb-2">The Outcome</p>
                     <p className="font-general text-white md:text-lg italic leading-relaxed">
                       "{service.outcome}"
                     </p>
                   </div>
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                     <ArrowRight className="w-12 h-12 -rotate-45" />
                   </div>
                </div>
              </div>

              <div className="flex-1 w-full relative">
                <div className="aspect-square glass rounded-[4rem] border-white/10 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <service.icon.type {...service.icon.props} className="w-32 h-32 md:w-48 md:h-48 text-primary/10 group-hover:text-primary/20 transition-all duration-700 group-hover:scale-110" />
                  
                  {/* Floating geometric detail */}
                  <div className="absolute top-12 right-12 w-12 h-12 border border-white/10 rounded-full animate-pulse" />
                  <div className="absolute bottom-12 left-12 w-24 h-24 border border-white/5 rounded-full" />
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
