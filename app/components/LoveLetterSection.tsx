'use client'

import { motion } from 'framer-motion'
import { Heart, Mail } from 'lucide-react'

interface LoveLetterSectionProps {
  letterContent?: string
}

export default function LoveLetterSection({ 
  letterContent = `My pyaara kuchhuu puchuu,

Happy Birthday! 🎂❤️

Can you believe it's been over 15 years of us being together through life's little adventures? We may not have a thousand photos to prove it, but the truth is, our memories live in something much bigger than pictures. They live in the laughter we've shared, the countless conversations, the way we understand each other without words, and the quiet comfort of just being around one another.

That one photo we have may capture a moment — but my heart carries millions of snapshots of you: your smile, your care, your voice, and the way you make every moment brighter.

You are my best friend, my safe place, my forever person — and today, on your special day, I just want you to know how much you mean to me. Thank you for being my constant all these years, for every unseen memory we've created, and for every little moment that has shaped us.

Here's to more laughter, more adventures, and more moments that don't need a camera to be remembered. Because with you, every second is unforgettable. 💕

And i know you handle a lot of stuff all alone, and you're very tired of all this. But all your hardships will soon come to an end and provide a very sweet and fruitfull result. Just keep patience and always grow in your life💗✨

Happy Birthday once again.
Always yours,
Keshuu`
}: LoveLetterSectionProps) {
  const floatingHearts = Array.from({ length: 6 }, (_, i) => i)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
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
      y: [-15, 15, -15],
      rotate: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="min-h-screen py-16 px-4 md:px-8 bg-gradient-to-br from-soft-peach via-soft-pink to-soft-lavender relative overflow-hidden">
      {/* Enhanced Floating Hearts with more variety */}
      {floatingHearts.map((heart) => (
        <motion.div
          key={heart}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 15}px`,
            color: heart % 4 === 0 ? '#FF9A9E' : heart % 4 === 1 ? '#FECFEF' : heart % 4 === 2 ? '#A8E6CF' : '#FFD3A5',
          }}
          variants={heartVariants}
          animate="float"
          transition={{ delay: heart * 0.8 }}
        >
          <Heart className="w-6 h-6 fill-current drop-shadow-lg" />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Mail className="w-8 h-8 md:w-10 md:h-10 text-cute-pink drop-shadow-lg" />
            </motion.div>
            <h2 className="font-dancing text-responsive-5xl text-gray-800 cute-shadow-lg"
                style={{ textShadow: '2px 2px 4px rgba(255, 182, 193, 0.3)' }}>
              A Letter for You 💌
            </h2>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Mail className="w-8 h-8 md:w-10 md:h-10 text-cute-pink drop-shadow-lg" />
            </motion.div>
          </motion.div>
          <p className="font-poppins text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
             style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>
            Words from my heart to yours, written with love and care.
          </p>
        </motion.div>

        {/* Love Letter */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enhanced Paper Background */}
          <motion.div
            className="relative bg-gradient-to-br from-romantic-cream/95 via-soft-pink/20 to-soft-lavender/20 paper-texture rounded-3xl cute-shadow-lg p-6 md:p-8 lg:p-12 border-4 border-cute-pink/30"
            variants={itemVariants}
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Enhanced Decorative Corner Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-cute-pink/50 rounded-tl-lg cute-shadow" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-cute-purple/50 rounded-tr-lg cute-shadow" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-cute-blue/50 rounded-bl-lg cute-shadow" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-cute-coral/50 rounded-br-lg cute-shadow" />

            {/* Enhanced Letter Content */}
            <motion.div
              className="relative z-10"
              variants={itemVariants}
            >
              <div className="whitespace-pre-line font-dancing text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed px-2"
                   style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>
                {letterContent}
              </div>
            </motion.div>

            {/* Enhanced Decorative Elements */}
            <motion.div 
              className="absolute top-8 right-8 text-cute-pink/40"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart className="w-6 h-6 fill-current drop-shadow-lg" />
            </motion.div>
            <motion.div 
              className="absolute bottom-8 left-8 text-cute-purple/40"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Heart className="w-4 h-4 fill-current drop-shadow-lg" />
            </motion.div>
            <motion.div 
              className="absolute top-1/2 left-8 text-cute-blue/30"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            >
              <Heart className="w-3 h-3 fill-current drop-shadow-lg" />
            </motion.div>
            <motion.div 
              className="absolute top-1/3 right-12 text-cute-coral/30"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              <Heart className="w-5 h-5 fill-current drop-shadow-lg" />
            </motion.div>
          </motion.div>

          {/* Enhanced Paper Shadow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cute-pink/15 to-cute-purple/15 rounded-3xl transform rotate-1 translate-x-2 translate-y-2 -z-10 cute-shadow" />
          <div className="absolute inset-0 bg-gradient-to-br from-cute-blue/10 to-cute-coral/10 rounded-3xl transform rotate-2 translate-x-4 translate-y-4 -z-20 cute-shadow" />
        </motion.div>

        {/* Enhanced Decorative Elements */}
        <motion.div
          className="flex justify-center mt-12 space-x-6 md:space-x-8 flex-wrap gap-4"
          variants={itemVariants}
        >
          {[1, 2, 3, 4, 5].map((heart) => (
            <motion.div
              key={heart}
              className="text-cute-pink/50"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: heart * 0.5 
              }}
            >
              <Heart className="w-6 h-6 md:w-8 md:h-8 fill-current drop-shadow-lg" />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.div
            className="inline-block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-8 h-8 border-2 border-cute-pink/60 rounded-full flex items-center justify-center cute-shadow">
              <motion.div
                className="w-2 h-2 bg-cute-pink rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
