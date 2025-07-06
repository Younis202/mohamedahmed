"use client";

import { motion } from "framer-motion";
import {
  Paintbrush,
  Palette,
  Wallpaper,
  Sparkles,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Trophy,
  Star,
  Award,
  Calendar,
  Phone,
  Users,
  Eye,
  Mail,
  Linkedin
} from "lucide-react";

// Consistent animations from hero section
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

const services = [
  {
    id: "service-1",
    title: "Interior & Exterior Painting",
    description: "Professional painting services for all surfaces, ensuring a flawless finish that transforms your space with precision and care.",
    icon: Paintbrush,
    gradient: "from-orange-400 to-red-500",
    features: [
      "Premium quality paints",
      "Surface preparation",
      "Color consultation",
      "Clean and efficient work"
    ]
  },
  {
    id: "service-2",
    title: "Decorative Finishes",
    description: "Add character to your walls with our range of decorative painting techniques and artistic finishes that bring personality to every room.",
    icon: Palette,
    gradient: "from-purple-400 to-pink-500",
    features: [
      "Textured finishes",
      "Faux effects",
      "Custom designs",
      "Accent walls"
    ]
  },
  {
    id: "service-3",
    title: "Wallpaper Installation",
    description: "Expert wallpaper installation services to add pattern, texture, and style to your walls with meticulous attention to detail.",
    icon: Wallpaper,
    gradient: "from-blue-400 to-indigo-500",
    features: [
      "Professional installation",
      "Wide pattern selection",
      "Surface preparation",
      "Precise alignment"
    ]
  },
  {
    id: "service-4",
    title: "Luxury Finishes",
    description: "Premium metallic and specialty finishes that add elegance and sophistication to any room with exceptional craftsmanship.",
    icon: Sparkles,
    gradient: "from-yellow-400 to-orange-500",
    features: [
      "Metallic finishes",
      "Gold leaf application",
      "Venetian plaster",
      "Custom effects"
    ]
  }
];

const stats = [
  {
    id: "stat-1",
    icon: Users,
    number: "200+",
    label: "Happy Clients",
    gradient: "from-orange-400 to-red-500",
    bg: "from-orange-50 to-red-50"
  },
  {
    id: "stat-2",
    icon: Star,
    number: "5.0",
    label: "Average Rating",
    gradient: "from-yellow-400 to-orange-500",
    bg: "from-yellow-50 to-orange-50"
  },
  {
    id: "stat-3",
    icon: Award,
    number: "5+",
    label: "Years Experience",
    gradient: "from-purple-400 to-pink-500",
    bg: "from-purple-50 to-pink-50"
  },
  {
    id: "stat-4",
    icon: Trophy,
    number: "100%",
    label: "Satisfaction Rate",
    gradient: "from-green-400 to-emerald-500",
    bg: "from-green-50 to-emerald-50"
  }
];

export default function ElegantPortfolio() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201101138690', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+201101138690', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Subtle floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.08) 0%, transparent 70%)",
              "radial-gradient(circle at 80% 80%, rgba(245, 101, 101, 0.06) 0%, transparent 70%)",
              "radial-gradient(circle at 60% 30%, rgba(168, 85, 247, 0.04) 0%, transparent 70%)",
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.08) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

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

      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm border border-orange-200 rounded-full shadow-sm mb-8"
            >
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
              <span className="text-gray-700 text-sm font-medium tracking-wide">
                PROFESSIONAL SERVICES
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.9] tracking-tight"
            >
              <span className="block text-gray-900">My</span>
              <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              From basic painting to luxury finishes, I offer a comprehensive range of services
              to transform your space with expert craftsmanship and passionate attention to detail.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group"
              >
                <div className="bg-white/70 backdrop-blur-xl border border-orange-100 rounded-3xl p-8 shadow-xl shadow-orange-500/5 h-full overflow-hidden">
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/5 to-pink-400/5 rounded-full blur-2xl" />

                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={`${service.id}-feature-${i}`} className="flex items-center gap-3 text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm border border-orange-200 rounded-full shadow-sm mb-8">
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
                <span className="text-gray-700 text-sm font-medium tracking-wide">
                  PROVEN RESULTS
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Numbers That <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Speak</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Quality work and satisfied clients are the foundation of my success
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`text-center p-8 bg-gradient-to-br ${stat.bg} rounded-2xl border border-white/40 shadow-lg backdrop-blur-sm`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm border border-orange-200 rounded-full shadow-sm mb-8">
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
                <span className="text-gray-700 text-sm font-medium tracking-wide">
                  HOW I WORK
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                My <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A systematic approach that ensures quality results and complete satisfaction
              </p>
            </motion.div>

            <div className="bg-white/70 backdrop-blur-xl border border-orange-100 rounded-3xl p-8 lg:p-12 shadow-xl shadow-orange-500/5">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { id: "process-1", step: "1", title: "Consultation", description: "Free on-site assessment and detailed quote", icon: MessageSquare, gradient: "from-orange-400 to-red-500" },
                  { id: "process-2", step: "2", title: "Planning", description: "Color selection and project timeline", icon: Calendar, gradient: "from-purple-400 to-pink-500" },
                  { id: "process-3", step: "3", title: "Preparation", description: "Surface prep and area protection", icon: Paintbrush, gradient: "from-blue-400 to-indigo-500" },
                  { id: "process-4", step: "4", title: "Execution", description: "Expert painting and finishing touches", icon: Sparkles, gradient: "from-green-400 to-emerald-500" }
                ].map((phase, index) => (
                  <motion.div
                    key={phase.id}
                    variants={fadeInUp}
                    className="text-center relative group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`w-16 h-16 bg-gradient-to-r ${phase.gradient} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg`}
                    >
                      <phase.icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                    {index < 3 && (
                      <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-orange-300" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl p-12 lg:p-16 text-white shadow-2xl shadow-orange-500/25 overflow-hidden relative"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />

              <div className="relative">
                <motion.div
                  variants={fadeInUp}
                  className="mb-8"
                >
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    Ready to Transform Your Space?
                  </h2>
                  <p className="text-xl lg:text-2xl text-orange-100 leading-relaxed max-w-3xl mx-auto">
                    Let's discuss your vision and bring it to life with professional craftsmanship.
                    Your dream space is just one conversation away.
                  </p>
                </motion.div>

                <motion.div
                  variants={slideInLeft}
                  className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                >
                  <motion.button
                    onClick={handleWhatsAppClick}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-white text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Get Free Quote
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>

                  <motion.button
                    onClick={handleCallClick}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </motion.button>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  variants={slideInRight}
                  className="flex flex-col sm:flex-row gap-6 justify-center text-orange-100"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>+20 110 113 8690</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Available 7 Days a Week</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}