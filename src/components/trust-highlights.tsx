"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users, Globe, Trophy } from "lucide-react";

const highlights = [
  {
    title: "Global Reach",
    description: "Delivering world-class solutions across borders and time zones.",
    icon: <Globe className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Peak Speed",
    description: "Optimized for performance and rapid delivery without compromise.",
    icon: <Zap className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "100% Trust",
    description: "Built on transparency, open communication, and measurable results.",
    icon: <ShieldCheck className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Expert Team",
    description: "A collective of specialists shaped by the AI generation.",
    icon: <Users className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Award Winning",
    description: "Excellence recognized in strategy, design, and technical execution.",
    icon: <Trophy className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
  },
];

export function TrustHighlights() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`group relative p-10 rounded-[2.5rem] overflow-hidden glass border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 ${item.className}`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between space-y-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-clash text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-general text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Subtle grid pattern for texture */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
