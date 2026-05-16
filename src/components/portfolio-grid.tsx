"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Seven Edge Identity",
    category: "Market Intelligence",
    images: [
      "/portfolio/IMG_2491.PNG",
      "/portfolio/IMG_2492.PNG",
      "/portfolio/IMG_2493.PNG",
      "/portfolio/IMG_2494.PNG",
      "/portfolio/IMG_2495.PNG",
    ],
    className: "md:col-span-8 md:row-span-2",
  },
  {
    title: "Abiok Brand Redesign",
    category: "Visual Identity",
    images: [
      "/portfolio/IMG_2496.PNG",
      "/portfolio/IMG_2497.PNG",
      "/portfolio/IMG_2498.PNG",
      "/portfolio/IMG_2499.PNG",
      "/portfolio/IMG_2500.PNG",
      "/portfolio/IMG_2501.PNG",
    ],
    className: "md:col-span-4 md:row-span-2",
  },
  {
    title: "Kayyen Law Firm Branding",
    category: "Professional Services",
    images: [
      "/portfolio/IMG_2502.PNG",
      "/portfolio/IMG_2503.PNG",
      "/portfolio/IMG_2504.PNG",
      "/portfolio/IMG_2505.PNG",
      "/portfolio/IMG_2506.PNG",
    ],
    className: "md:col-span-4 md:row-span-2",
  },
  {
    title: "Luxe Homes Identity",
    category: "Luxury Real Estate",
    images: [
      "/portfolio/IMG_2510.PNG",
      "/portfolio/IMG_2511.PNG",
      "/portfolio/IMG_2513.PNG",
      "/portfolio/IMG_2517.PNG",
      "/portfolio/IMG_2519.PNG",
    ],
    className: "md:col-span-8 md:row-span-2",
  },
  {
    title: "Creative Tech Ecosystem",
    category: "Digital Solutions",
    images: [
      "/portfolio/IMG_2523.PNG",
      "/portfolio/IMG_2525.PNG",
      "/portfolio/IMG_2529.PNG",
      "/portfolio/IMG_2530.PNG",
    ],
    className: "md:col-span-12 md:row-span-1",
  }
];

interface PortfolioGridProps {
  limit?: number;
}

export function PortfolioGrid({ limit }: PortfolioGridProps) {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

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
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:h-full overflow-hidden min-h-[400px] bg-white/5 group-hover:bg-white/10 transition-colors duration-700">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                <div className="absolute inset-0 p-10 flex flex-col justify-end z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="font-clash text-[12px] font-bold uppercase tracking-widest text-primary">
                      {project.category}
                    </p>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <p className="font-clash text-[12px] font-bold uppercase tracking-widest text-white/40">
                      {project.images.length} Images
                    </p>
                  </div>
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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setSelectedProject(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative w-full h-full flex flex-col items-center justify-center gap-8">
              <div 
                className="relative w-full max-w-5xl aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                      onClick={handlePrev}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                      onClick={handleNext}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Caption & Counter */}
              <div className="text-center space-y-2" onClick={(e) => e.stopPropagation()}>
                <p className="font-clash text-primary font-bold uppercase tracking-[0.2em] text-sm">
                  {selectedProject.category}
                </p>
                <h3 className="font-satoshi text-2xl md:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="font-general text-white/40">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </p>
              </div>

              {/* Thumbnails */}
              {selectedProject.images.length > 1 && (
                <div className="flex gap-2 px-4 overflow-x-auto max-w-full no-scrollbar" onClick={(e) => e.stopPropagation()}>
                  {selectedProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                        idx === currentImageIndex ? "border-primary opacity-100 scale-110" : "border-transparent opacity-40 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

