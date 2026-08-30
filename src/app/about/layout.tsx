import type { Metadata } from "next";

const baseUrl = "https://www.primestackwebsolutions.com";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Prime Stack Web Solutions — a Lagos-based digital agency founded in 2026, delivering expert web design, software development, and brand identity across Nigeria.",
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: "About Us | Prime Stack Web Solutions",
    description:
      "Meet the team behind Prime Stack Web Solutions. We combine design excellence with technical precision to build digital legacies.",
    url: `${baseUrl}/about`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Prime Stack Web Solutions",
      },
    ],
  },
  twitter: {
    title: "About Us | Prime Stack Web Solutions",
    description:
      "Meet the team behind Prime Stack Web Solutions — Lagos, Nigeria.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
