"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Star, Check, ArrowRight, Sparkles, Zap, Heart, Rocket, Trophy, Crown, Gem, Rainbow } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { name: 'Home', active: true, color: 'bg-gradient-to-r from-purple-400 to-pink-400', textColor: 'text-white' },
    { name: 'About', active: false, color: 'bg-gradient-to-r from-emerald-300 to-teal-400', textColor: 'text-black' },
    { name: 'Services', active: false, color: 'bg-gradient-to-r from-red-300 to-orange-400', textColor: 'text-white' },
    { name: 'Gallery', active: false, color: 'bg-gradient-to-r from-indigo-300 to-blue-400', textColor: 'text-white' },
    { name: 'Updates', active: false, color: 'bg-gradient-to-r from-yellow-300 to-amber-400', textColor: 'text-black' },
    { name: 'Contact Us', active: false, color: 'bg-gradient-to-r from-pink-300 to-rose-400', textColor: 'text-black' },
  ];

  const features = [
    { 
      title: 'We are the best', 
      icon: Crown, 
      color: 'bg-gradient-to-br from-emerald-300 via-teal-300 to-cyan-300',
      iconBg: 'bg-gradient-to-r from-emerald-600 to-teal-600'
    },
    { 
      title: 'Quality guaranteed', 
      icon: Gem, 
      color: 'bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300',
      iconBg: 'bg-gradient-to-r from-indigo-600 to-purple-600'
    },
    { 
      title: 'Affordable prices', 
      icon: Trophy, 
      color: 'bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300',
      iconBg: 'bg-gradient-to-r from-yellow-600 to-orange-600'
    },
  ];

  const floatingElements = [
    { icon: Heart, color: 'text-pink-500', size: 'w-6 h-6', delay: 0 },
    { icon: Star, color: 'text-yellow-500', size: 'w-8 h-8', delay: 0.5 },
    { icon: Rocket, color: 'text-blue-500', size: 'w-7 h-7', delay: 1 },
    { icon: Sparkles, color: 'text-purple-500', size: 'w-6 h-6', delay: 1.5 },
    { icon: Rainbow, color: 'text-green-500', size: 'w-8 h-8', delay: 2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,69,19,0.1),transparent_50%)]"></div>
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 80, 0],
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Interactive Cursor Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-multiply"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Floating Icons */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={index}
            className={`absolute ${element.color} ${element.size}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 3,
              delay: element.delay,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
          >
            <Icon className={element.size} />
          </motion.div>
        );
      })}

      {/* Geometric Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-pink-300 to-rose-400 border-4 border-black transform rotate-45 opacity-30 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-yellow-300 to-amber-400 border-4 border-black rounded-full opacity-30 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]"></div>
      <div className="absolute top-1/2 left-4 w-16 h-16 bg-gradient-to-br from-indigo-300 to-blue-400 border-4 border-black transform rotate-12 opacity-30 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]"></div>
      
      {/* Dynamic Star Icon */}
      <div className="absolute top-8 right-8 z-10">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          whileHover={{ scale: 1.5 }}
          className="cursor-pointer"
        >
          <Star className="w-10 h-10 text-black fill-gradient-to-r from-yellow-300 to-amber-400 drop-shadow-lg" />
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 px-8 pt-8 pb-4">
        <div className="max-w-full mx-auto">
          {/* Main Navigation Container */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="relative"
          >
            {/* Elongated Navigation Bar */}
            <div className="w-full bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
              {/* Animated Background Pattern */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 opacity-30"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Top decorative border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"></div>
              
              <div className="relative z-10 flex items-center justify-between px-8 py-6">
                {/* Logo/Brand Section */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transform -rotate-3">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                      className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 border-2 border-black"
                      animate={{ rotate: 45, scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-black tracking-tighter leading-none">VISIO</span>
                    <span className="text-sm font-bold text-gray-600 tracking-wider">CRAFT</span>
                  </div>
                </motion.div>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center">
                  <div className="flex items-center space-x-1 bg-gray-50 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-2 transform -rotate-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        whileHover={{ 
                          y: -6,
                          scale: 1.02,
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative"
                      >
                        <Button
                          variant="ghost"
                          className={`
                            px-8 py-4 text-sm font-black border-2 border-transparent
                            hover:border-black transition-all duration-300 rounded-none
                            relative overflow-hidden transform hover:rotate-1
                            ${item.active 
                              ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-black' 
                              : 'text-black hover:bg-white'
                            }
                          `}
                        >
                          {/* Dynamic hover background */}
                          {!item.active && (
                            <motion.div
                              className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-80`}
                              initial={{ scale: 0, rotate: 180 }}
                              whileHover={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 0.4 }}
                            />
                          )}
                          
                          {/* Active tab indicator */}
                          {item.active && (
                            <>
                              <motion.div
                                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400"
                                layoutId="activeTop"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                              />
                              <motion.div
                                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-purple-400"
                                layoutId="activeBottom"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                              />
                            </>
                          )}
                          
                          <span className={`relative z-10 ${item.active ? 'text-white' : item.textColor} group-hover:text-black`}>
                            {item.name}
                          </span>

                          {/* Corner decorations */}
                          {item.active && (
                            <>
                              <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-400 transform rotate-45"></div>
                              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-pink-400 transform rotate-45"></div>
                            </>
                          )}
                        </Button>

                        {/* Hover effect underline */}
                        {!item.active && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center space-x-4">
                  {/* Search Icon (Desktop) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    className="hidden lg:block"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-12 h-12 bg-gradient-to-br from-cyan-300 to-blue-300 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 rounded-none"
                    >
                      <Star className="w-5 h-5 text-black" />
                    </Button>
                  </motion.div>

                  {/* CTA Button (Desktop) */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden lg:block"
                  >
                    <Button
                      className="
                        bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 
                        hover:from-yellow-500 hover:via-orange-500 hover:to-red-500
                        text-black font-black px-8 py-3 border-3 border-black 
                        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                        transition-all duration-300 rounded-none relative overflow-hidden group
                        text-lg tracking-wide
                      "
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-30"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10 flex items-center">
                        GET STARTED
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-5 h-5 ml-3" />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>

                  {/* Mobile Navigation */}
                  <div className="lg:hidden flex items-center space-x-3">
                    {/* Mobile CTA */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        className="
                          bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold px-6 py-3
                          border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                          hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 rounded-none
                        "
                      >
                        START
                      </Button>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                      <SheetTrigger asChild>
                        <motion.div 
                          initial={{ opacity: 0, rotate: -180 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          whileHover={{ 
                            rotate: 180,
                            scale: 1.1
                          }} 
                          whileTap={{ scale: 0.9 }}
                          className="group"
                        >
                          <Button 
                            variant="outline" 
                            size="icon"
                            className="
                              w-14 h-14 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                              bg-gradient-to-br from-purple-300 via-pink-300 to-red-300
                              hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                              transition-all duration-300 rounded-none relative overflow-hidden
                            "
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-blue-300 opacity-0 group-hover:opacity-100"
                              transition={{ duration: 0.3 }}
                            />
                            <Menu className="h-7 w-7 text-black relative z-10 group-hover:rotate-90 transition-transform duration-300" />
                          </Button>
                        </motion.div>
                      </SheetTrigger>
                      <SheetContent 
                        side="right" 
                        className="
                          w-96 bg-gradient-to-br from-white via-purple-50 to-pink-50 
                          border-l-4 border-black shadow-[-12px_0px_0px_0px_rgba(0,0,0,1)]
                        "
                      >
                        <div className="flex flex-col h-full">
                          {/* Mobile Header */}
                          <div className="flex items-center justify-center p-8 border-b-4 border-black mb-8 bg-gradient-to-r from-purple-100 to-pink-100">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 border-3 border-black flex items-center justify-center transform rotate-12">
                                <Sparkles className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-2xl font-black text-black">VISIO</span>
                                <span className="text-xs font-bold text-gray-600">CRAFT</span>
                              </div>
                            </div>
                          </div>

                          {/* Mobile Navigation Items */}
                          <div className="flex flex-col space-y-3 px-6">
                            {navItems.map((item, index) => (
                              <motion.div
                                key={item.name}
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ 
                                  delay: index * 0.1, 
                                  type: "spring", 
                                  bounce: 0.4 
                                }}
                                whileHover={{ x: 12, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <Button
                                  variant="ghost"
                                  className={`
                                    w-full justify-start text-xl font-black py-6 px-8
                                    border-3 border-transparent hover:border-black
                                    transition-all duration-300 rounded-none relative overflow-hidden
                                    ${item.active 
                                      ? 'bg-black text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' 
                                      : 'text-black hover:bg-white'
                                    }
                                  `}
                                >
                                  {!item.active && (
                                    <motion.div
                                      className={`absolute inset-0 ${item.color} opacity-0 hover:opacity-30`}
                                      transition={{ duration: 0.3 }}
                                    />
                                  )}
                                  <span className="relative z-10 flex items-center justify-between w-full">
                                    {item.name}
                                    <ArrowRight className="w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                                  </span>
                                </Button>
                              </motion.div>
                            ))}
                          </div>

                          {/* Mobile Footer CTA */}
                          <div className="mt-auto p-6 border-t-4 border-black bg-gradient-to-r from-yellow-100 to-orange-100">
                            <motion.div
                              initial={{ y: 50, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 1 }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button
                                className="
                                  w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600
                                  text-white font-black text-xl py-6 border-4 border-black
                                  shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                                  transition-all duration-300 rounded-none
                                "
                              >
                                GET STARTED TODAY
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </div>
              
              {/* Bottom decorative border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
            </div>

            {/* Floating decorative elements around navbar */}
            <motion.div
              className="absolute -top-2 left-8 w-4 h-4 bg-yellow-400 border-2 border-black transform rotate-45"
              animate={{ rotate: [45, 90, 45], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-2 right-8 w-4 h-4 bg-pink-400 border-2 border-black rounded-full"
              animate={{ y: [0, -8, 0], scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <motion.div 
        style={{ y }}
        className="relative z-10 container mx-auto px-6 pt-20 pb-32"
      >
        {/* Main Heading */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-9xl font-black text-black mb-10 leading-tight relative"
          >
            <span className="inline-block">Welcome to Our</span>{' '}
            <motion.span 
              className="relative inline-block"
              whileHover={{ 
                rotate: [-2, 2, -2], 
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 border-4 border-black px-6 py-3 transform -rotate-2 inline-block shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                Amazing
              </span>
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  rotate: { duration: 4, repeat: Infinity },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <Sparkles className="w-8 h-8 text-purple-500 fill-purple-400" />
              </motion.div>
            </motion.span>{' '}
            <span className="inline-block">Website!</span>
            
            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-black"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 1, duration: 1 }}
            />
          </motion.h1>
        </div>

        {/* Hero Description Cards */}
        <div className="max-w-6xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-10"
          >
            {/* First Description Card */}
            <motion.div
              whileHover={{ 
                x: -8, 
                y: -8,
                rotate: 1,
                scale: 1.02
              }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-10 transition-all duration-300 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 bg-black opacity-10 rounded-full"
                  animate={{ 
                    scale: [1, 2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <p className="text-2xl md:text-3xl font-black text-black text-center leading-relaxed relative z-10">
                  This is our incredible home page where you can find everything you need!
                </p>
                <motion.div
                  className="absolute -bottom-2 -right-2 w-6 h-6 bg-black"
                  animate={{ rotate: 45 }}
                />
              </div>
            </motion.div>

            {/* Second Description Card */}
            <motion.div
              whileHover={{ 
                x: -8, 
                y: -8,
                rotate: -1,
                scale: 1.02
              }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-emerald-300 via-teal-300 to-cyan-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-10 transition-all duration-300 relative overflow-hidden">
                <motion.div
                  className="absolute bottom-0 left-0 w-20 h-20 bg-black opacity-10 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    x: [0, 10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <p className="text-xl md:text-2xl font-bold text-black text-center leading-relaxed relative z-10">
                  We offer the best services in the world and our team is absolutely fantastic at what they do. 
                  You won't find better quality anywhere else!
                </p>
                <motion.div
                  className="absolute -top-2 -left-2 w-6 h-6 bg-black"
                  animate={{ rotate: -45 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-28"
        >
          <motion.div
            whileHover={{ 
              x: -12, 
              y: -12,
              scale: 1.05,
              rotate: [0, -2, 2, 0]
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.6 }}
            className="inline-block group relative"
          >
            <Button 
              size="lg"
              className="
                bg-gradient-to-r from-red-300 via-pink-300 to-purple-300 hover:from-red-400 hover:via-pink-400 hover:to-purple-400 
                text-black font-black text-2xl px-20 py-10 
                border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] 
                group-hover:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] 
                transition-all duration-300 rounded-none uppercase tracking-wider
                relative overflow-hidden
              "
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 group-hover:opacity-30"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <Sparkles className="w-8 h-8 mr-6 group-hover:rotate-180 transition-transform duration-500 relative z-10" />
              <span className="relative z-10">Click Here for Surprises!</span>
              <ArrowRight className="w-8 h-8 ml-6 group-hover:translate-x-4 transition-transform duration-300 relative z-10" />
              
              {/* Floating particles on hover */}
              <motion.div
                className="absolute top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [-20, -40, -20],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0,
                }}
              />
              <motion.div
                className="absolute top-0 right-0 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [-20, -50, -20],
                  x: [0, -15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
            </Button>
          </motion.div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            whileHover={{ 
              x: -8, 
              y: -8,
              scale: 1.02,
              rotate: [0, 1, -1, 0]
            }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="group mb-16 relative"
          >
            <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] p-8 transition-all duration-300 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-400"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black text-center uppercase tracking-wider relative z-10">
                Why Choose Us?
              </h2>
              <motion.div
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-black transform rotate-45"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [45, 90, 45]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50, rotate: -10 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1 + index * 0.2,
                    type: "spring",
                    bounce: 0.4
                  }}
                  whileHover={{ 
                    x: -6, 
                    y: -6,
                    scale: 1.05,
                    rotate: [0, 2, -2, 0]
                  }}
                  className="group relative"
                >
                  <div className={`${feature.color} border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-10 transition-all duration-300 h-full relative overflow-hidden`}>
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 bg-white opacity-20 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <div className="flex flex-col items-center text-center relative z-10">
                      <motion.div 
                        className={`mb-6 p-4 ${feature.iconBg} border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <span className="text-2xl font-black text-black leading-tight">
                        {feature.title}
                      </span>
                    </div>
                    
                    {/* Corner decorations */}
                    <motion.div
                      className="absolute -bottom-1 -left-1 w-4 h-4 bg-black"
                      animate={{ rotate: 45 }}
                    />
                    <motion.div
                      className="absolute -top-1 -right-1 w-4 h-4 bg-black"
                      animate={{ rotate: 45 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Bottom Decorative Elements */}
      <motion.div 
        className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-pink-300 to-rose-400 border-4 border-black transform rotate-45 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        animate={{ 
          rotate: [45, 90, 45],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-br from-emerald-300 to-teal-400 border-4 border-black rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-32 right-32 w-8 h-8 bg-gradient-to-br from-yellow-300 to-orange-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        animate={{ 
          rotate: [0, 180, 360],
          x: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </div>
  );
};

export default Hero;