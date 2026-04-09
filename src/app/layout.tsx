import type { Metadata } from "next";
import { Inter, Syne, DM_Sans, Fraunces } from "next/font/google";
import { AppWrapper } from "@/components/app-wrapper";
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

export const metadata: Metadata = {
  title: {
    default: "PrimeStack Web Solutions | Premium Digital Agency",
    template: "%s | PrimeStack Web Solutions",
  },
  description: "Crafting high-impact digital experiences for modern brands. We combine design excellence with technical precision to build legacies.",
  keywords: ["web design", "digital agency", "brand identity", "web development", "UI/UX design", "social media strategy", "Lagos digital agency"],
  authors: [{ name: "PrimeStack Web Solutions" }],
  creator: "PrimeStack Web Solutions",
  publisher: "PrimeStack Web Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "PrimeStack Web Solutions | Premium Digital Agency",
    description: "Crafting high-impact digital experiences for modern brands. We combine design excellence with technical precision to build legacies.",
    url: "https://primestackws.com", // update with real URL if known
    siteName: "PrimeStack Web Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PrimeStack Web Solutions - Premium Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeStack Web Solutions | Premium Digital Agency",
    description: "Crafting high-impact digital experiences for modern brands.",
    creator: "@primestackws_",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/p-logo.jpeg",
    shortcut: "/p-logo.jpeg",
    apple: "/p-logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
