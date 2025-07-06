import Navigation from "@/components/Navigation";
import CTASection from "@/components/sections/CTASection";
import { AnimatePresence } from "framer-motion";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Professional Painting & Decoration Services",
  description:
    "Transform your space with our expert painting and decoration services. Over 5 years of experience in creating beautiful interiors and exteriors.",
  openGraph: {
    title: "Professional Painting & Decoration Services",
    description:
      "Transform your space with our expert painting and decoration services. Over 5 years of experience in creating beautiful interiors and exteriors.",
    url: "https://mohamedahmedboya.vercel.app/",
    siteName: "Mohamed Ahmed",
    images: [
      {
        url: "https://ik.imagekit.io/pcet3dvcu/Screenshot%20(124).png?updatedAt=1751830339861",
        width: 1200,
        height: 630,
        alt: "Mohamed Ahmed - Professional Painting & Decoration Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navigation />
        <AnimatePresence mode="wait">
          {children}
          <CTASection />
        </AnimatePresence>
      </body>
    </html>
  );
}
