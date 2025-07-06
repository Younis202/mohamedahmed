"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Clock,
  Eye,
  MapPin,
  Paintbrush,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Featured projects - carefully selected for visual impact
const featuredProjects = [
  {
    id: 101,
    title: "Professional Paint Work",
    category: "Interior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/5d34c2fa0376ddcfc47e0d6bf9d57a3a.jpg?updatedAt=1751427571717",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "large",
  },
  {
    id: 102,
    title: "Professional Paint Work",
    category: "Living Room",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/479052163_1281429310389317_1709281608359941909_n.jpg",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "large",
  },
  {
    id: 103,
    title: "Professional Paint Work",
    category: "Exterior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/ead7b5e1238cde2e2a8d7fbe5ccb0a52(1).jpg?updatedAt=1751427736779",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "large",
  },
  {
    id: 104,
    title: "Professional Paint Work",
    category: "Interior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/942fbefb1bdb26fc5405fba32e3815d8.jpg?updatedAt=1751427508570",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "medium",
  },
  {
    id: 105,
    title: "Professional Paint Work",
    category: "Interior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/6887cc9a580b038e1dbec23db0aad3b0.jpg",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "large",
  },
  {
    id: 106,
    title: "Professional Paint Work",
    category: "Living Room",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/903eab77d84e3705a95ed88d77f96b1b.jpg",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "small",
  },
  {
    id: 107,
    title: "Professional Paint Work",
    category: "Interior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/fa2f2a33b234ce3c29a70ecb74fc271a.jpg",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "large",
  },
  {
    id: 108,
    title: "Professional Paint Work",
    category: "Interior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/476610571_1281429013722680_8174303365965858670_n.jpg",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "large",
  },
  {
    id: 109,
    title: "Professional Paint Work",
    category: "Exterior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/468202620_1542193829828931_8807913712299673160_n.jpg",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "medium",
  },
  {
    id: 110,
    title: "Professional Paint Work",
    category: "Interior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/residential-interior-kitchen-ProjectPainting_NJKitchen_CabinetsAfter2-scaled.jpg?updatedAt=1751427017425",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "large",
  },
];

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

const projectCardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export default function EnhancedPortfolioSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-amber-50/20 to-red-50/30" />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-25"
          animate={{
            background: [
              "radial-gradient(circle at 25% 40%, rgba(251, 146, 60, 0.05) 0%, transparent 60%)",
              "radial-gradient(circle at 75% 60%, rgba(245, 101, 101, 0.04) 0%, transparent 60%)",
              "radial-gradient(circle at 50% 30%, rgba(236, 72, 153, 0.03) 0%, transparent 60%)",
              "radial-gradient(circle at 25% 40%, rgba(251, 146, 60, 0.05) 0%, transparent 60%)",
            ],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-32 right-32 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-30"
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
        {/* Enhanced Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-6"
        >
          {/* Professional Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-orange-200/40 rounded-full shadow-sm"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse" />
            <span className="text-gray-700 text-sm font-medium tracking-wide">
              FEATURED WORK • RECENT PROJECTS
            </span>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block">Portfolio</span>
              <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Showcase
              </span>
            </h2>

            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover a curated selection of my most impactful transformations.
              Each project represents a unique story of vision, craftsmanship,
              and attention to detail.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 pt-4"
          >
            {[
              {
                label: "Projects",
                value: "200+",
                icon: Trophy,
                color: "from-orange-400 to-red-500",
              },
              {
                label: "Happy Clients",
                value: "190+",
                icon: Users,
                color: "from-purple-400 to-pink-500",
              },
              {
                label: "Years Experience",
                value: "5+",
                icon: Award,
                color: "from-blue-400 to-indigo-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={`portfolio-section-stat-${stat.label}`}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-orange-100/40"
              >
                <div
                  className={`w-7 h-7 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center shadow-sm`}
                >
                  <stat.icon className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Portfolio Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5 mb-12"
        >
          {featuredProjects.slice(0, 9).map((project, index) => (
            <motion.div
              key={`portfolio-section-project-${project.id}`}
              variants={projectCardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group cursor-pointer break-inside-avoid mb-5"
            >
              <div className="relative bg-white/60 backdrop-blur-sm border border-orange-100/40 rounded-2xl p-2 shadow-lg shadow-orange-500/8 overflow-hidden">
                {/* Decorative gradient accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/8 to-pink-400/4 rounded-full blur-2xl" />

                <div
                  className={`relative rounded-xl overflow-hidden ${
                    project.size === "large"
                      ? "aspect-[4/5]"
                      : project.size === "medium"
                      ? "aspect-[4/4]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />

                  {/* Enhanced overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-50 group-hover:opacity-80 transition-all duration-400" />

                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                    className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-gray-700 shadow-sm border border-white/20"
                  >
                    {project.category}
                  </motion.div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {Array.from({ length: project.rating }).map((_, i) => (
                      <Star
                        key={`portfolio-section-project-${project.id}-star-${i}`}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Project Details - Enhanced */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        hoveredProject === project.id
                          ? { opacity: 1, y: 0 }
                          : { opacity: 1, y: 8 }
                      }
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold text-white mb-1 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Project Meta - Only visible on hover */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={
                          hoveredProject === project.id
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 15 }
                        }
                        transition={{ duration: 0.25, delay: 0.05 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3 text-sm text-white/80">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span className="font-medium">
                              {project.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span className="font-medium">
                              {project.location}
                            </span>
                          </div>
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-md cursor-pointer"
                        >
                          <ArrowRight className="w-4 h-4 text-white" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-50"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-xl border border-orange-100/40 p-10 rounded-3xl shadow-lg max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-400/4 to-pink-400/2 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-red-400/4 to-orange-400/2 rounded-full blur-2xl" />

            <div className="relative space-y-6">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg"
              >
                <Paintbrush className="w-8 h-8 text-white" />
              </motion.div>

              <div className="space-y-3">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Explore My Complete
                  <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                    Portfolio Collection
                  </span>
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  These are just a few highlights. Discover 200+ completed
                  projects, detailed case studies, and see why local homeowners
                  trust me with their most important spaces.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/portfolio">
                    <Button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                      <Eye className="mr-2 h-5 w-5" />
                      View Full Portfolio
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="group text-gray-700 border-gray-300 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 bg-white/70 backdrop-blur-sm"
                  >
                    <Trophy className="mr-2 h-5 w-5" />
                    See Client Reviews
                  </Button>
                </motion.div>
              </div>

              {/* Additional stats teaser */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4 pt-4 text-sm text-gray-600"
              >
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  200+ Projects Completed
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  190+ 5-Star Reviews
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  5+ Years Experience
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}