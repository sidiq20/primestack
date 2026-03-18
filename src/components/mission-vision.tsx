"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export function MissionVision() {
  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group p-12 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-xl border border-white/10 flex items-center justify-center text-white/80 mb-8">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="font-clash text-4xl font-bold text-white mb-6">Our Mission</h3>
            <p className="font-general text-lg md:text-xl text-white/40 leading-relaxed">
              To combine <span className="text-white font-medium">thoughtful design</span> with modern technology to create digital experiences that are easy to use, fast, and built for peak performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group p-12 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-xl border border-white/10 flex items-center justify-center text-white/80 mb-8">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="font-clash text-4xl font-bold text-white mb-6">Our Vision</h3>
            <p className="font-general text-lg md:text-xl text-white/40 leading-relaxed">
              To lead the <span className="text-white font-medium">evolution of digital experiences</span> through purposeful designs and innovative technology, creating products that are easy to use today and ready for future growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
