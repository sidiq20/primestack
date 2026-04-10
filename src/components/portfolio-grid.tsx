"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Lumina Scent",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&q=80&w=2426",
    className: "md:col-span-8 md:row-span-2",
  },
  {
    title: "Vertex Ecosystem",
    category: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Nova Retail",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=2426",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Elysian Studio",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2426",
    className: "md:col-span-6 md:row-span-1",
  },
  {
    title: "Peak Performance",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1470",
    className: "md:col-span-6 md:row-span-1",
  },
];

export function PortfolioGrid() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="space-y-6">
            <h2 className="font-clash text-4xl md:text-7xl font-bold tracking-tight text-white leading-[0.9]">
              Selected Works
            </h2>
            <p className="font-general text-lg md:text-xl text-white/50 max-w-xl">
              A curated collection of digital experiences built on collaboration, design, and peak technology.
            </p>
          </div>
          <Link href="/portfolio" className="font-satoshi font-black text-sm uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors border-b border-white/10 pb-2">
            View Archive
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`group relative rounded-3xl overflow-hidden border border-white/5 cursor-pointer ${project.className}`}
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:h-full overflow-hidden min-h-[300px] bg-white/5 group-hover:bg-white/10 transition-colors duration-700 flex items-center justify-center">
                <div className="p-10 text-center z-10">
                  <p className="font-clash text-[12px] font-bold uppercase tracking-widest text-primary mb-4">
                    {project.category}
                  </p>
                  <h3 className="font-satoshi text-3xl font-bold text-white group-hover:scale-105 transition-transform duration-500">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0 group-hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
