import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2 space-y-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/p-logo.jpeg"
              alt="PrimeStack Logo"
              width={40}
              height={40}
              className="rounded-xl brightness-150"
            />
            <Logo mode="full" size="lg" />
          </Link>
          <p className="font-general text-gray-400 max-w-sm leading-relaxed">
            Crafting high-impact digital experiences for modern brands. We combine design excellence with technical precision to build legacies.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/20 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white/20 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white/20 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white/20 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-satoshi font-bold text-lg mb-6">Company</h4>
          <ul className="space-y-4 font-general text-gray-400">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-white transition-colors">Our Work</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-satoshi font-bold text-lg mb-6">Contact</h4>
          <ul className="space-y-4 font-general text-gray-400">
            <li>primestackwebsolutions@gmail.com</li>
            <li>+234 9129144158</li>
            <li>123 Digital Way, London</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500 font-general">
        <p>© 2026 PrimeStack Solutions Ltd. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
