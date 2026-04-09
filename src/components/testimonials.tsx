"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "PrimeStack Solutions transformed our digital presence. The new brand identity is exactly what we needed to stand out.",
    author: "Sarah J.",
    role: "CEO at EcoSphere",
  },
  {
    quote: "Working with them was seamless. The website is lightning fast and our conversion rate has doubled.",
    author: "Mark T.",
    role: "Marketing Director at Zenith",
  },
  {
    quote: "The strategic approach to social media management has grown our audience by 300% in just 3 months.",
    author: "Elena R.",
    role: "Founder at Luna Social",
  },
  {
    quote: "Professional, creative, and technical. They are the ultimate partners for any modern brand.",
    author: "David L.",
    role: "Product Lead at Apex Media",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="py-24 px-4 overflow-hidden bg-secondary/20 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="font-clash text-3xl md:text-5xl font-bold tracking-tight">
          Don't just take <span className="text-gradient italic font-fraunces">our word for it</span>
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto h-[400px] md:h-[350px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.4 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full px-4"
          >
            <div className="glass p-8 md:p-12 rounded-[2rem] space-y-8 relative overflow-hidden group">
              {/* Decorative Quote Mark */}
              <Quote className="absolute -top-4 -left-4 w-32 h-32 text-primary/5 -rotate-12 transition-transform duration-500 group-hover:rotate-0" />
              
              <div className="relative z-10">
                <Quote className="w-12 h-12 text-primary mb-6 opacity-40 shrink-0" />
                <p className="font-fraunces italic text-xl md:text-3xl text-foreground leading-tight tracking-tight">
                  "{testimonials[index].quote}"
                </p>
              </div>

              <div className="flex items-center gap-5 pt-4 border-t border-primary/10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                   <span className="text-primary font-bold text-xl">{testimonials[index].author.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-satoshi font-bold text-lg tracking-tight text-foreground">
                    {testimonials[index].author}
                  </h4>
                  <p className="font-general text-sm text-muted-foreground uppercase tracking-widest">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls and Indicators */}
      <div className="flex flex-col items-center gap-8 mt-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 active:scale-95 group border border-primary/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </button>
          
          <div className="flex gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-8 bg-primary" : "w-1.5 bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 active:scale-95 group border border-primary/10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
}
