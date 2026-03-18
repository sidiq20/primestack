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
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="max-w-4xl w-full mx-auto text-center space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-white/10 text-[10px] md:text-xs font-satoshi font-black tracking-[0.2em] uppercase text-primary/80">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(168,85,247,0.5)] animate-pulse" />
            Empowering Digital Evolution
          </div>

          <h1 className="font-clash text-5xl md:text-9xl font-bold tracking-tight leading-[0.9] text-white">
            Your trusted partner for <br />
            <span className="text-gradient">web design</span> & <br />
            <span className="font-fraunces italic font-light">development</span>
          </h1>

          <p className="font-general text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Operating at our best to combine ideas, design, and technology for standout digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
            <Link 
              href="/contact" 
              className={cn(buttonVariants({ size: "lg" }), "group relative overflow-hidden font-satoshi font-bold rounded-full h-16 px-12 text-lg transition-all hover:scale-105 active:scale-95")}
            >
              <span className="relative z-10">Let's build your presence</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link 
              href="/portfolio" 
              className="font-satoshi font-bold text-lg text-white/60 hover:text-white transition-all hover:scale-105"
            >
              Explore our stack
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="relative group w-full max-w-5xl mx-auto"
        >
          <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden glass border-white/10 shadow-2xl">
            <Image
              src="/hero-sec-logo.jpeg"
              alt="PrimeStack Visual Identity"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          
          {/* Floating Badges (Senior Touch) */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 hidden lg:block p-8 glass border-white/10 rounded-[2.5rem] backdrop-blur-2xl max-w-xs text-left"
          >
            <p className="font-clash text-lg font-bold text-white mb-2">Modern Standards</p>
            <p className="font-general text-sm text-white/50 leading-relaxed">We build sites that are easy to use today and ready for future growth.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
