"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Paintbrush, Home, User2, Image as ImageIcon, Wrench, MessageSquare, X, Menu } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Home', icon: Home, description: 'Welcome Page' },
    { href: '/portfolio', label: 'Portfolio', icon: ImageIcon, description: 'View My Work' },
    { href: '/services', label: 'Services', icon: Wrench, description: 'What I Offer' },
    { href: '/about', label: 'About', icon: User2, description: 'My Story' },
    { href: '/contact', label: 'Contact', icon: MessageSquare, description: 'Get in Touch' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false);
  };

  return (
    <>
      {/* Menu Toggle Button with Tooltip */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
            >
              <Menu className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium">Click to navigate</span>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={toggleMenu}
          onMouseEnter={() => setShowTooltip(true)}
          className={`p-3 rounded-full bg-orange-500 shadow-lg transition-all duration-300 hover:scale-110 ${
            isOpen ? 'rotate-90' : ''
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Paintbrush className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white shadow-2xl z-40"
          >
            <div className="h-full flex flex-col justify-center p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-2">Menu</h2>
                <div className="h-1 w-20 bg-orange-500" />
              </motion.div>

              <nav className="space-y-8">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`group flex flex-col gap-1 transition-colors duration-300 ${
                          isActive ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="relative">
                            <item.icon className="w-6 h-6" />
                            <motion.div
                              className="absolute -inset-2 bg-orange-100 rounded-lg -z-10"
                              initial={false}
                              animate={{
                                scale: isActive ? 1 : 0,
                                opacity: isActive ? 1 : 0,
                              }}
                            />
                          </span>
                          <span className="text-xl font-medium">{item.label}</span>
                          {isActive && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="absolute left-0 w-1 h-8 bg-orange-500 rounded-r-full"
                            />
                          )}
                        </div>
                        <span className="text-sm text-gray-400 group-hover:text-orange-400 ml-10">
                          {item.description}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Portfolio Quick Access */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 border-t border-gray-100 pt-8"
              >
                <h3 className="text-sm font-medium text-gray-400 mb-4">FEATURED PROJECTS</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "https://images.unsplash.com/photo-1560440021-33f9b867899d?q=80&w=100",
                    "https://images.unsplash.com/photo-1595514535415-dae8580c416c?q=80&w=100",
                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=100"
                  ].map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + (index * 0.1) }}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                    >
                      <img src={img} alt={`Project ${index + 1}`} className="object-cover w-full h-full" />
                      <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="flex items-center gap-4 text-gray-400">
                  <Paintbrush className="w-5 h-5" />
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          />
        )}
      </AnimatePresence>
    </>
  );
}