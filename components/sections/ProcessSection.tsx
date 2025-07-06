"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Hammer,
  MessageSquare,
  Paintbrush,
  Palette,
  Phone,
  Search,
} from "lucide-react";

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

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProcessSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201101138690', '_blank');
  };

  const steps = [
    {
      step: "01",
      icon: Phone,
      title: "Initial Consultation",
      description:
        "We discuss your vision, requirements, and budget to understand your project needs perfectly.",
      duration: "1 Day",
      gradient: "from-orange-400 to-red-500",
      bg: "from-orange-50 to-red-50",
      iconBg: "from-orange-100 to-red-100",
    },
    {
      step: "02",
      icon: Search,
      title: "Site Assessment",
      description:
        "Thorough inspection of surfaces, measuring spaces, and identifying any preparation work needed.",
      duration: "1-2 Days",
      gradient: "from-purple-400 to-pink-500",
      bg: "from-purple-50 to-pink-50",
      iconBg: "from-purple-100 to-pink-100",
    },
    {
      step: "03",
      icon: Palette,
      title: "Color & Design Planning",
      description:
        "Professional color consultation and creating detailed project plan with timeline and materials.",
      duration: "2-3 Days",
      gradient: "from-blue-400 to-indigo-500",
      bg: "from-blue-50 to-indigo-50",
      iconBg: "from-blue-100 to-indigo-100",
    },
    {
      step: "04",
      icon: Hammer,
      title: "Surface Preparation",
      description:
        "Professional cleaning, sanding, filling, and priming to ensure perfect paint adhesion.",
      duration: "1-3 Days",
      gradient: "from-green-400 to-emerald-500",
      bg: "from-green-50 to-emerald-50",
      iconBg: "from-green-100 to-emerald-100",
    },
    {
      step: "05",
      icon: Paintbrush,
      title: "Professional Painting",
      description:
        "Skilled application using premium materials and techniques for a flawless, long-lasting finish.",
      duration: "3-7 Days",
      gradient: "from-yellow-400 to-orange-500",
      bg: "from-yellow-50 to-orange-50",
      iconBg: "from-yellow-100 to-orange-100",
    },
    {
      step: "06",
      icon: CheckCircle,
      title: "Quality Check & Handover",
      description:
        "Final inspection, touch-ups, cleanup, and walkthrough to ensure your complete satisfaction.",
      duration: "1 Day",
      gradient: "from-red-400 to-pink-500",
      bg: "from-red-50 to-pink-50",
      iconBg: "from-red-100 to-pink-100",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/25 via-amber-50/20 to-yellow-50/15" />

        {/* Gentle floating gradient */}
        <motion.div
          className="absolute inset-0 opacity-25"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(251, 146, 60, 0.05) 0%, transparent 70%)",
              "radial-gradient(circle at 80% 70%, rgba(245, 101, 101, 0.04) 0%, transparent 70%)",
              "radial-gradient(circle at 40% 90%, rgba(168, 85, 247, 0.03) 0%, transparent 70%)",
              "radial-gradient(circle at 20% 30%, rgba(251, 146, 60, 0.05) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Decorative elements */}
        <motion.div
          className="absolute top-32 right-20 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-30"
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
        {/* Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-orange-200/40 rounded-full shadow-sm mb-6"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
            <span className="text-gray-700 text-sm font-medium tracking-wide">
              HOW I WORK
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
          >
            My{" "}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Professional
            </span>{" "}
            Process
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From initial consultation to final touch-ups, I follow a proven
            process that ensures exceptional results every time.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={`process-step-${step.step}-${step.title}`}
              variants={slideInLeft}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-16 w-0.5 h-12 bg-gradient-to-b from-orange-200 to-pink-200 z-0" />
                )}

                <div className="relative bg-white/60 backdrop-blur-xl border border-orange-100/40 rounded-2xl p-6 shadow-lg shadow-orange-500/5 hover:shadow-lg hover:shadow-orange-500/8 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    {/* Step Number & Icon */}
                    <div className="flex flex-col items-center space-y-3">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${step.iconBg} rounded-2xl flex items-center justify-center shadow-sm`}
                      >
                        <step.icon
                          className={`w-7 h-7 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                        />
                      </div>
                      <span
                        className={`text-sm font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                      >
                        {step.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {step.title}
                        </h3>
                        <div className="flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                          <Clock className="w-3.5 h-3.5" />
                          {step.duration}
                        </div>
                      </div>

                      <p className="text-gray-600 text-base leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Process Flow Arrow */}
                      {index < steps.length - 1 && (
                        <div className="flex items-center gap-2 text-orange-500">
                          <span className="text-sm font-medium">Next Step</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 shadow-lg shadow-orange-500/15">
            <div className="max-w-2xl mx-auto text-white">
              <MessageSquare className="w-10 h-10 mx-auto mb-3 opacity-90" />
              <h3 className="text-2xl font-bold mb-3">
                Ready to Start Your Project?
              </h3>
              <p className="text-orange-100 mb-5 text-base">
                Let's discuss your vision and create something beautiful
                together. Every great project starts with a conversation.
              </p>
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors shadow-md"
              >
                Start Your Project Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}