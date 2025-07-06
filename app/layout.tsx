import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import CTASection from "@/components/sections/CTASection";


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Professional Painting & Decoration Services',
  description: 'Transform your space with our expert painting and decoration services. Over 5 years of experience in creating beautiful interiors and exteriors.',
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