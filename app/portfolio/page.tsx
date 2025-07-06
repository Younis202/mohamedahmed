"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Clock,
  Coffee,
  Filter,
  MapPin,
  MessageSquare,
  Paintbrush,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { useState } from "react";

const categories = ["All", "Interior", "Exterior", "Bedroom", "Living Room"];

const projects = [
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
      "https://ik.imagekit.io/ihhlj9kpd/5d34c2fa0376ddcfc47e0d6bf9d57a3a.jpg?updatedAt=1751427571717",
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
      "https://ik.imagekit.io/ihhlj9kpd/479052163_1281429310389317_1709281608359941909_n.jpg",
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
      "https://ik.imagekit.io/ihhlj9kpd/468202620_1542193829828931_8807913712299673160_n.jpg",
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
      "https://ik.imagekit.io/ihhlj9kpd/476610571_1281429013722680_8174303365965858670_n.jpg",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "medium",
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
      "https://ik.imagekit.io/ihhlj9kpd/942fbefb1bdb26fc5405fba32e3815d8.jpg?updatedAt=1751427508570",
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
  {
    id: 11,
    title: "Professional Paint Work",
    category: "Bedroom",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
    "https://ik.imagekit.io/ihhlj9kpd/870f0d8c8764301667737d4a574741e6.jpg?updatedAt=1751502872767",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "large",
  },
  {
    id: 12,
    title: "Professional Paint Work",
    category: "Interior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
    "https://ik.imagekit.io/ihhlj9kpd/76535f6ee612f4c7f56c5f4510d3516c.jpg?updatedAt=1751503399574",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "large"
  },
  {
    id: 13,
    title: "Professional Paint Work",
    category: "Interior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
      image:
      "https://ik.imagekit.io/ihhlj9kpd/2025-Filli-Boya-Yilin-Rengi-3.png-800x514.png?updatedAt=1751411051277",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "small"
  },
  {
    id: 14,
    title: "Professional Paint Work",
    category: "Interior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
    "https://ik.imagekit.io/ihhlj9kpd/cc7bed83e496f7a086beef0ee8e9f4e3.jpg",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "small",
  },
  {
    id: 15,
    title: "Professional Paint Work",
    category: "Interior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/d6af0b8ed42e632ac48c5e535a5167ed.jpg?updatedAt=1751427388351",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "large",
  },
  {
    id: 16,
    title: "Professional Paint Work",
    category: "Interior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
    image:
      "https://ik.imagekit.io/ihhlj9kpd/d04d9c5c9d1b5f8cfc3a75d884c98d20.jpg",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "large",
  },
  {
    id: 17,
    title: "Professional Paint Work",
    category: "Interior",
    description:
      "High-quality painting with premium materials and attention to detail",
    location: "Local Area",
    duration: "2-3 days",
    rating: 5,
      image:
      "https://ik.imagekit.io/ihhlj9kpd/2025-Filli-Boya-Yilin-Rengi-4.png-800x514.png?updatedAt=1751411061938",
    tags: ["Professional", "Quality", "Clean Finish"],
    size: "small"
  },
];


