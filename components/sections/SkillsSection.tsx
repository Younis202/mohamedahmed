"use client";

import { motion } from "framer-motion";
import {
  Award,
  Brush,
  CheckCircle,
  Clock,
  Hammer,
  Paintbrush,
  Palette,
  Shield,
  Wrench,
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

const slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function SkillsSection() {
  const skills = [
    {
      icon: Paintbrush,
      name: "Interior Painting",
      level: 95,
      description: "Professional interior wall painting with precision",
      gradient: "from-orange-400 to-red-500",
      bg: "from-orange-50 to-red-50",
    },
    {
      icon: Palette,
      name: "Color Consultation",
      level: 90,
      description: "Expert color matching and design consultation",
      gradient: "from-purple-400 to-pink-500",
      bg: "from-purple-50 to-pink-50",
    },
    {
      icon: Brush,
      name: "Decorative Finishes",
      level: 88,
      description: "Specialty textures and decorative techniques",
      gradient: "from-blue-400 to-indigo-500",
      bg: "from-blue-50 to-indigo-50",
    },
    {
      icon: Hammer,
      name: "Surface Preparation",
      level: 92,
      description: "Professional wall prep and repair work",
      gradient: "from-green-400 to-emerald-500",
      bg: "from-green-50 to-emerald-50",
    },
    {
      icon: Wrench,
      name: "Equipment Mastery",
      level: 85,
      description: "Expert use of professional painting tools",
      gradient: "from-yellow-400 to-orange-500",
      bg: "from-yellow-50 to-orange-50",
    },
    {
      icon: Shield,
      name: "Safety Standards",
      level: 100,
      description: "Strict adherence to safety protocols",
      gradient: "from-red-400 to-pink-500",
      bg: "from-red-50 to-pink-50",
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: "Professional Painter Certification",
      issuer: "National Painting Association",
      year: "2023",
    },
    {
      icon: CheckCircle,
      title: "Color Theory Specialist",
      issuer: "Design Institute",
      year: "2022",
    },
    {
      icon: Shield,
      title: "Safety & Standards Certified",
      issuer: "Construction Safety Board",
      year: "2023",
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
              "radial-gradient(circle at 30% 40%, rgba(251, 146, 60, 0.05) 0%, transparent 70%)",
              "radial-gradient(circle at 70% 60%, rgba(245, 101, 101, 0.04) 0%, transparent 70%)",
              "radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.03) 0%, transparent 70%)",
              "radial-gradient(circle at 30% 40%, rgba(251, 146, 60, 0.05) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-32 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-30"
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-1 h-1 bg-pink-400 rounded-full opacity-25"
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
              SKILLS & EXPERTISE
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
            Skills
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Years of dedicated practice have honed my expertise in every aspect
            of painting and decoration. Here's what I bring to every project.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Skills Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h3
              variants={slideInLeft}
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              Core Competencies
            </motion.h3>

            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={`skill-${skill.name}`}
                  variants={slideInLeft}
                  whileHover={{ scale: 1.02, x: 6 }}
                  className="group"
                >
                  <div className="bg-white/60 backdrop-blur-xl border border-orange-100/40 rounded-2xl p-5 shadow-lg shadow-orange-500/5 hover:shadow-lg hover:shadow-orange-500/8 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${skill.bg} rounded-xl flex items-center justify-center shadow-sm`}
                      >
                        <skill.icon
                          className={`w-5 h-5 bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">
                            {skill.name}
                          </h4>
                          <span className="text-sm font-medium text-gray-600">
                            {skill.level}%
                          </span>
                        </div>

                        <p className="text-gray-600 text-sm mb-3">
                          {skill.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 bg-gradient-to-r ${skill.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.1 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Quality Standards */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h3
              variants={slideInRight}
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              Certifications & Standards
            </motion.h3>

            {/* Certifications */}
            <motion.div variants={slideInRight} className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={`certification-${cert.title}`}
                  whileHover={{ scale: 1.02, x: -6 }}
                  className="bg-white/60 backdrop-blur-xl border border-orange-100/40 rounded-xl p-5 shadow-lg shadow-orange-500/5 hover:shadow-lg hover:shadow-orange-500/8 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg flex items-center justify-center">
                      <cert.icon className="w-4.5 h-4.5 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quality Promise */}
            <motion.div
              variants={slideInRight}
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-lg shadow-orange-500/15"
            >
              <div className="text-center">
                <Clock className="w-10 h-10 mx-auto mb-3 opacity-90" />
                <h4 className="text-xl font-bold mb-3">Quality Guarantee</h4>
                <p className="text-orange-100 leading-relaxed">
                  Every project comes with my personal guarantee of quality
                  craftsmanship and complete satisfaction. Your vision, executed
                  perfectly.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-5 pt-5 border-t border-orange-400/30">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-xs text-orange-200">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs text-orange-200">
                      Satisfaction Rate
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}