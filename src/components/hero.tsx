"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-20 px-4 overflow-hidden">
      <div className="max-w-4xl w-full mx-auto text-center space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 text-[10px] md:text-xs font-satoshi font-black tracking-[0.2em] uppercase text-white/60">
            Empowering Digital Evolution
          </div>

          <h1 className="font-clash text-5xl md:text-9xl font-bold tracking-tight leading-[0.9] text-white">
            Your trusted partner for <br />
            web design & <br />
            development
          </h1>

          <p className="font-general text-lg md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Operating at our best to combine ideas, design, and technology for standout digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
            <Link 
              href="/contact" 
              className={cn(buttonVariants({ size: "lg" }), "group relative overflow-hidden font-satoshi font-bold rounded-full h-16 px-12 text-lg transition-all border border-white/20 hover:bg-white hover:text-black")}
            >
              <span className="relative z-10">Let's build your presence</span>
            </Link>
            <Link 
              href="/portfolio" 
              className="font-satoshi font-bold text-lg text-white/40 hover:text-white transition-all"
            >
              Explore our stack
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="relative w-full max-w-5xl mx-auto"
        >
          <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden border border-white/10">
            <Image
              src="/hero-sec-logo.jpeg"
              alt="PrimeStack Visual Identity"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
