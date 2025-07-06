"use client";

import { motion } from "framer-motion";
import { Award, Coffee, Sparkles, Star } from "lucide-react";

// Elegant, fast animations matching services page
const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function WhyChooseMeSection() {
  return (
    <div>
      {" "}
      {/* WHY CHOOSE ME SECTION */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50/15 via-orange-50/25 to-red-50/20" />

          {/* Animated background */}
          <motion.div
            className="absolute inset-0 opacity-15"
            animate={{
              background: [
                "radial-gradient(circle at 30% 20%, rgba(251, 146, 60, 0.04) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 80%, rgba(245, 101, 101, 0.03) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.02) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 20%, rgba(251, 146, 60, 0.04) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Decorative elements */}
          <motion.div
            className="absolute top-32 left-24 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-30"
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-orange-200/40 rounded-full shadow-sm"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
              <span className="text-gray-700 text-sm font-medium tracking-wide">
                WHY CHOOSE ME
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                key={`why-choose-feature-${feature.title}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`relative bg-white/70 backdrop-blur-sm border border-orange-100/40 rounded-2xl p-6 shadow-lg shadow-orange-500/8 overflow-hidden h-full text-center`}
                >
                  {/* Decorative gradient */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.bgGradient} opacity-20 rounded-full blur-2xl`}
                  />

                  {/* Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.bgGradient} rounded-2xl shadow-sm shadow-orange-500/8 backdrop-blur-sm border border-white/50 mb-4`}
                  >
                    <feature.icon className={`w-7 h-7 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>

                  {/* Floating decoration */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className={`absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-gradient-to-r ${feature.gradient} rounded-full opacity-50`}
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