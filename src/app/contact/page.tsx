"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-40 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 ">
            {/* Contact Info */}
            <div className="flex-1 space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <Logo mode="full" size="lg" />
                </div>
                <h1 className="font-clash text-5xl md:text-7xl font-bold tracking-tight">
                  Let's <span className="text-gradient italic font-fraunces">connect</span>
                </h1>
                <p className="font-general text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Have a project in mind or just want to say hello? We're here to help you build something extraordinary.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-satoshi font-bold text-lg">Email us</h4>
                    <p className="font-general text-muted-foreground">primestackwebsolutions@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-satoshi font-bold text-lg">Call us</h4>
                    <p className="font-general text-muted-foreground">+234 9129144158</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-satoshi font-bold text-lg">Visit us</h4>
                    <p className="font-general text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 space-y-6">
                <h4 className="font-satoshi font-bold text-lg">Follow our journey</h4>
                <div className="flex items-center gap-6">
                  <Link href="https://www.instagram.com/primestackws_?" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-2xl hover:bg-primary hover:text-white transition-colors">
                    <Instagram className="w-6 h-6" />
                  </Link>
                  <Link href="https://x.com/primestackws_" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-2xl hover:bg-primary hover:text-white transition-colors">
                    <Twitter className="w-6 h-6" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/prime-stack-web-solutions-a676b53a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-2xl hover:bg-primary hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Action */}
            <div className="flex-1 glass rounded-[3rem] p-8 md:p-12 border-white/10 shadow-2xl flex flex-col justify-center items-center text-center space-y-6">
              <h2 className="font-clash text-3xl md:text-5xl font-bold">Ready to start?</h2>
              <p className="font-general text-muted-foreground text-lg pb-4">
                Send us an email directly and we'll get back to you within 24-48 hours.
              </p>
              <Link href="mailto:primestackwebsolutions@gmail.com" className="w-full">
                <Button className={cn(buttonVariants({ size: "lg" }), "w-full rounded-2xl h-14 font-satoshi font-bold text-lg transition-all hover:scale-[1.02]")}>
                  Email Us Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
