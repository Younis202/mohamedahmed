"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Eye,
  MessageSquare,
  Phone,
  Star,
  Trophy,
} from "lucide-react";

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

export default function ContactSection() {
  return (
    <div>
      {/* CONTACT/CTA SECTION */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50" />

          {/* Animated background */}
          <motion.div
            className="absolute inset-0 opacity-40"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 70%)",
                "radial-gradient(circle at 80% 80%, rgba(245, 101, 101, 0.12) 0%, transparent 70%)",
                "radial-gradient(circle at 60% 30%, rgba(236, 72, 153, 0.10) 0%, transparent 70%)",
                "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 70%)",
              ],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Decorative elements */}
          <motion.div
            className="absolute top-32 right-32 w-3 h-3 bg-orange-400 rounded-full opacity-50"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 left-32 w-2 h-2 bg-pink-400 rounded-full opacity-60"
            animate={{
              y: [0, -15, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm border border-orange-200/50 rounded-full shadow-lg"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
                <span className="text-gray-700 text-sm font-medium tracking-wide">
                  LET'S GET STARTED
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Ready to Transform
                <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  Your Space?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Let's bring your vision to life. Contact me today for a free
                consultation and discover how we can create something
                extraordinary together.
              </motion.p>
            </motion.div>

            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 lg:gap-8"
            >
              {[
                {
                  icon: Phone,
                  title: "Call Me",
                  info: "+2010XXXXXXXX",
                  description: "Available 24/7 for consultations",
                  gradient: "from-green-500 to-emerald-500",
                  bgGradient: "from-green-50 to-emerald-50",
                },
                {
                  icon: MessageSquare,
                  title: "WhatsApp",
                  info: "Quick Response",
                  description: "Instant messaging for quick questions",
                  gradient: "from-purple-500 to-pink-500",
                  bgGradient: "from-purple-50 to-pink-50",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`relative bg-white/90 backdrop-blur-sm border border-orange-100/50 rounded-3xl p-8 shadow-xl shadow-orange-500/10 overflow-hidden text-center`}
                  >
                    {/* Decorative gradient */}
                    <div
                      className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${contact.bgGradient} opacity-40 rounded-full blur-2xl`}
                    />

                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${contact.bgGradient} rounded-2xl shadow-lg mb-6 border border-white/60`}
                    >
                      <contact.icon />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {contact.title}
                      </h3>
                      <p
                        className={`font-semibold bg-gradient-to-r ${contact.gradient} bg-clip-text text-transparent`}
                      >
                        {contact.info}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {contact.description}
                      </p>
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Main CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-12 py-6 h-auto text-lg font-medium rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 transform hover:scale-105"
              >
                <MessageSquare className="mr-3 h-6 w-6" />
                Get Free Quote Now
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group text-gray-700 border-2 border-orange-300 hover:bg-orange-50 hover:border-orange-400 hover:text-orange-600 px-12 py-6 h-auto text-lg font-medium rounded-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm transform hover:scale-105"
              >
                <Eye className="mr-3 h-6 w-6" />
                View Full Portfolio
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-8 pt-12 text-gray-600"
            >
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
                <span className="font-medium">5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-orange-500" />
                <span className="font-medium">200+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-500" />
                <span className="font-medium">100% Satisfaction</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
