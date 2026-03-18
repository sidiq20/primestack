"use client";

import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-black rounded-[3rem] p-12 md:p-24 overflow-hidden text-center text-white"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[100px] -z-0" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="font-clash text-4xl md:text-7xl font-bold tracking-tight leading-tight">
              Ready to <span className="text-gradient">skyrocket</span> your digital growth?
            </h2>
            <p className="font-general text-gray-400 text-lg md:text-xl">
              Let's build something extraordinary together. Book your free discovery call today.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "font-satoshi font-bold rounded-2xl h-16 px-12 text-xl shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95")}
              >
                Let's get started
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
