"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/loading-screen";
import { Inter, Syne, DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne-google",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans-google",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces-google",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem("primestack_v2_seen");
    if (hasSeenAnimation) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("primestack_v2_seen", "true");
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,700,900&f[]=general-sans@200,300,400,500,600,700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body
        className={`${inter.variable} ${syne.variable} ${dmSans.variable} ${fraunces.variable} antialiased`}
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loader" onComplete={handleLoadingComplete} />
          ) : (
            <div key="content" className="animate-in fade-in duration-1000">
              {children}
            </div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
