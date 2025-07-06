"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Star,
  Users,
  Award,
  CheckCircle2,
  Paintbrush,
  Heart,
  Coffee
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
    setIsSubmitting(false);
    
    // You can add actual form submission logic here
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201101138690', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+201101138690', '_blank');
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call or WhatsApp",
      info: "+20 110 113 8690",
      description: "Available 7 days a week for consultations",
      gradient: "from-green-500 to-emerald-500",
      bg: "from-green-50 to-emerald-50",
      action: "Call Now",
      onClick: handleCallClick
    },
    {
      icon: Mail,
      title: "Email Me",
      info: "younismohamed86004@gmail.com",
      description: "Get a detailed response within 24 hours",
      gradient: "from-blue-500 to-indigo-500",
      bg: "from-blue-50 to-indigo-50",
      action: "Send Email",
      onClick: () => window.open('mailto:younismohamed86004@gmail.com', '_blank')
    },
  ];

  const projectTypes = [
    "Interior Painting",
    "Exterior Painting", 
    "Decorative Finishes",
    "Wallpaper Installation",
    "Color Consultation",
    "Complete Renovation",
    "Other"
  ];

  const stats = [
    {
      icon: Users,
      number: "200+",
      label: "Happy Clients",
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: Star,
      number: "5.0",
      label: "Average Rating",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Award,
      number: "5+",
      label: "Years Experience",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: CheckCircle2,
      number: "100%",
      label: "Satisfaction Rate",
      gradient: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Background matching hero section */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />
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
                Get In Touch
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-8"
            >
              <span className="block">Let's Create</span>
              <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="space-y-6 mb-12"
            >
              <p className="text-xl lg:text-2xl text-gray-700 font-medium">
                Ready to transform your space? Let's discuss your vision.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Whether you have a clear idea or need guidance, I'm here to help bring your dream space to life. 
                Every great project starts with a conversation.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={`contact-hero-stat-${stat.label}`}
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

      {/* Contact Methods Section */}
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
              <span className="text-orange-600 text-sm font-medium tracking-wide">CONTACT METHODS</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              Multiple Ways to <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Connect</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto text-lg">
              Choose the method that works best for you. I'm always available to discuss your project needs.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={`contact-method-${method.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${method.bg} rounded-3xl p-8 shadow-lg border border-white/60 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl text-center h-full`}>
                  <div className={`bg-gradient-to-r ${method.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{method.title}</h3>
                  <p className={`font-semibold bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent mb-3`}>
                    {method.info}
                  </p>
                  <p className="text-gray-600 text-sm mb-6">{method.description}</p>
                  <Button
                    onClick={method.onClick}
                    className={`group bg-gradient-to-r ${method.gradient} hover:shadow-lg text-white border-0 px-6 py-2 rounded-xl transition-all duration-300`}
                  >
                    {method.action}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/70 backdrop-blur-xl border border-orange-100 rounded-3xl p-8 shadow-xl">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Start Your <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Project</span>
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and I'll get back to you within 24 hours with a detailed response.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/60 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/60 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="+20 110 113 8690"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/60 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/60 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={`project-type-${type}`} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/60 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project... What rooms need painting? Any specific colors or finishes you have in mind? Timeline preferences?"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Let's Discuss Your <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Vision</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  I believe every space has potential to be extraordinary. Whether you're looking for a simple refresh 
                  or a complete transformation, I'm here to guide you through every step of the process.
                </p>
              </div>

              {/* Quick Info Cards */}
              <div className="space-y-6">
                <div className="bg-white/60 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Response Time</h4>
                      <p className="text-gray-600">Within 24 hours guaranteed</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Free Consultation</h4>
                      <p className="text-gray-600">No obligation site visit and quote</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Service Area</h4>
                      <p className="text-gray-600">Local area and surrounding regions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8" />
                  <h4 className="text-xl font-bold">What to Expect</h4>
                </div>
                <div className="space-y-4">
                  {[
                    "Detailed project assessment and timeline",
                    "Transparent pricing with no hidden costs",
                    "Professional color and design consultation",
                    "High-quality materials and expert craftsmanship",
                    "Clean, efficient work with minimal disruption",
                    "100% satisfaction guarantee"
                  ].map((item, index) => (
                    <div key={`expectation-${item.substring(0, 20)}`} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-200 mt-0.5 flex-shrink-0" />
                      <span className="text-orange-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-12 border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I'm always happy to chat about your project ideas, even if you're just in the early planning stages. 
                Sometimes a quick conversation can spark the perfect solution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleCallClick}
                  className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Me Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                  <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="group text-gray-700 border-gray-300 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 px-8 py-4 h-auto text-base font-medium rounded-xl transition-all duration-300 bg-white/60 backdrop-blur-sm"
                >
                  <Paintbrush className="mr-2 h-5 w-5" />
                  View My Work
                </Button>
                                      </Link>

              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}