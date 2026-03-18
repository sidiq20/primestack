"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Most websites are completed within 2–8 weeks, depending on project scope and client feedback. We focus on delivering projects quickly without compromising standards.",
  },
  {
    question: "How is the website pricing decided?",
    answer: "Pricing is discussed and finalized through a phone call or in-person meeting, based on your specific requirements and goals. We believe in transparency and finding the best solution for your budget.",
  },
  {
    question: "What do you need from me to get started?",
    answer: "We'll need your business objectives, content (text/images), branding details, and any reference websites you like. Clarity starts with listening to your needs.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes. All websites built by Prime Stack Web Solutions are fully responsive and optimized for all devices, ensuring a smooth experience on phones, tablets, and desktops.",
  },
  {
    question: "Do you offer website maintenance after launch?",
    answer: "Yes. We offer optional website maintenance for a monthly update fee, including regular updates, security checks, performance monitoring, and minor content changes.",
  },
  {
    question: "How do I get started with Prime Stack Web Solutions?",
    answer: "Simply contact us to schedule a call or in-person meeting, and we'll discuss your ideas, goals, and the best solution for your business.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-clash text-4xl md:text-6xl font-bold text-white">
            Common Questions
          </h2>
          <p className="font-general text-white/40 text-lg">
            Everything you need to know about starting your project with PrimeStack.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group rounded-2xl border border-white/5 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left"
              >
                <span className="font-satoshi font-bold text-lg md:text-xl text-white/80 group-hover:text-white transition-colors">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white/20 group-hover:text-white" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 font-general text-white/40 leading-relaxed md:text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
