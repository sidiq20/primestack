"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your brand, goals, and audience to build a solid foundation.",
  },
  {
    number: "02",
    title: "Design & Identity",
    description: "Our designers craft a unique visual language that resonates with your brand essence.",
  },
  {
    number: "03",
    title: "Building & Development",
    description: "We turn designs into high-performance, responsive digital experiences.",
  },
  {
    number: "04",
    title: "Launch & Growth",
    description: "We help you go live and continue to optimize for maximum impact.",
  },
];

export function Process() {
  return (
    <section className="py-24 px-4 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="font-clash text-4xl md:text-6xl font-bold tracking-tight mb-4">
            How we <span className="text-primary italic font-fraunces">make it happen</span>
          </h2>
          <p className="font-general text-gray-400 max-w-xl text-lg">
            A streamlined process designed to deliver excellence without the friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.25rem] left-0 right-0 h-[1px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-18 h-18 bg-primary rounded-2xl flex items-center justify-center font-clash text-2xl font-bold shadow-2xl shadow-primary/40">
                {step.number}
              </div>
              <div className="space-y-3">
                <h3 className="font-clash text-2xl font-bold">{step.title}</h3>
                <p className="font-general text-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
