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

const baseUrl = "https://www.primestackwebsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Prime Stack Web Solutions | Web Design, Development & Digital Security",
    template: "%s | Prime Stack Web Solutions",
  },
  description: "Prime Stack Web Solutions is a premium digital agency offering expert web design, software development, brand identity, and website security. Based in Lagos, Nigeria, we elevate modern brands with high-performing digital experiences.",
  keywords: ["web design Lagos", "software development Nigeria", "website security experts", "premium digital agency", "brand identity", "UI/UX design", "social media strategy", "custom web development", "startup websites", "SEO optimization"],
  authors: [{ name: "Prime Stack Web Solutions", url: baseUrl }],
  creator: "Prime Stack Web Solutions",
  publisher: "Prime Stack Web Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      "en-US": baseUrl,
    },
  },
  openGraph: {
    title: "Prime Stack Web Solutions | Web Design, Development & Digital Security",
    description: "Expert web design, software development, and digital security. We combine design excellence with technical precision to build legacies.",
    url: baseUrl,
    siteName: "Prime Stack Web Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prime Stack Web Solutions - Premium Digital Agency",
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
  verification: {
    google: "Xy6UhtD6rGJF5xzV5oeINH7KC73ck8OXoMNvEkgjPqI",
  },
  icons: {
    icon: "/p-logo.jpeg",
    shortcut: "/p-logo.jpeg",
    apple: "/p-logo.jpeg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Prime Stack Web Solutions",
  description:
    "Premium digital agency offering expert web design, software development, brand identity, and website security.",
  url: baseUrl,
  logo: `${baseUrl}/p-logo.jpeg`,
  image: `${baseUrl}/og-image.png`,
  email: "primestackwebsolutions@gmail.com",
  telephone: "+2349129144158",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.5244,
    longitude: 3.3792,
  },
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  sameAs: [
    "https://www.instagram.com/primestackws_",
    "https://x.com/primestackws_",
    "https://www.linkedin.com/in/prime-stack-web-solutions-a676b53a4",
  ],
  foundingDate: "2026-01-01",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 5,
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,700,900&f[]=general-sans@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <noscript>
          <link
            href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,700,900&f[]=general-sans@200,300,400,500,600,700&display=swap"
            rel="stylesheet"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
