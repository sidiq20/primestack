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

  const words = ["Build", "Evolve", "Zenith"];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center flex-col overflow-hidden touch-none"
    >
      <AnimatePresence>
        {step < 4 ? (
          <motion.div
            key="text-sequence"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex gap-4 md:gap-8 flex-wrap justify-center px-6">
              {words.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={step >= index ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="font-clash text-4xl md:text-8xl font-bold tracking-tight text-white"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            {step >= 2 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="h-px bg-white/20 w-32 md:w-64 mt-8"
              />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="logo-popup"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
            className="relative w-32 h-32 md:w-64 md:h-64"
          >
            <Image
              src="/p-logo.jpeg"
              alt="PrimeStack Solutions Logo"
              fill
              className="rounded-3xl object-cover"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
