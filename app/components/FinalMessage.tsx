'use client'

import { motion } from 'framer-motion'
import { Heart, Star, ArrowUp, Sparkles } from 'lucide-react'

interface FinalMessageProps {
  onScrollToTop?: () => void
}

export default function FinalMessage({ onScrollToTop }: FinalMessageProps) {
  const floatingHearts = Array.from({ length: 10 }, (_, i) => i)
  const stars = Array.from({ length: 8 }, (_, i) => i)

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
      y: [-20, 20, -20],
      rotate: [-10, 10, -10],
      scale: [1, 1.2, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const starVariants = {
    twinkle: {
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center lovable-gradient relative overflow-hidden">
      {/* Enhanced Floating Hearts with more variety */}
      {floatingHearts.map((heart) => (
        <motion.div
          key={heart}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 30 + 20}px`,
            color: heart % 5 === 0 ? '#FF9A9E' : heart % 5 === 1 ? '#FECFEF' : heart % 5 === 2 ? '#A8E6CF' : heart % 5 === 3 ? '#FFD3A5' : '#FFAAA5',
          }}
          variants={heartVariants}
          animate="float"
          transition={{ delay: heart * 0.8 }}
        >
          <Heart className="w-8 h-8 fill-current drop-shadow-lg" />
        </motion.div>
      ))}

      {/* Enhanced Twinkling Stars with more colors */}
      {stars.map((star) => (
        <motion.div
          key={star}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            color: star % 4 === 0 ? '#FFD3A5' : star % 4 === 1 ? '#FFAAA5' : star % 4 === 2 ? '#A8E6CF' : '#FECFEF',
          }}
          variants={starVariants}
          animate="twinkle"
          transition={{ delay: star * 0.5 }}
        >
          <Star className="w-6 h-6 fill-current drop-shadow-lg" />
        </motion.div>
      ))}

      {/* Enhanced Main Content */}
      <motion.div
        className="text-center px-4 md:px-8 max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Large Heart Animation */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="text-cute-pink"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 fill-current mx-auto drop-shadow-lg" />
          </motion.div>
        </motion.div>

        {/* Enhanced Main Message */}
        <motion.h1
          className="font-dancing text-responsive-6xl text-gray-800 mb-6 cute-shadow-lg"
          variants={itemVariants}
          style={{ textShadow: '2px 2px 4px rgba(255, 182, 193, 0.3)' }}
        >
          I'm so lucky to have you ❤️
        </motion.h1>

        {/* Enhanced Secondary Message */}
        <motion.p
          className="font-poppins text-responsive-xl text-gray-700 mb-8"
          variants={itemVariants}
          style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}
        >
          Happy Birthday once again!
        </motion.p>

        {/* Enhanced Decorative Elements */}
        <motion.div
          className="flex justify-center space-x-4 md:space-x-6 mb-12 flex-wrap gap-4"
          variants={itemVariants}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((star) => (
            <motion.div
              key={star}
              className="text-cute-pink"
              animate={{ 
                rotate: 360,
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: star * 0.3
              }}
            >
              <Star className="w-6 h-6 md:w-8 md:h-8 fill-current drop-shadow-lg" />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Love Message */}
        <motion.div
          className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 mb-12 cute-shadow-lg border border-white/30"
          variants={itemVariants}
          whileHover={{ scale: 1.02, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.p
            className="font-dancing text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed px-2"
            animate={{ 
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}
          >
            "You are the sunshine that brightens my days,<br />
            the laughter that fills my heart with joy,<br />
            and the love that makes everything worthwhile.<br />
            <br />
            Today and every day, I celebrate you! 🌟"
          </motion.p>
        </motion.div>

        {/* Enhanced Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          variants={itemVariants}
        >
          <motion.button
            className="group px-6 md:px-8 py-4 cute-button text-white font-poppins font-semibold text-lg rounded-full flex items-center space-x-3"
            onClick={onScrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
            <span className="text-lg md:text-xl">Start Over</span>
            <Sparkles className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="group px-6 md:px-8 py-4 bg-white/60 backdrop-blur-sm text-gray-700 font-poppins font-semibold text-lg rounded-full cute-shadow hover:cute-shadow-lg transition-all duration-300 flex items-center space-x-3 border border-white/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-5 h-5 text-cute-pink" />
            <span className="text-lg md:text-xl">Share the Love</span>
          </motion.button>
        </motion.div>

        {/* Enhanced Decorative Border */}
        <motion.div
          className="mt-12 flex justify-center"
          variants={itemVariants}
        >
          <div className="flex space-x-2 md:space-x-4 flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((heart) => (
              <motion.div
                key={heart}
                className="text-cute-pink/50"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: heart * 0.2,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current drop-shadow-lg" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Final Message */}
        <motion.div
          className="mt-8"
          variants={itemVariants}
        >
          <motion.p
            className="font-poppins text-lg md:text-xl text-gray-600"
            animate={{ 
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}
          >
            Made with ❤️ and lots of love
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-cute-pink/30 rounded-full cute-shadow" />
        <div className="absolute top-40 right-32 w-32 h-32 border-2 border-cute-purple/30 rounded-full cute-shadow" />
        <div className="absolute bottom-32 left-32 w-36 h-36 border-2 border-cute-blue/30 rounded-full cute-shadow" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-cute-coral/30 rounded-full cute-shadow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-cute-yellow/30 rounded-full cute-shadow" />
        <div className="absolute top-1/3 left-1/3 w-20 h-20 border-2 border-cute-pink/20 rounded-full cute-shadow" />
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 border-2 border-cute-purple/20 rounded-full cute-shadow" />
      </div>
    </section>
  )
}
