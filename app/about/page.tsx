"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Star,
  Award,
  Users,
  Paintbrush,
  CheckCircle2,
  ArrowRight,
  Trophy,
  Coffee,
  Eye,
  Phone,
  Calendar,
  Heart,
  Palette,
  Home,
  Building,
  Smile,
  Clock,
  Target,
  Zap
} from "lucide-react";
import Image from "next/image";

// Consistent animations from hero and CTA sections
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

export default function About() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201101138690', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+201101138690', '_blank');
  };

  const stats = [
    { number: "200+", label: "Projects Completed", icon: Trophy, gradient: "from-yellow-400 to-orange-500" },
    { number: "150+", label: "Happy Clients", icon: Users, gradient: "from-orange-400 to-red-500" },
    { number: "5+", label: "Years Experience", icon: Award, gradient: "from-purple-400 to-pink-500" },
    { number: "100%", label: "Satisfaction Rate", icon: Star, gradient: "from-green-400 to-emerald-500" }
  ];

  const values = [
    {
      title: "Quality First",
      description: "Premium materials and proven techniques ensure lasting, beautiful results that stand the test of time.",
      icon: Star,
      gradient: "from-yellow-400 to-orange-500",
      bg: "from-yellow-50 to-orange-50"
    },
    {
      title: "Customer Focus",
      description: "Your vision is my priority. I listen carefully and adapt to deliver exactly what you envision.",
      icon: Heart,
      gradient: "from-pink-400 to-red-500",
      bg: "from-pink-50 to-red-50"
    },
    {
      title: "Professional Excellence",
      description: "Years of experience and dedication to craftsmanship ensure superior results on every project.",
      icon: Award,
      gradient: "from-purple-400 to-indigo-500",
      bg: "from-purple-50 to-indigo-50"
    }
  ];

  const services = [
    {
      title: "Residential Painting",
      description: "Transform your home with beautiful, long-lasting paint finishes",
      icon: Home,
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "Commercial Projects",
      description: "Professional painting services for offices and commercial spaces",
      icon: Building,
      gradient: "from-blue-400 to-purple-500"
    },
    {
      title: "Color Consultation",
      description: "Expert advice to choose the perfect colors for your space",
      icon: Palette,
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "Interior Design",
      description: "Complete interior makeovers with attention to every detail",
      icon: Eye,
      gradient: "from-pink-400 to-purple-500"
    }
  ];

  const offers = [
    "Free color consultation and design advice",
    "Detailed project quotes with no hidden costs",
    "Professional surface preparation and priming",
    "Premium quality paints and materials",
    "Clean, efficient work with minimal disruption",
    "100% satisfaction guarantee on all projects"
  ];

  const journey = [
    {
      year: "2019",
      title: "Started My Journey",
      description: "Began as an apprentice, learning the fundamentals of professional painting",
      icon: Zap
    },
    {
      year: "2021",
      title: "Independent Contractor",
      description: "Launched my own painting business, focusing on quality and customer satisfaction",
      icon: Target
    },
    {
      year: "2023",
      title: "Master Craftsman",
      description: "Achieved recognition as a skilled artisan with 150+ successful projects",
      icon: Trophy
    },
    {
      year: "Today",
      title: "Your Trusted Partner",
      description: "Continuing to transform spaces and exceed expectations every day",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* New Simple Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-orange-50/30 to-amber-50/20" />
          <motion.div
            className="absolute inset-0 opacity-40"
            animate={{
              background: [
                "radial-gradient(circle at 30% 40%, rgba(251, 146, 60, 0.08) 0%, transparent 70%)",
                "radial-gradient(circle at 70% 60%, rgba(245, 101, 101, 0.06) 0%, transparent 70%)",
                "radial-gradient(circle at 30% 40%, rgba(251, 146, 60, 0.08) 0%, transparent 70%)",
              ],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative container mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm border border-orange-200 rounded-full shadow-sm mb-8"
            >
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
              <span className="text-orange-600 text-sm font-medium tracking-wide uppercase">
                About Mohamed Ahmed
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-8"
            >
              <span className="block">Passionate</span>
              <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Painting Professional
              </span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="space-y-6 mb-12"
            >
              <p className="text-xl lg:text-2xl text-gray-700 font-medium">
                Transforming spaces with 5+ years of dedication, precision, and artistic vision
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                From humble beginnings as an apprentice to becoming a trusted painting expert in our community,
                my journey has been shaped by an unwavering commitment to quality, customer satisfaction,
                and the belief that every space deserves to be beautiful.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={`about-hero-stat-${stat.label}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-orange-100 shadow-sm"
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} />
                  <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 px-6 py-3 bg-orange-50 border border-orange-200 rounded-full shadow-sm mb-6"
            >
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
              <span className="text-orange-600 text-sm font-medium tracking-wide">MY JOURNEY</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              From Apprentice to <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Master Craftsman</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto text-lg">
              Every expert was once a beginner. Here's how I evolved from learning the basics to becoming
              a trusted painting professional in our community.
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {journey.map((item, index) => (
              <motion.div
                key={`journey-${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-center gap-8 mb-12 last:mb-0"
              >
                {/* Timeline line */}
                {index !== journey.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-orange-200 to-red-200" />
                )}

                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/60 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full shadow-sm mb-6"
            >
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
              <span className="text-orange-600 text-sm font-medium tracking-wide">MY VALUES</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              What Drives My <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Excellence</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto text-lg">
              These core principles guide every project I undertake, ensuring exceptional results and satisfied clients.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={`value-${value.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className={`bg-gradient-to-br ${value.bg} rounded-3xl p-8 shadow-lg border border-white/60 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl`}>
                  <div className={`bg-gradient-to-r ${value.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 px-6 py-3 bg-orange-50 border border-orange-200 rounded-full shadow-sm mb-6"
            >
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
              <span className="text-orange-600 text-sm font-medium tracking-wide">MY SERVICES</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Painting Solutions</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto text-lg">
              From concept to completion, I offer a full range of professional painting services
              tailored to meet your specific needs and vision.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={`service-${service.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-orange-200">
                  <div className={`bg-gradient-to-r ${service.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/70 backdrop-blur-xl border border-orange-100 rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-50 border border-orange-200 rounded-full shadow-sm mb-6">
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
                  <span className="text-orange-600 text-sm font-medium tracking-wide">WHAT I OFFER</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Complete <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Project Experience</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  From initial consultation to final touch-ups, I provide everything you need for a successful painting project.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offers.map((offer, index) => (
                  <motion.div
                    key={`offer-${offer.substring(0, 20)}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{offer}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
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
        </div>

        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-orange-300/30 rounded-full shadow-sm mb-8"
            >
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
              <span className="text-orange-200 text-sm font-medium tracking-wide">
                READY TO START?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.9] tracking-tight mb-8"
            >
              <span className="block">Let's Transform</span>
              <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Your Space Together
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-12"
            >
              Your dream space is just one conversation away. Let's discuss your vision
              and create something amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
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
                className="group text-white border-white/30 hover:bg-white/10 hover:border-orange-300 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 bg-white/5 backdrop-blur-sm"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium">Call: +20 110 113 8690</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium">Available 7 Days a Week</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}