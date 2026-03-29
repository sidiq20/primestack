"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "PrimeStack Solutions transformed our digital presence. The new brand identity is exactly what we needed to stand out.",
    author: "Sarah J.",
    role: "CEO at EcoSphere",
  },
  {
    quote: "Working with them was seamless. The website is lightning fast and our conversion rate has doubled.",
    author: "Mark T.",
    role: "Marketing Director at Zenith",
  },
  {
    quote: "The strategic approach to social media management has grown our audience by 300% in just 3 months.",
    author: "Elena R.",
    role: "Founder at Luna Social",
  },
  {
    quote: "Professional, creative, and technical. They are the ultimate partners for any modern brand.",
    author: "David L.",
    role: "Product Lead at Apex Media",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 overflow-hidden bg-secondary/20">
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="font-clash text-3xl md:text-5xl font-bold tracking-tight">
          Don't just take <span className="text-gradient italic font-fraunces">our word for it</span>
        </h2>
      </div>

      <div className="relative flex gap-8 whitespace-nowrap overflow-hidden">
        {/* Infinite Scroll Container */}
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-8"
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[450px] flex-shrink-0 glass p-8 rounded-3xl space-y-6"
            >
              <Quote className="w-10 h-10 text-primary opacity-20" />
              <p className="font-fraunces italic text-lg md:text-xl text-foreground whitespace-normal leading-relaxed">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20" />
                <div>
                  <h4 className="font-satoshi font-bold text-sm tracking-tight">{item.author}</h4>
                  <p className="font-general text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
