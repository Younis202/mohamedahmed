"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Award, Star, Trophy } from "lucide-react";

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

export default function AboutSection() {
  return (
    <div>
      {/*  ME SECTION (Brief version for home page) */}
      <section className="relative py-32 overflow-hidden">
        {/* Background matching your hero */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-amber-50/20" />

          {/* Floating background elements */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 25% 25%, rgba(251, 146, 60, 0.04) 0%, transparent 50%)",
                "radial-gradient(circle at 75% 75%, rgba(245, 101, 101, 0.03) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.02) 0%, transparent 50%)",
                "radial-gradient(circle at 25% 25%, rgba(251, 146, 60, 0.04) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Decorative elements matching hero */}
          <motion.div
            className="absolute top-32 right-32 w-2 h-2 bg-orange-400 rounded-full opacity-40"
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

        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-orange-200/50 rounded-full shadow-sm"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
                <span className="text-gray-700 text-sm font-medium tracking-wide">
                  ABOUT ME
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6 text-lg text-gray-600 leading-relaxed"
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
                  the right colors andfinishes can completely transform not just
                  a room, but how you feel in that space.
                </p>
              </motion.div>

              {/* Skills List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
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
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25"
                >
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative bg-white/70 backdrop-blur-xl border border-orange-100 rounded-3xl p-8 overflow-hidden shadow-xl shadow-orange-500/10"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/10 to-pink-400/5 rounded-full blur-2xl" />

                {/* Experience Stats */}
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    5+
                  </div>
                  <div className="text-gray-700 font-medium">
                    Years of Excellence
                  </div>
                </div>

                {/* Achievement Cards */}
                <div className="space-y-4">
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
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-white/40"
                    >
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <achievement.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {achievement.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Floating decoration */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-60"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
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
