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
    id: 1,
    title: "Professional Paint Work",
    category: "Interior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/5d34c2fa0376ddcfc47e0d6bf9d57a3a.jpg?updatedAt=1751427571717", // swapped with id:12
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "large",
  },
  {
    id: 2,
    title: "Professional Paint Work",
    category: "Living Room",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/479052163_1281429310389317_1709281608359941909_n.jpg", // swapped with id:17
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "large",
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    title: "Professional Paint Work",
    category: "Interior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/476610571_1281429013722680_8174303365965858670_n.jpg", // swapped with id:16
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "large",
  },
  {
    id: 9,
    title: "Professional Paint Work",
    category: "Exterior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/468202620_1542193829828931_8807913712299673160_n.jpg", // swapped with id:18
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "medium",
  },
  {
    id: 10,
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

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projectCardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function EnhancedPortfolioSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-amber-50/30 to-red-50/40" />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 25% 40%, rgba(251, 146, 60, 0.08) 0%, transparent 60%)",
              "radial-gradient(circle at 75% 60%, rgba(245, 101, 101, 0.06) 0%, transparent 60%)",
              "radial-gradient(circle at 50% 30%, rgba(236, 72, 153, 0.04) 0%, transparent 60%)",
              "radial-gradient(circle at 25% 40%, rgba(251, 146, 60, 0.08) 0%, transparent 60%)",
            ],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-32 right-32 w-2 h-2 bg-orange-400 rounded-full opacity-40"
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

      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-8"
        >
          {/* Professional Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-orange-200/50 rounded-full shadow-sm"
          >
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse" />
            <span className="text-gray-700 text-sm font-medium tracking-wide">
              FEATURED WORK • RECENT PROJECTS
            </span>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
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
            className="flex flex-wrap justify-center gap-8 pt-4"
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
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-orange-100/50"
              >
                <div
                  className={`w-8 h-8 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center shadow-sm`}
                >
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900">
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
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group cursor-pointer break-inside-avoid mb-6"
            >
              <div className="relative bg-white/70 backdrop-blur-sm border border-orange-100/50 rounded-3xl p-2 shadow-xl shadow-orange-500/10 overflow-hidden">
                {/* Decorative gradient accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-pink-400/5 rounded-full blur-3xl" />

                <div
                  className={`relative rounded-2xl overflow-hidden ${
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
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Enhanced overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500" />

                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-lg border border-white/20"
                  >
                    {project.category}
                  </motion.div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {Array.from({ length: project.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Project Details - Enhanced */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        hoveredProject === project.id
                          ? { opacity: 1, y: 0 }
                          : { opacity: 1, y: 10 }
                      }
                      transition={{ duration: 0.4 }}
                      className="space-y-4"
                    >
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-white/90 text-sm lg:text-base leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Project Meta - Only visible on hover */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          hoveredProject === project.id
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4 text-sm text-white/80">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            <span className="font-medium">
                              {project.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            <span className="font-medium">
                              {project.location}
                            </span>
                          </div>
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                        >
                          <ArrowRight className="w-5 h-5 text-white" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-60"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-xl border border-orange-100/50 p-12 rounded-3xl shadow-xl max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-400/5 to-pink-400/3 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-red-400/5 to-orange-400/3 rounded-full blur-2xl" />

            <div className="relative space-y-8">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl"
              >
                <Paintbrush className="w-10 h-10 text-white" />
              </motion.div>

              <div className="space-y-4">
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/portfolio">
                    <Button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25">
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
                    className="group text-gray-700 border-gray-300 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
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
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-6 pt-6 text-sm text-gray-600"
              >
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  200+ Projects Completed
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  190+ 5-Star Reviews
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
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
