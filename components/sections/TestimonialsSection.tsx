"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Phone, Star } from "lucide-react";
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

const testimonials = [
  {

      text: "Mohamed's attention to detail is extraordinary. He transformed our living space into something we never imagined possible. His artistic vision is truly remarkable.",
    rating: 5,
  },
  {

    text: "Working with Mohamed was seamless. His professionalism and craftsmanship are unmatched. I've recommended him to all my friends and family.",
    rating: 5,
  },
  {
     text: "As someone who's particular about design, Mohamed exceeded all my expectations. His work is absolutely perfect and his passion truly shows.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <div>
      {" "}
      {/* Testimonials Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background matching hero */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-red-50/40 via-orange-50/30 to-pink-50/20" />

          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 30%, rgba(251, 146, 60, 0.06) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 70%, rgba(245, 101, 101, 0.04) 0%, transparent 50%)",
                "radial-gradient(circle at 60% 40%, rgba(236, 72, 153, 0.03) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 30%, rgba(251, 146, 60, 0.06) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating decorative elements matching hero */}
          <motion.div
            className="absolute top-32 left-24 w-2 h-2 bg-orange-400 rounded-full opacity-40"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 right-32 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-50"
            animate={{
              y: [0, -12, 0],
              opacity: [0.5, 0.9, 0.5],
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
                CLIENT TESTIMONIALS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              What Clients
              <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Are Saying
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Don't just take my word for it. Here's what some of my satisfied
              clients have to say about their experience working with me.
            </motion.p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative bg-white/80 backdrop-blur-sm border border-orange-100/50 rounded-3xl p-8 shadow-xl shadow-orange-500/10 overflow-hidden h-full"
                >
                  {/* Decorative gradient matching hero */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/8 to-pink-400/5 rounded-full blur-2xl" />

                  {/* Quote Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-orange-50 to-red-50 rounded-full flex items-center justify-center shadow-sm"
                  >
                    <MessageSquare className="w-6 h-6 text-orange-500" />
                  </motion.div>

                  {/* Stars Rating */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-1 mb-6"
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.5 + index * 0.1 + i * 0.05,
                          ease: "backOut",
                        }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-700 leading-relaxed mb-8 text-base"
                  >
                    {testimonial.text}
                  </motion.p>

                  {/* Floating decoration matching hero */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-40"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Ready to Join These Happy Clients?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Let's create something amazing together. Your satisfaction is my
                priority, and I'm committed to exceeding your expectations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Get Your Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group text-gray-700 border-gray-300 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 bg-white/60 backdrop-blur-sm"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
