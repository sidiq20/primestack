"use client";

import { motion } from "framer-motion";
import { Laptop, RefreshCw, Search, Fingerprint, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Website Design & Development",
    description: "Complete custom builds for new businesses. Modern, fast, and mobile-friendly experiences built for peak performance.",
    icon: <Laptop className="w-6 h-6" />,
    href: "/services#web-design",
    details: "Ideal for startups needing a professional presence.",
  },
  {
    title: "Website Redesign & Modernization",
    description: "Update outdated or poor-performing sites. Improve navigation, usability, and visual identity to increase engagement.",
    icon: <RefreshCw className="w-6 h-6" />,
    href: "/services#redesign",
    details: "Best for businesses wanting a fresh, modern edge.",
  },
  {
    title: "Website Audit & Optimization",
    description: "Identify and fix technical, design, and performance issues. Improve speed, stability, and mobile compatibility.",
    icon: <Search className="w-6 h-6" />,
    href: "/services#audit",
    details: "Perfect for fixing performance bottlenecks.",
  },
  {
    title: "Brand Identity & Visual Design",
    description: "Create or refine your visual identity. Logo direction, typography, and color systems that build lasting trust.",
    icon: <Fingerprint className="w-6 h-6" />,
    href: "/services#branding",
    details: "Strengthen recognition and first impressions.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-end">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-clash text-4xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Our Specialist <br />
              Digital Solutions
            </h2>
            <p className="font-general text-lg md:text-xl text-white/50 max-w-2xl">
              Thoughtful design meets modern technology. We create digital experiences that are easy to use today and ready for future growth.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link 
              href="/services" 
              className="group flex items-center gap-4 font-satoshi font-black text-sm uppercase tracking-[0.2em] text-white hover:text-white/60 transition-colors"
            >
              See our full stack
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all">
                <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative flex flex-col justify-between p-10 rounded-3xl border border-white/[0.05] hover:border-white/20 transition-all duration-500"
            >
              <div className="space-y-8">
                <div className="w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-clash text-2xl font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                  <p className="font-general text-sm text-white/40 leading-relaxed h-16">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/[0.05]">
                <p className="font-satoshi text-[10px] font-black uppercase tracking-widest text-white/30 mb-6">
                  {service.details}
                </p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center gap-2 font-satoshi font-bold text-sm text-white/40 hover:text-white transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
