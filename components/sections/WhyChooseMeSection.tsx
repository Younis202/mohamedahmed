"use client";

import { motion } from "framer-motion";
import { Award, Coffee, Sparkles, Star } from "lucide-react";

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

export default function WhyChooseMeSection() {
  return (
    <div>
      {" "}
      {/* WHY CHOOSE ME SECTION */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-orange-50/40 to-red-50/30" />

          {/* Animated background */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 30% 20%, rgba(251, 146, 60, 0.06) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 80%, rgba(245, 101, 101, 0.04) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.03) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 20%, rgba(251, 146, 60, 0.06) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Decorative elements */}
          <motion.div
            className="absolute top-32 left-24 w-2 h-2 bg-orange-400 rounded-full opacity-40"
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-orange-200/50 rounded-full shadow-sm"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
              <span className="text-gray-700 text-sm font-medium tracking-wide">
                WHY CHOOSE ME
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Excellence in
              <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Every Detail
              </span>
            </motion.h2>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              {
                icon: Star,
                title: "Quality Guarantee",
                description:
                  "100% satisfaction guaranteed with premium materials and expert craftsmanship",
                gradient: "from-yellow-400 to-orange-500",
                bgGradient: "from-yellow-50 to-orange-50",
              },
              {
                icon: Coffee,
                title: "Attention to Detail",
                description:
                  "Meticulous preparation and finishing ensure flawless results every time",
                gradient: "from-orange-500 to-red-500",
                bgGradient: "from-orange-50 to-red-50",
              },
              {
                icon: Award,
                title: "Professional Service",
                description:
                  "Reliable, punctual, and respectful service from consultation to completion",
                gradient: "from-red-500 to-pink-500",
                bgGradient: "from-red-50 to-pink-50",
              },
              {
                icon: Sparkles,
                title: "Creative Vision",
                description:
                  "Artistic expertise to bring your unique vision to life with stunning results",
                gradient: "from-pink-500 to-purple-500",
                bgGradient: "from-pink-50 to-purple-50",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`relative bg-white/80 backdrop-blur-sm border border-orange-100/50 rounded-3xl p-8 shadow-xl shadow-orange-500/10 overflow-hidden h-full text-center`}
                >
                  {/* Decorative gradient */}
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.bgGradient} opacity-30 rounded-full blur-2xl`}
                  />

                  {/* Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.bgGradient} rounded-2xl shadow-lg shadow-orange-500/10 backdrop-blur-sm border border-white/60 mb-6`}
                  >
                    <feature.icon />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Floating decoration */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className={`absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-r ${feature.gradient} rounded-full opacity-60`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
