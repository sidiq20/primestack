"use client";

"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { MissionVision } from "@/components/mission-vision";
import Image from "next/image";
import { motion } from "framer-motion";
import { Logo } from "@/components/logo";

const team = [
  {
    name: "Faleke Emmanuel Ayomide",
    initials: "FEA",
    role: "CEO & Website Security Lead",
    bio: "I keep every website we deliver safe and secure, protecting client data while supporting high-performing, reliable digital solutions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974",
  },
  {
    name: "Famade Eniola",
    role: "Lead Technical Developer",
    bio: "I translates design into high-performing modern user focused web applications while ensuring scalability, reliability, and clean architecture across the stack.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974",
  },
  {
    name: "Daniel Gbolahan",
    role: "Creative director",
    bio: "I shape creative direction from concept to execution. As a strategy-driven, detail-oriented graphic designer, I translate ideas into visually compelling, brand-focused designs.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974",
  },
  {
    name: "Samuel Emmanuel",
    role: "Social Media Manager",
    bio: "I lead our digital storytelling and online presence, creating engaging content and strategies that connect our audience to the brand.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2340",
  },
  {
    name: "Sidiq Olasode",
    role: "Assistant Technical Developer",
    bio: "I support the technical vision, bringing precision to our codebase and ensuring high standards in execution and system architecture for a robust digital experience.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1974",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-clash text-5xl md:text-8xl font-bold tracking-tight text-white"
          >
            Our Story
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="flex justify-center mb-4">
              <Logo mode="full" size="lg" className="items-center" />
            </div>
            <p className="font-general text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Built on trust, skill, and a passion for delivering peak results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-clash text-4xl md:text-5xl font-bold text-white">How it started</h2>
              <div className="font-general text-white/40 text-lg leading-relaxed space-y-6">
                <p>
                  Our team was born in late 2025 and officially launched in January 2026 with a simple mission: to showcase talent and deliver peak results through collaboration and innovation.
                </p>
                <p>
                  The idea started with Faleke Emmanuel Ayomide and was refined by Famade Eniola. Daniel Gbolahun and Samuel Emmanuel joined soon after, bringing the technical and creative expertise needed to form a team built for excellence.
                </p>
                <p className="text-white font-medium italic">
                  "Prime" represents our drive to operate at our best, while "Stack" represents how we combine ideas, design, and technology.
                </p>
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
              <Image 
                src="/hero-sec-logo.jpeg" 
                alt="PrimeStack Solutions Team Collaboration" 
                fill
                className="object-cover"
              />
            </div>
          </div>

          <MissionVision />

          {/* Approach Section */}
          <div className="py-24 rounded-3xl border border-white/5 p-8 md:p-20 text-center space-y-12">
            <h2 className="font-clash text-4xl md:text-6xl font-bold text-white">Our Approach & Values</h2>
            <div className="flex justify-center scale-150 mb-12">
              <Logo mode="full" size="md" className="items-center" />
            </div>
            <p className="font-general text-white/40 text-lg md:text-xl max-w-3xl mx-auto">
              Quality starts with clarity. We listen to your needs, communicate openly, and transform ideas into results that work.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {['Quality', 'Speed', 'Transparency', 'Client Care'].map((value) => (
                <div key={value} className="space-y-2">
                  <div className="h-px bg-white/10 w-full mb-4" />
                  <p className="font-satoshi font-black uppercase tracking-widest text-white/60">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="space-y-16 overflow-hidden max-w-[100vw]">
            <div className="text-center space-y-4">
              <h2 className="font-clash text-4xl md:text-6xl font-bold text-white">The Brains Behind the Team</h2>
            </div>
            
            <div className="relative flex w-full">
              <motion.div 
                className="flex gap-8 w-max pr-8"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              >
                {[...team, ...team].map((member, index) => (
                  <div key={index} className="space-y-6 group flex-shrink-0 w-[280px] sm:w-[320px]">
                    <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-7xl font-satoshi font-bold tracking-tighter text-white/10 group-hover:text-white/20 transition-colors duration-700">
                          {/* @ts-ignore */}
                          {member.initials || member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-0 right-0 z-10 text-center flex flex-col items-center px-2">
                         <p className="font-satoshi text-[11px] font-bold uppercase tracking-widest text-primary mb-3 drop-shadow-sm">{member.role}</p>
                         <div className="rounded-full px-5 py-2 bg-black/40 backdrop-blur-md border border-white/10 w-fit max-w-[90%]">
                           <h4 className="font-clash font-medium text-lg leading-tight text-white drop-shadow-md text-balance">{member.name}</h4>
                         </div>
                      </div>
                    </div>
                    <p className="font-satoshi text-base font-medium text-white/80 leading-relaxed px-2 text-center md:text-left h-auto pb-4">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
