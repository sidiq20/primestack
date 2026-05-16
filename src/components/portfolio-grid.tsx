"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Seven Edge Identity",
    category: "Market Intelligence",
    image: "/portfolio/IMG_2491.PNG",
    className: "md:col-span-8 md:row-span-2",
  },
  {
    title: "Seven Edge: Strategic Analysis",
    category: "Strategic Research",
    image: "/portfolio/IMG_2492.PNG",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Seven Edge: Operational Excellence",
    category: "Consultancy",
    image: "/portfolio/IMG_2493.PNG",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Abiok Brand Redesign",
    category: "Visual Identity",
    image: "/portfolio/IMG_2496.PNG",
    className: "md:col-span-6 md:row-span-1",
  },
  {
    title: "Abiok: Outdoor Media Impact",
    category: "Advertising",
    image: "/portfolio/IMG_2499.PNG",
    className: "md:col-span-6 md:row-span-1",
  },
  {
    title: "Kayyen Law Firm Branding",
    category: "Professional Services",
    image: "/portfolio/IMG_2502.PNG",
    className: "md:col-span-4 md:row-span-2",
  },
  {
    title: "Luxe Homes Identity",
    category: "Luxury Real Estate",
    image: "/portfolio/IMG_2510.PNG",
    className: "md:col-span-8 md:row-span-2",
  },
  {
    title: "Abiok: Service Ecosystem",
    category: "UI/UX Design",
    image: "/portfolio/IMG_2497.PNG",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Abiok: Legacy & Heritage",
    category: "Brand Storytelling",
    image: "/portfolio/IMG_2498.PNG",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Seven Edge: Principle-Led Growth",
    category: "Corporate Values",
    image: "/portfolio/IMG_2494.PNG",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Kayyen: Practice Area Strategy",
    category: "Legal Information",
    image: "/portfolio/IMG_2503.PNG",
    className: "md:col-span-6 md:row-span-1",
  },
  {
    title: "Kayyen: Attorney Profiles",
    category: "Corporate Photography",
    image: "/portfolio/IMG_2504.PNG",
    className: "md:col-span-6 md:row-span-1",
  },
  {
    title: "Luxe Homes: Premium Portfolio",
    category: "Visual Narrative",
    image: "/portfolio/IMG_2511.PNG",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Luxe Homes: High-End Concepts",
    category: "Creative Direction",
    image: "/portfolio/IMG_2513.PNG",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Seven Edge: Strategic Partnership",
    category: "Digital Solutions",
    image: "/portfolio/IMG_2495.PNG",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Abiok: Leadership Showcase",
    category: "Web Design",
    image: "/portfolio/IMG_2500.PNG",
    className: "md:col-span-8 md:row-span-2",
  },
  {
    title: "Abiok: Conversion Strategy",
    category: "Lead Gen",
    image: "/portfolio/IMG_2501.PNG",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Kayyen Law: Commercial Case Study",
    category: "Editorial Design",
    image: "/portfolio/IMG_2505.PNG",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Kayyen: Contact & Consultations",
    category: "UX Design",
    image: "/portfolio/IMG_2506.PNG",
    className: "md:col-span-12 md:row-span-1",
  },
  {
    title: "Luxe Homes: Modern Architecture",
    category: "Photography",
    image: "/portfolio/IMG_2517.PNG",
    className: "md:col-span-6 md:row-span-1",
  },
  {
    title: "Luxe Homes: Exclusive Real Estate",
    category: "Premium Branding",
    image: "/portfolio/IMG_2519.PNG",
    className: "md:col-span-6 md:row-span-1",
  }
];

interface PortfolioGridProps {
  limit?: number;
}

export function PortfolioGrid({ limit }: PortfolioGridProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

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
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`group relative rounded-3xl overflow-hidden border border-white/5 cursor-pointer ${project.className}`}
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:h-full overflow-hidden min-h-[400px] bg-white/5 group-hover:bg-white/10 transition-colors duration-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                <div className="absolute inset-0 p-10 flex flex-col justify-end z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <p className="font-clash text-[12px] font-bold uppercase tracking-widest text-primary mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.category}
                  </p>
                  <h3 className="font-satoshi text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                </div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0 group-hover:-translate-y-1 z-20">
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

