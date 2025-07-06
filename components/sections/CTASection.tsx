"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Calendar,
  MessageSquare,
  Paintbrush,
  Phone,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";

// Simplified, elegant animations
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
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

export default function CTASection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201101138690', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+201101138690', '_blank');
  };

  const stats = [
    {
      icon: Users,
      number: "200+",
      label: "Happy Clients",
      gradient: "from-orange-400 to-red-500",
    },
    {
      icon: Star,
      number: "5.0",
      label: "Average Rating",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Award,
      number: "5+",
      label: "Years Experience",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: Paintbrush,
      number: "100%",
      label: "Satisfaction Rate",
      gradient: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-60"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 70%)",
              "radial-gradient(circle at 80% 80%, rgba(245, 101, 101, 0.12) 0%, transparent 70%)",
              "radial-gradient(circle at 60% 30%, rgba(168, 85, 247, 0.10) 0%, transparent 70%)",
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Decorative elements */}
        <motion.div
          className="absolute top-32 right-20 w-3 h-3 bg-orange-400 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-32 w-2 h-2 bg-pink-400 rounded-full opacity-50"
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/2 left-10 w-1 h-1 bg-yellow-400 rounded-full opacity-40"
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={slideInLeft}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-orange-300/30 rounded-full shadow-sm"
            >
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
              <span className="text-orange-200 text-sm font-medium tracking-wide">
                READY TO TRANSFORM YOUR SPACE?
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.9] tracking-tight">
                <span className="block">Let's Create</span>
                <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Something Amazing
                </span>
              </h2>

              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl">
                Your dream space is just one conversation away. Let's discuss
                your vision and bring it to life with professional
                craftsmanship.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={slideInLeft}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                onClick={handleCallClick}
                size="lg"
                variant="outline"
                className="group text-white border-white/30 hover:bg-white/10 hover:border-orange-300 hover:text-orange-300 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 bg-white/5 backdrop-blur-sm"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div
              variants={slideInLeft}
              className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange-300" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Call or WhatsApp</div>
                  <div className="text-white font-medium">+20 110 113 8690</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-green-300" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Available</div>
                  <div className="text-white font-medium">7 Days a Week</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl transform rotate-6"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative h-full rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://ik.imagekit.io/pcet3dvcu/ChatGPT%20Image%201%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%202025_%2001_40_25%20%D8%B5.png?updatedAt=1751323392914"
                  alt="Professional Painter at Work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Paintbrush className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">5+ Years</p>
                    <p className="text-sm text-gray-600">Experience</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-500">150+</p>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Urgency & Trust */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400/20 to-red-400/20 backdrop-blur-sm border border-orange-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-orange-300" />
                </div>
                <h4 className="text-white font-semibold mb-2">
                  Free Consultation
                </h4>
                <p className="text-gray-400 text-sm">
                  No obligation discussion about your project
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400/20 to-emerald-400/20 backdrop-blur-sm border border-green-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-green-300" />
                </div>
                <h4 className="text-white font-semibold mb-2">
                  Quality Guaranteed
                </h4>
                <p className="text-gray-400 text-sm">
                  100% satisfaction or we make it right
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-blue-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-blue-300" />
                </div>
                <h4 className="text-white font-semibold mb-2">
                  Quick Scheduling
                </h4>
                <p className="text-gray-400 text-sm">
                  Fast response and flexible timing
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-400/20 rounded-2xl p-6">
              <p className="text-orange-200 text-lg">
                <strong className="text-white">Limited Time:</strong> Book your
                consultation this month and get a
                <span className="text-orange-300 font-semibold">
                  {" "}
                  free color consultation
                </span>{" "}
                worth $50!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}