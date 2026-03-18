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
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="space-y-6">
            <h2 className="font-clash text-4xl md:text-7xl font-bold tracking-tight text-white leading-[0.9]">
              Selected <span className="italic font-fraunces text-gradient">Works</span>
            </h2>
            <p className="font-general text-lg md:text-xl text-muted-foreground max-w-xl">
              A curated collection of digital experiences built on collaboration, design, and peak technology.
            </p>
          </div>
          <Link href="/portfolio" className="font-satoshi font-black text-sm uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors border-b border-white/10 pb-2">
            View Archive
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`group relative rounded-[2.5rem] overflow-hidden glass border-white/5 cursor-pointer ${project.className}`}
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:h-full overflow-hidden min-h-[400px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
                
                <div className="absolute inset-x-0 bottom-0 p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <div className="flex items-end justify-between">
                    <div className="space-y-2">
                      <p className="font-clash text-xs font-bold uppercase tracking-widest text-primary">
                        {project.category}
                      </p>
                      <h3 className="font-satoshi text-3xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
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
