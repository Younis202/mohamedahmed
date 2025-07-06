"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Award, Star, Trophy } from "lucide-react";
import Link from "next/link";

// Elegant, fast animations matching services page
const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutSection() {
  return (
    <div>
      {/*  ME SECTION (Brief version for home page) */}
      <section className="relative py-24 overflow-hidden">
        {/* Background matching your hero */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/20 to-amber-50/15" />

          {/* Floating background elements */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 25% 25%, rgba(251, 146, 60, 0.03) 0%, transparent 50%)",
                "radial-gradient(circle at 75% 75%, rgba(245, 101, 101, 0.02) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.015) 0%, transparent 50%)",
                "radial-gradient(circle at 25% 25%, rgba(251, 146, 60, 0.03) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Decorative elements matching hero */}
          <motion.div
            className="absolute top-32 right-32 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-30"
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 left-32 w-1 h-1 bg-pink-400 rounded-full opacity-25"
            animate={{
              y: [0, -8, 0],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </div>

        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-orange-200/40 rounded-full shadow-sm"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
                <span className="text-gray-700 text-sm font-medium tracking-wide">
                  ABOUT ME
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Passionate About
                <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  Perfect Finishes
                </span>
              </motion.h2>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4 text-lg text-gray-600 leading-relaxed"
              >
                <p>
                  With over 5 years of dedicated experience in painting and
                  decoration, I've had the privilege of transforming hundreds of
                  spaces across Egypt. My journey began with a simple passion
                  for color and has evolved into a commitment to artistic
                  excellence.
                </p>
                <p>
                  Every project I undertake is more than just a job—it's an
                  opportunity to bring someone's vision to life. I believe that
                  the right colors and finishes can completely transform not just
                  a room, but how you feel in that space.
                </p>
              </motion.div>

              {/* Skills List */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3"
              >
                {[
                  "Interior Painting",
                  "Decorative Finishes",
                  "Wallpaper Installation",
                  "Color Consultation",
                  "Texture Application",
                  "Premium Coatings",
                ].map((skill, index) => (
                  <motion.div
                    key={`about-skill-${skill}`}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="pt-2"
              >
                <Link href="/about">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
                  >
                    Learn More About Me
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative bg-white/60 backdrop-blur-xl border border-orange-100/60 rounded-3xl p-6 overflow-hidden shadow-lg shadow-orange-500/8"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/8 to-pink-400/4 rounded-full blur-2xl" />

                {/* Experience Stats */}
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    5+
                  </div>
                  <div className="text-gray-700 font-medium">
                    Years of Excellence
                  </div>
                </div>

                {/* Achievement Cards */}
                <div className="space-y-3">
                  {[
                    {
                      icon: Trophy,
                      text: "200+ Completed Projects",
                      color: "from-yellow-400 to-orange-500",
                    },
                    {
                      icon: Star,
                      text: "100% Client Satisfaction",
                      color: "from-purple-400 to-pink-500",
                    },
                    {
                      icon: Award,
                      text: "Premium Quality Assured",
                      color: "from-blue-400 to-indigo-500",
                    },
                  ].map((achievement, index) => (
                    <motion.div
                      key={`about-achievement-${achievement.text}`}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-white/40"
                    >
                      <div
                        className={`w-8 h-8 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center shadow-sm`}
                      >
                        <achievement.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">
                        {achievement.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Floating decoration */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-50"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-md"
              >
                ✨ Expert Craftsman
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}