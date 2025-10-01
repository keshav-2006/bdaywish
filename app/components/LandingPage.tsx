'use client'

import { motion } from 'framer-motion'
import { Heart, Sparkles, Star } from 'lucide-react'

interface LandingPageProps {
  name?: string
  onScrollToNext?: () => void
}

export default function LandingPage({ 
  name = "[Her Name]", 
  onScrollToNext 
}: LandingPageProps) {
  const floatingHearts = Array.from({ length: 8 }, (_, i) => i)
  const sparkles = Array.from({ length: 12 }, (_, i) => i)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const heartVariants = {
    float: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const sparkleVariants = {
    twinkle: {
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden lovable-gradient">
      {/* Enhanced Floating Hearts with more variety */}
      {floatingHearts.map((heart) => (
        <motion.div
          key={heart}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 25 + 20}px`,
            color: heart % 3 === 0 ? '#FF9A9E' : heart % 3 === 1 ? '#FECFEF' : '#A8E6CF',
          }}
          variants={heartVariants}
          animate="float"
          transition={{ delay: heart * 0.5 }}
        >
          <Heart className="w-6 h-6 fill-current drop-shadow-lg" />
        </motion.div>
      ))}

      {/* Enhanced Sparkles with more colors */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            color: sparkle % 4 === 0 ? '#FFD3A5' : sparkle % 4 === 1 ? '#FFAAA5' : sparkle % 4 === 2 ? '#A8E6CF' : '#FECFEF',
          }}
          variants={sparkleVariants}
          animate="twinkle"
          transition={{ delay: sparkle * 0.3 }}
        >
          <Sparkles className="w-5 h-5 drop-shadow-lg" />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        className="text-center px-8 max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Main Heading with better responsiveness */}
        <motion.h1
          className="font-dancing text-responsive-6xl text-gray-800 mb-6 cute-shadow-lg"
          variants={itemVariants}
          style={{ textShadow: '2px 2px 4px rgba(255, 182, 193, 0.3)' }}
        >
          Happy Birthday {name} 🎂💖
        </motion.h1>

        {/* Enhanced Subheading with better readability */}
        <motion.p
          className="font-poppins text-responsive-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed px-4"
          variants={itemVariants}
          style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}
        >
          Today is all about celebrating the most amazing person in my life. 
          You bring so much joy and love into this world, and I'm grateful for every moment with you.
        </motion.p>

        {/* Enhanced Decorative Stars with more variety */}
        <motion.div
          className="flex justify-center space-x-4 mb-8 flex-wrap gap-2"
          variants={itemVariants}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              className="text-cute-pink"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear",
                delay: star * 0.2
              }}
            >
              <Star className="w-6 h-6 md:w-8 md:h-8 fill-current drop-shadow-lg" />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action Button */}
        <motion.button
          className="group relative px-8 py-4 cute-button text-white font-poppins font-semibold text-lg rounded-full cute-shadow-lg hover:cute-shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cute-pink/30 romantic-glow"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onScrollToNext}
        >
          <span className="relative z-10 flex items-center space-x-2">
            <span className="text-lg md:text-xl">Click for a Surprise ✨</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          </span>
          
          {/* Enhanced Button Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cute-pink to-cute-purple opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-300" />
        </motion.button>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cute-pink/60 rounded-full flex justify-center cute-shadow">
            <motion.div
              className="w-1 h-3 bg-cute-pink rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Background Pattern with more variety */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-cute-pink/30 rounded-full cute-shadow" />
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-cute-purple/30 rounded-full cute-shadow" />
        <div className="absolute bottom-32 left-32 w-28 h-28 border-2 border-cute-blue/30 rounded-full cute-shadow" />
        <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-cute-coral/30 rounded-full cute-shadow" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-cute-yellow/30 rounded-full cute-shadow" />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-cute-pink/30 rounded-full cute-shadow" />
      </div>
    </section>
  )
}
