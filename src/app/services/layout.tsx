import type { Metadata } from "next";

const baseUrl = "https://www.primestackwebsolutions.com";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our digital services: website design & development, redesign & modernization, website audit & optimization, and brand identity & visual design by Prime Stack Web Solutions.",
  keywords: [
    "web design services Lagos",
    "website development Nigeria",
    "website redesign",
    "website audit",
    "brand identity design",
    "digital agency services",
  ],
  alternates: {
    canonical: `${baseUrl}/services`,
  },
  openGraph: {
    title: "Our Services | Prime Stack Web Solutions",
    description:
      "From website design to brand identity — explore the full range of digital services we offer.",
    url: `${baseUrl}/services`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prime Stack Web Solutions Services",
      },
    ],
  },
  twitter: {
    title: "Our Services | Prime Stack Web Solutions",
    description:
      "Web design, development, audit, and brand identity services in Lagos, Nigeria.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
