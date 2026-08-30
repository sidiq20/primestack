import type { Metadata } from "next";

const baseUrl = "https://www.primestackwebsolutions.com";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Prime Stack Web Solutions. Based in Lagos, Nigeria — email us at primestackwebsolutions@gmail.com or call +234 9129144158 for web design and development inquiries.",
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    title: "Contact Us | Prime Stack Web Solutions",
    description:
      "Have a project in mind? Reach out to Prime Stack Web Solutions in Lagos, Nigeria.",
    url: `${baseUrl}/contact`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Prime Stack Web Solutions",
      },
    ],
  },
  twitter: {
    title: "Contact Us | Prime Stack Web Solutions",
    description:
      "Get in touch for web design and development inquiries — Lagos, Nigeria.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
