"use client";

"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { MissionVision } from "@/components/mission-vision";
import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Faleke Emmanuel Ayomide",
    role: "Founder & Visionary",
    bio: "The driving force behind PrimeStack, dedicated to delivering peak results through collaboration.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974",
  },
  {
    name: "Famade Eniola",
    role: "Strategy & Refinement",
    bio: "Translating vision into actionable strategy and ensuring excellence in every project.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974",
  },
  {
    name: "Daniel Gbolahun",
    role: "Technical Expertise",
    bio: "Bringing deep technical knowledge and creative problem-solving to complex digital builds.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974",
  },
  {
    name: "Samuel Emmanuel",
    role: "Creative Direction",
    bio: "Infusing fresh perspectives and visual excellence into the PrimeStack ecosystem.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2340",
  },
  {
    name: "Sidiq Olasode",
    role: "Assistant Technical Lead",
    bio: "Supporting the technical vision and ensuring high standards in execution and system architecture.",
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
            Our <span className="text-gradient">Story</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-general text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            PrimeStack Web Solutions: Built on trust, skill, and a passion for delivering peak results.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-clash text-4xl md:text-5xl font-bold text-white">How it started</h2>
              <div className="font-general text-muted-foreground text-lg leading-relaxed space-y-6">
                <p>
                  PrimeStack Web Solutions was born in late 2025 and officially launched in January 2026 with a simple mission: to showcase talent and deliver peak results through collaboration and innovation.
                </p>
                <p>
                  The idea started with Faleke Emmanuel Ayomide and was refined by Famade Eniola. Daniel Gbolahun and Samuel Emmanuel joined soon after, bringing the technical and creative expertise needed to form a team built for excellence.
                </p>
                <p className="text-white font-medium italic">
                  "Prime" represents our drive to operate at our best, while "Stack" represents how we combine ideas, design, and technology.
                </p>
              </div>
            </div>
            <div className="relative aspect-video rounded-[3rem] overflow-hidden glass border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-99bc2f41a044?auto=format&fit=crop&q=80&w=2340" 
                alt="PrimeStack Team Collaboration" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
          </div>

          <MissionVision />

          {/* Approach Section */}
          <div className="py-24 rounded-[4rem] bg-white/[0.02] border border-white/5 p-8 md:p-20 text-center space-y-12">
            <h2 className="font-clash text-4xl md:text-6xl font-bold text-white">Our Approach & Values</h2>
            <p className="font-general text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              At PrimeStack, quality starts with clarity. We listen to your needs, communicate openly, and transform ideas into results that work.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {['Quality', 'Speed', 'Transparency', 'Client Care'].map((value) => (
                <div key={value} className="space-y-2">
                  <div className="h-0.5 bg-primary/30 w-full mb-4" />
                  <p className="font-satoshi font-black uppercase tracking-widest text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="font-clash text-4xl md:text-6xl font-bold text-white">The Brains <span className="italic font-fraunces">Behind</span> the Team</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="space-y-6 group">
                  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden glass border-white/10">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6">
                       <p className="font-clash text-xs font-bold uppercase tracking-widest text-primary mb-1">{member.role}</p>
                       <h4 className="font-satoshi font-bold text-xl text-white">{member.name}</h4>
                    </div>
                  </div>
                  <p className="font-general text-sm text-muted-foreground leading-relaxed px-2">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
