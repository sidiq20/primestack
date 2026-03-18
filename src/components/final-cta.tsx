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
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-black rounded-3xl p-12 md:p-24 overflow-hidden text-center text-white border border-white/5"
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="font-clash text-4xl md:text-7xl font-bold tracking-tight leading-tight">
              Ready to skyrocket your digital growth?
            </h2>
            <p className="font-general text-white/40 text-lg md:text-xl">
              Let's build something extraordinary together. Book your free discovery call today.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "font-satoshi font-bold rounded-2xl h-16 px-12 text-xl border border-white/20 transition-all hover:bg-white hover:text-black")}
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
