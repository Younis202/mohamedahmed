"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Phone, Star } from "lucide-react";

// Elegant, fast animations matching services page
const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const testimonials = [
  {
    id: "testimonial-1",
    text: "Mohamed's attention to detail is extraordinary. He transformed our living space into something we never imagined possible. His artistic vision is truly remarkable.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    text: "Working with Mohamed was seamless. His professionalism and craftsmanship are unmatched. I've recommended him to all my friends and family.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    text: "As someone who's particular about design, Mohamed exceeded all my expectations. His work is absolutely perfect and his passion truly shows.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201101138690', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+201101138690', '_blank');
  };

  return (
    <div>
      {" "}
      {/* Testimonials Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background matching hero */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-red-50/30 via-orange-50/20 to-pink-50/15" />

          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 30%, rgba(251, 146, 60, 0.04) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 70%, rgba(245, 101, 101, 0.03) 0%, transparent 50%)",
                "radial-gradient(circle at 60% 40%, rgba(236, 72, 153, 0.02) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 30%, rgba(251, 146, 60, 0.04) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating decorative elements matching hero */}
          <motion.div
            className="absolute top-32 left-24 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-30"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 right-32 w-1 h-1 bg-pink-400 rounded-full opacity-40"
            animate={{
              y: [0, -8, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
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
                CLIENT TESTIMONIALS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              What Clients
              <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Are Saying
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Don't just take my word for it. Here's what some of my satisfied
              clients have to say about their experience working with me.
            </motion.p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative bg-white/70 backdrop-blur-sm border border-orange-100/40 rounded-2xl p-6 shadow-lg shadow-orange-500/8 overflow-hidden h-full"
                >
                  {/* Decorative gradient matching hero */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/6 to-pink-400/3 rounded-full blur-2xl" />

                  {/* Quote Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-orange-50 to-red-50 rounded-full flex items-center justify-center shadow-sm"
                  >
                    <MessageSquare className="w-5 h-5 text-orange-500" />
                  </motion.div>

                  {/* Stars Rating */}
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex gap-1 mb-4"
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={`${testimonial.id}-star-${i}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.4 + index * 0.05 + i * 0.03,
                          ease: "backOut",
                        }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="text-gray-700 leading-relaxed mb-6 text-base"
                  >
                    {testimonial.text}
                  </motion.p>

                  {/* Floating decoration matching hero */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-30"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16 space-y-6"
          >
            <div className="space-y-3">
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
                onClick={handleWhatsAppClick}
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Get Your Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                onClick={handleCallClick}
                size="lg"
                variant="outline"
                className="group text-gray-700 border-gray-300 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm"
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