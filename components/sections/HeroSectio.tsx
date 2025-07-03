"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Coffee,
  Eye,
  Linkedin,
  Mail,
  MessageSquare,
  Paintbrush,
  Phone,
  Star,
  Trophy,
} from "lucide-react";
import Image from "next/image";

// Simplified, elegant animations
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function HeroSection() {
  return (
    <div>
      {/* Refined Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />

          {/* Gentle floating gradient */}
          <motion.div
            className="absolute inset-0 opacity-60"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 70%)",
                "radial-gradient(circle at 80% 80%, rgba(245, 101, 101, 0.08) 0%, transparent 70%)",
                "radial-gradient(circle at 60% 30%, rgba(168, 85, 247, 0.06) 0%, transparent 70%)",
                "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 70%)",
              ],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Minimal decorative elements */}
          <motion.div
            className="absolute top-32 right-20 w-2 h-2 bg-orange-400 rounded-full opacity-40"
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-30"
            animate={{
              y: [0, -12, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="relative w-full">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-screen py-20">
              {/* Left Content */}
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="space-y-8"
              >
                {/* Professional Badge */}
                <motion.div
                  variants={slideInLeft}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full shadow-sm"
                >
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
                  <span className="text-gray-700 text-sm font-medium tracking-wide">
                    MASTER CRAFTSMAN • PAINTING SPECIALIST
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.div variants={fadeInUp} className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight">
                    <span className="block">Mohamed</span>
                    <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                      Ahmed
                    </span>
                  </h1>

                  <div className="space-y-4">
                    <p className="text-xl lg:text-2xl text-gray-700 font-medium">
                      Painting & Decoration Specialist
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                      Bringing vibrant colors and artistic vision to life. With
                      over 5 years of passionate experience, I transform
                      ordinary spaces into extraordinary masterpieces with
                      precision and creativity.
                    </p>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  variants={slideInLeft}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="group text-gray-700 border-gray-300 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 bg-white/60 backdrop-blur-sm"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    View Portfolio
                  </Button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  variants={slideInLeft}
                  className="flex items-center gap-6 pt-8"
                >
                  <span className="text-gray-600 text-sm font-medium">
                    Connect with me:
                  </span>
                  <div className="flex gap-4">
                    {[
                      {
                        icon: Mail,
                        color:
                          "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300",
                      },
                      {
                        icon: Phone,
                        color:
                          "hover:bg-green-50 hover:text-green-600 hover:border-green-300",
                      },
                      {
                        icon: Linkedin,
                        color:
                          "hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300",
                      },
                    ].map((social, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 shadow-sm ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                initial="initial"
                animate="animate"
                variants={slideInRight}
                className="relative"
              >
                {/* Main Profile Card */}
                <div className="relative">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative bg-white/70 backdrop-blur-xl border border-orange-100 rounded-3xl p-8 overflow-hidden shadow-xl shadow-orange-500/10"
                  >
                    {/* Subtle decorative gradient */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/10 to-pink-400/5 rounded-full blur-2xl" />

                    {/* Profile Image */}
                    <div className="relative mb-8">
                      <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 p-1 shadow-lg">
                        <div className="w-full h-full bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl flex items-center justify-center">
                          <Paintbrush className="w-16 h-16 text-orange-500" />
                        </div>
                      </div>

                      {/* Simple badge */}
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
                        5+ Years
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        {
                          icon: Trophy,
                          number: "200+",
                          label: "Projects",
                          gradient: "from-yellow-400 to-orange-500",
                          bg: "bg-gradient-to-br from-yellow-50 to-orange-50",
                        },
                        {
                          icon: Star,
                          number: "100%",
                          label: "Satisfaction",
                          gradient: "from-purple-400 to-pink-500",
                          bg: "bg-gradient-to-br from-purple-50 to-pink-50",
                        },
                        {
                          icon: Award,
                          number: "5+",
                          label: "Years Exp",
                          gradient: "from-blue-400 to-indigo-500",
                          bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
                        },
                        {
                          icon: Coffee,
                          number: "∞",
                          label: "Passion",
                          gradient: "from-green-400 to-emerald-500",
                          bg: "bg-gradient-to-br from-green-50 to-emerald-50",
                        },
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.8 + index * 0.1,
                          }}
                          whileHover={{ scale: 1.02 }}
                          className={`text-center p-4 ${stat.bg} rounded-xl border border-white/40 shadow-sm backdrop-blur-sm`}
                        >
                          <stat.icon
                            className={`w-6 h-6 mx-auto mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                          />
                          <div className="text-xl font-bold text-gray-800">
                            {stat.number}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Floating badges with subtle animation */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                >
                  ✨ Available for Projects
                </motion.div>

                <Image
                  src="https://ik.imagekit.io/pcet3dvcu/ChatGPT%20Image%2026%20%D9%8A%D9%88%D9%86%D9%8A%D9%88%202025_%2008_24_31%20%D9%85.png?updatedAt=1750962759205"
                  alt={""}
                  width={450}
                  height={450}
                  className="absolute top-[82px] -left-[300px]"
                />

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm shadow-lg"
                >
                  🎨 Quality Guaranteed
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Subtle scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs font-medium">Scroll to explore</span>
            <div className="w-0.5 h-6 bg-gradient-to-b from-orange-400 to-pink-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
