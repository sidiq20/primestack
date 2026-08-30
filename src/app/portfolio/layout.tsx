import type { Metadata } from "next";

const baseUrl = "https://www.primestackwebsolutions.com";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Browse the portfolio of Prime Stack Web Solutions — a curated selection of web design, development, and branding projects delivered for clients across Nigeria.",
  keywords: [
    "web design portfolio Lagos",
    "website development portfolio Nigeria",
    "digital agency work",
    "client projects",
  ],
  alternates: {
    canonical: `${baseUrl}/portfolio`,
  },
  openGraph: {
    title: "Our Work | Prime Stack Web Solutions",
    description:
      "A curated selection of our most impactful web design and development projects.",
    url: `${baseUrl}/portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prime Stack Web Solutions Portfolio",
      },
    ],
  },
  twitter: {
    title: "Our Work | Prime Stack Web Solutions",
    description:
      "Explore our portfolio of web design and development projects.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
