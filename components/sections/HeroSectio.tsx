"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Calendar,
  Eye,
  Linkedin,
  Mail,
  MessageSquare,
  Paintbrush,
  Phone,
  Star,
  Users,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from 'next/link'

// Refined, elegant animations
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

const slideInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const floatingAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function HeroSection() {

    const handleWhatsAppClick = () => {
    window.open('https://wa.me/201101138690', '_blank');
  };
  
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-transparent to-pink-100/30" />

        {/* Animated gradient blobs */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(245, 101, 101, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 60% 30%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.2) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Elegant floating particles */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-orange-400/60 rounded-full blur-sm"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-pink-400/50 rounded-full blur-sm"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 },
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/12 w-1 h-1 bg-yellow-400/40 rounded-full blur-sm"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 2 },
          }}
        />

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Enhanced Professional Badge */}
            <motion.div
              variants={slideInLeft}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/70 backdrop-blur-md border border-orange-200/50 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <motion.div 
                className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-gray-700 text-sm font-medium tracking-wider">
                MASTER CRAFTSMAN • PAINTING SPECIALIST
              </span>
              <Sparkles className="w-3 h-3 text-orange-500" />
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-[0.85] tracking-tight">
                <motion.span 
                  className="block text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Mohamed
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Ahmed
                </motion.span>
              </h1>

              <div className="space-y-4">
                <motion.p 
                  className="text-xl lg:text-2xl font-medium text-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Painting & Decoration Specialist
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-600 leading-relaxed max-w-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  Bringing vibrant colors and artistic vision to life. With over 5 years of passionate experience, I transform ordinary spaces into extraordinary masterpieces with precision and creativity.
                </motion.p>
              </div>
            </motion.div>

            {/* Enhanced Action Buttons */}
            <motion.div
              variants={slideInLeft}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                                  onClick={handleWhatsAppClick}

                  size="lg"
                  className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <MessageSquare className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10">Let's Talk</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href='/portfolio'
                  className="inline-flex items-center justify-center gap-2 text-gray-700 border border-gray-300 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 bg-white/70 backdrop-blur-sm hover:shadow-lg"
                >
                  <Eye className="h-5 w-5" />
                  View Portfolio
                </Link>
              </motion.div>
            </motion.div>

            {/* Enhanced Quick Contact Info */}
            <motion.div
              variants={slideInLeft}
              className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-orange-200/30"
            >
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-11 h-11 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5 text-orange-700" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">Call or WhatsApp</div>
                  <div className="text-gray-800 font-semibold">+20 110 113 8690</div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-11 h-11 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full flex items-center justify-center shadow-sm">
                  <Calendar className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">Available</div>
                  <div className="text-gray-800 font-semibold">7 Days a Week</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full">
              {/* Background decorative shape */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotate: 6 }}
                animate={{ scale: 1, opacity: 1, rotate: 6 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl shadow-2xl"
              />
              
              {/* Main image container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="relative h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
              >
                <Image
                  src="https://ik.imagekit.io/pcet3dvcu/ChatGPT%20Image%2026%20%D9%8A%D9%88%D9%86%D9%8A%D9%88%202025_%2008_24_31%20%D9%85.png?updatedAt=1750962759205"
                  alt="Professional Painter at Work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>

              {/* Enhanced Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-orange-200/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center shadow-inner">
                    <Paintbrush className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">5+ Years</p>
                    <p className="text-sm text-gray-600">Experience</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-orange-200/20"
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600">200+</p>
                  <p className="text-sm text-gray-600 font-medium">Happy Clients</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-24"
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: MessageSquare, title: "Free Consultation", desc: "Let's discuss your project vision", color: "from-orange-400/20 to-red-400/20 border-orange-400/30", iconColor: "text-orange-700" },
                { icon: Award, title: "Quality Work", desc: "Committed to excellence in every detail", color: "from-green-400/20 to-emerald-400/20 border-green-400/30", iconColor: "text-green-700" },
                { icon: Calendar, title: "Flexible Schedule", desc: "Available to work around your timeline", color: "from-blue-400/20 to-purple-400/20 border-blue-400/30", iconColor: "text-blue-700" },
              ].map((item, index) => (
                <motion.div
                  key={`hero-feature-${item.title}`}
                  className="text-center"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${item.color} backdrop-blur-sm border rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <h4 className="text-gray-800 font-semibold mb-2 text-lg">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-r from-orange-500/15 to-red-500/15 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-8 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-orange-500" />
                <span className="text-orange-700 font-semibold text-lg">My Passion</span>
                <Sparkles className="w-6 h-6 text-orange-500" />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Every wall tells a story, and I love being part of that story.{" "}
                <span className="text-orange-600 font-semibold bg-orange-100 px-2 py-1 rounded">
                  Your vision, my craft
                </span>{" "}
                - together we'll create something beautiful that you\'ll love for years to come.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}