"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step < 4) {
      timer = setTimeout(() => {
        setStep((s) => s + 1);
      }, step === 3 ? 1500 : 800);
    } else if (step === 4) {
      timer = setTimeout(() => {
        onComplete();
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [step, onComplete]);

  const words = ["Build", "Evolve", "Excel"];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center flex-col overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {step < 4 ? (
          <motion.div
            key="text-sequence"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex gap-4 md:gap-8">
              {words.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  animate={step >= index ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="font-clash text-4xl md:text-8xl font-bold tracking-tight text-white mb-2"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            {step >= 2 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-1 bg-primary rounded-full mt-4"
              />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="logo-popup"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.6, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              opacity: { duration: 0.4 }
            }}
            className="relative w-40 h-40 md:w-64 md:h-64"
          >
            <Image
              src="/p-logo.jpeg"
              alt="PrimeStack Logo"
              fill
              className="rounded-[2.5rem] shadow-2xl shadow-primary/20 object-cover"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background ambient glow */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] bg-primary/20 blur-[160px] -z-10 rounded-full"
      />
    </motion.div>
  );
}