// Animations matching hero section
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

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const handleWhatsAppClick = () => {
    window.open('https://wa.me/201101138690', '_blank');
  };

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background matching hero section */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-60"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 70%)",
              "radial-gradient(circle at 80% 80%, rgba(245, 101, 101, 0.08) 0%, transparent 70%)",
              "radial-gradient(circle at 60% 30%, rgba(168, 85, 247, 0.06) 0%, transparent 70%)",
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating decorative elements */}
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

      <div className="relative pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center mb-16"
          >
            {/* Professional Badge */}
            <motion.div
              variants={slideInLeft}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full shadow-sm mb-8"
            >
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
              <span className="text-gray-700 text-sm font-medium tracking-wide">
                MY PORTFOLIO • RECENT PROJECTS
              </span>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[0.9] tracking-tight">
                <span className="block">Recent</span>
                <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  Work
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Browse through my collection of local painting projects. Each
                project is completed with attention to detail and a commitment
                to quality, transforming homes in our community one room at a
                time.
              </p>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              {
                id: "portfolio-stat-1",
                label: "Local Projects",
                value: "200+",
                icon: Trophy,
                gradient: "from-orange-400 to-red-500",
              },
              {
                id: "portfolio-stat-2",
                label: "Happy Clients",
                value: "190+",
                icon: Users,
                gradient: "from-purple-400 to-pink-500",
              },
              {
                id: "portfolio-stat-3",
                label: "Years Experience",
                value: "5+",
                icon: Award,
                gradient: "from-blue-400 to-indigo-500",
              },
              {
                id: "portfolio-stat-4",
                label: "5-Star Reviews",
                value: "180+",
                icon: Star,
                gradient: "from-yellow-400 to-orange-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/70 backdrop-blur-xl border border-orange-100 p-6 rounded-2xl shadow-sm text-center group cursor-pointer"
              >
                <div
                  className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {stat.value}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category, index) => (
              <motion.div
                key={`category-${category}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className={`gap-2 px-6 py-3 h-auto text-base font-medium rounded-xl transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl"
                      : "bg-white/60 backdrop-blur-sm border-gray-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  {index === 0 ? (
                    <Filter className="w-4 h-4" />
                  ) : (
                    <Paintbrush className="w-4 h-4" />
                  )}
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Masonry Grid */}
          <motion.div
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mb-16"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={`project-${project.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="break-inside-avoid mb-8"
              >
                <Card
                  className={`overflow-hidden group cursor-pointer bg-white/80 backdrop-blur-xl border border-orange-100 shadow-lg hover:shadow-2xl transition-all duration-700 rounded-2xl
                  ${
                    project.size === "large"
                      ? "aspect-[4/5]"
                      : project.size === "medium"
                      ? "aspect-[4/4]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <div className="relative overflow-hidden h-full">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform duration-700 ease-in-out group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute inset-0 flex flex-col justify-between p-6">
                        {/* Top Section - Category Badge */}
                        <div className="flex justify-between items-start">
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              hoveredProject === project.id
                                ? { opacity: 1, scale: 1 }
                                : {}
                            }
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                          >
                            {project.category}
                          </motion.span>

                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              hoveredProject === project.id
                                ? { opacity: 1, scale: 1 }
                                : {}
                            }
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full"
                          >
                            {Array.from({ length: project.rating }).map(
                              (_, i) => (
                                <Star
                                  key={`project-${project.id}-star-${i}`}
                                  className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                                />
                              )
                            )}
                          </motion.div>
                        </div>

                        {/* Bottom Section - Project Info */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={
                            hoveredProject === project.id
                              ? { opacity: 1, y: 0 }
                              : {}
                          }
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="space-y-4"
                        >
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                              {project.title}
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={`project-${project.id}-tag-${tagIndex}`}
                                className="text-xs font-medium bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-3 text-sm text-white/80">
                              <div className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4" />
                                <span className="font-medium">
                                  {project.location}
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                <span className="font-medium">
                                  {project.duration}
                                </span>
                              </div>
                            </div>

                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:bg-white/30 transition-colors"
                            >
                              <ArrowRight className="w-4 h-4 text-white" />
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Static overlay for non-hover state */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                              {project.title}
                            </h3>
                            <p className="text-white/80 text-sm">
                              {project.category}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: project.rating }).map(
                              (_, i) => (
                                <Star
                                  key={`project-${project.id}-static-star-${i}`}
                                  className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                                />
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-white/70 backdrop-blur-xl border border-orange-100 p-12 rounded-3xl shadow-sm max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="space-y-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Paintbrush className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Ready to Transform
                  <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                    Your Space?
                  </span>
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Let's discuss your project and bring your vision to life. I
                  offer free consultations and competitive rates for all local
                  painting projects.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button                 onClick={handleWhatsAppClick}
 className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Button
                       onClick={handleWhatsAppClick}
                    variant="outline"
                    className="group text-gray-700 border-gray-300 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 bg-white/60 backdrop-blur-sm"
                  >
                    <Coffee className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}