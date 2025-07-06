"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  MessageSquare,
  Paintbrush,
  Palette,
  Sparkles,
  Wallpaper,
} from "lucide-react";
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

const services = [
  {
    title: "Interior Painting",
    description:
      "I transform your indoor spaces with precision and artistic flair, creating atmospheres that reflect your personality.",
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2070",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
  },
  {
    title: "Premium Finishes",
    description:
      "I specialize in luxury textures, metallic accents, and specialized coatings for truly exceptional results.",
    icon: Sparkles,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/Filli-girisimci-genc-usta_bjsfkf.jpg?updatedAt=1751410546194",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    title: "Decorative Artistry",
    description:
      "My custom artistic finishes add unique character and sophistication to any room with hand-crafted details.",
    icon: Palette,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/irmak-130-yilin-rengi-2024.jpg-1280x600.jpg?updatedAt=1751411343999",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    title: "Wallpaper Design",
    description:
      "I bring walls to life with expertly installed wallpaper and custom design solutions that tell your story.",
    icon: Wallpaper,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/ev-boyarken-kacinilmasi-gereken-7-hata.jpg-800x640.jpg?updatedAt=1751410613394",
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50",
  }
];

export default function ServicesSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201101138690', '_blank');
  };

  return (
    <div>
      {/* Enhanced Services Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Elegant Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-orange-50/30" />

          {/* Subtle floating elements */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 10% 20%, rgba(251, 146, 60, 0.03) 0%, transparent 50%)",
                "radial-gradient(circle at 90% 80%, rgba(245, 101, 101, 0.02) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.02) 0%, transparent 50%)",
                "radial-gradient(circle at 10% 20%, rgba(251, 146, 60, 0.03) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Decorative elements */}
          <motion.div
            className="absolute top-24 right-32 w-1 h-1 bg-orange-300 rounded-full opacity-60"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 left-24 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-40"
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
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
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-orange-200/50 rounded-full shadow-sm"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
              <span className="text-gray-700 text-sm font-medium tracking-wide">
                PREMIUM SERVICES
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Crafting Exceptional
              <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Living Spaces
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Each service I offer is designed with meticulous attention to
              detail, bringing together years of expertise and artistic vision
              to transform your space into something truly extraordinary.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={`service-${service.title}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
              >
                {/* Service Content */}
                <motion.div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  whileHover={{ x: index % 2 === 1 ? -10 : 10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Icon Container */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.bgGradient} rounded-2xl shadow-lg shadow-orange-500/10 backdrop-blur-sm border border-white/60`}
                  >
                    <service.icon />
                  </motion.div>

                  {/* Title & Description */}
                  <div className="space-y-4">
                    <motion.h3
                      initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="text-3xl lg:text-4xl font-bold text-gray-900"
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="text-lg text-gray-600 leading-relaxed max-w-xl"
                    >
                      {service.description}
                    </motion.p>
                  </div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      className={`group bg-gradient-to-r ${service.gradient} hover:shadow-xl hover:shadow-orange-500/25 text-white border-0 px-6 py-3 rounded-xl transition-all duration-300`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Service Image */}
                <motion.div
                  className={`relative ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Main Image Container */}
                  <div className="relative group cursor-pointer">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="relative bg-white/60 backdrop-blur-sm border border-orange-100/50 rounded-3xl p-4 shadow-xl shadow-orange-500/10 overflow-hidden"
                    >
                      {/* Subtle decorative gradient */}
                      <div
                        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.bgGradient} opacity-20 rounded-full blur-3xl`}
                      />

                      {/* Image */}
                      <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Floating badge */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                          viewport={{ once: true }}
                          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 shadow-sm"
                        >
                          Premium Quality
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Floating decorative elements */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                      className={`absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r ${service.gradient} rounded-full shadow-lg opacity-80`}
                    />

                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className={`absolute -bottom-2 -left-2 w-4 h-4 border-2 border-gradient-to-r ${service.gradient} rounded-full opacity-60`}
                      style={{
                        borderImage: `linear-gradient(45deg, rgba(251, 146, 60, 0.8), rgba(245, 101, 101, 0.8)) 1`,
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-24 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Ready to Transform Your Space?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Let's discuss your vision and create something extraordinary
                together. Every project begins with understanding your unique
                style and needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                size="lg"
                variant="outline"
                className="group text-gray-700 border-gray-300 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 bg-white/60 backdrop-blur-sm"
              >
                <Eye className="mr-2 h-5 w-5" />
                View Gallery
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}