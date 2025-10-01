'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles, RotateCcw, Wind } from 'lucide-react'

interface Balloon {
  id: number
  x: number
  y: number
  color: string
  size: number
}

interface ConfettiParticle {
  id: number
  x: number
  y: number
  color: string
  rotation: number
}

export default function InteractiveFeature() {
  const [activeFeature, setActiveFeature] = useState<'balloons' | 'cake'>('cake')
  const [balloons, setBalloons] = useState<Balloon[]>([])
  const [confetti, setConfetti] = useState<ConfettiParticle[]>([])
  const [candlesLit, setCandlesLit] = useState(true)
  const [showWishMessage, setShowWishMessage] = useState(false)

  const balloonColors = useMemo(() => [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', 
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
  ], [])

  const confettiColors = useMemo(() => [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', 
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
  ], [])

  // Generate balloons
  const generateBalloons = useCallback(() => {
    const newBalloons: Balloon[] = []
    for (let i = 0; i < 12; i++) {
      newBalloons.push({
        id: i,
        x: Math.random() * 80 + 10, // 10-90% of container width
        y: Math.random() * 20 + 70, // 70-90% of container height
        color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
        size: Math.random() * 20 + 30 // 30-50px
      })
    }
    setBalloons(newBalloons)
  }, [balloonColors])

  // Pop balloon and create confetti
  const popBalloon = (balloonId: number) => {
    const balloon = balloons.find(b => b.id === balloonId)
    if (balloon) {
      // Remove balloon
      setBalloons(prev => prev.filter(b => b.id !== balloonId))
      
      // Create confetti
      const newConfetti: ConfettiParticle[] = []
      for (let i = 0; i < 8; i++) {
        newConfetti.push({
          id: Date.now() + i,
          x: balloon.x,
          y: balloon.y,
          color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
          rotation: Math.random() * 360
        })
      }
      setConfetti(prev => [...prev, ...newConfetti])
      
      // Remove confetti after animation
      setTimeout(() => {
        setConfetti(prev => prev.filter(c => !newConfetti.includes(c)))
      }, 3000)
    }
  }

  // Blow out candles
  const blowOutCandles = () => {
    setCandlesLit(false)
    setShowWishMessage(true)
    
    // Create confetti for cake
    const newConfetti: ConfettiParticle[] = []
    for (let i = 0; i < 15; i++) {
      newConfetti.push({
        id: Date.now() + i,
        x: 50 + (Math.random() - 0.5) * 20, // Center around cake
        y: 30 + (Math.random() - 0.5) * 10,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        rotation: Math.random() * 360
      })
    }
    setConfetti(prev => [...prev, ...newConfetti])
    
    // Remove confetti after animation
    setTimeout(() => {
      setConfetti(prev => prev.filter(c => !newConfetti.includes(c)))
    }, 3000)
  }

  // Reset candles
  const resetCandles = () => {
    setCandlesLit(true)
    setShowWishMessage(false)
  }

  // Initialize balloons on mount
  useEffect(() => {
    generateBalloons()
  }, [generateBalloons])

  return (
    <section className="min-h-screen py-16 px-4 md:px-8 bg-gradient-to-br from-soft-mint via-soft-pink to-soft-lavender relative overflow-hidden">
      {/* Enhanced Section Header */}
      <motion.div
        className="text-center mb-12 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-dancing text-responsive-5xl text-gray-800 mb-4 cute-shadow-lg"
            style={{ textShadow: '2px 2px 4px rgba(255, 182, 193, 0.3)' }}>
          Interactive Surprises 🎉✨
        </h2>
        <p className="font-poppins text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
           style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>
          Let&apos;s have some fun! Choose your favorite interactive feature below.
        </p>
      </motion.div>

      {/* Enhanced Feature Toggle */}
      <motion.div
        className="flex justify-center mb-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-white/60 backdrop-blur-sm rounded-full p-2 cute-shadow-lg">
          <motion.button
            className={`px-6 py-3 rounded-full font-poppins font-medium transition-all duration-300 transform hover:scale-105 ${
              activeFeature === 'balloons'
                ? 'bg-cute-pink text-white cute-shadow-lg'
                : 'text-gray-600 hover:text-cute-pink'
            }`}
            onClick={() => setActiveFeature('balloons')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎈 Balloon Pop
          </motion.button>
          <motion.button
            className={`px-6 py-3 rounded-full font-poppins font-medium transition-all duration-300 transform hover:scale-105 ${
              activeFeature === 'cake'
                ? 'bg-cute-pink text-white cute-shadow-lg'
                : 'text-gray-600 hover:text-cute-pink'
            }`}
            onClick={() => setActiveFeature('cake')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎂 Cake Candles
          </motion.button>
        </div>
      </motion.div>

      {/* Interactive Content */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {activeFeature === 'balloons' && (
            <motion.div
              key="balloons"
              className="relative min-h-[400px] bg-white/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 cute-shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <h3 className="font-dancing text-3xl md:text-4xl text-gray-800 mb-2 cute-shadow"
                    style={{ textShadow: '1px 1px 2px rgba(255, 182, 193, 0.3)' }}>
                  Pop the Balloons! 🎈
                </h3>
                <p className="font-poppins text-gray-600 text-lg md:text-xl leading-relaxed">
                  Click on the balloons to pop them and watch the confetti fly!
                </p>
                <motion.button
                  className="mt-4 px-6 py-3 cute-button text-white rounded-full font-poppins font-medium flex items-center space-x-2 mx-auto"
                  onClick={generateBalloons}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset Balloons</span>
                </motion.button>
              </div>

              {/* Enhanced Balloons */}
              <div className="relative h-80">
                {balloons.map((balloon) => (
                  <motion.div
                    key={balloon.id}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${balloon.x}%`,
                      top: `${balloon.y}%`,
                    }}
                    initial={{ scale: 0, y: 100 }}
                    animate={{ 
                      scale: 1, 
                      y: 0,
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => popBalloon(balloon.id)}
                  >
                    <div
                      className="rounded-full cute-shadow-lg hover:cute-shadow-lg transition-all duration-300"
                      style={{
                        width: `${balloon.size}px`,
                        height: `${balloon.size}px`,
                        backgroundColor: balloon.color,
                        boxShadow: `0 4px 15px ${balloon.color}40`,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeFeature === 'cake' && (
            <motion.div
              key="cake"
              className="relative min-h-[400px] bg-white/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 cute-shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <h3 className="font-dancing text-3xl md:text-4xl text-gray-800 mb-2 cute-shadow"
                    style={{ textShadow: '1px 1px 2px rgba(255, 182, 193, 0.3)' }}>
                  Birthday Cake 🎂
                </h3>
                <p className="font-poppins text-gray-600 text-lg md:text-xl leading-relaxed">
                  Blow out the candles and make a wish!
                </p>
              </div>

              {/* Cake */}
              <div className="flex justify-center items-center h-80 relative">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Cake Base */}
                  <div className="w-48 h-32 bg-gradient-to-b from-amber-200 to-amber-300 rounded-lg shadow-lg relative">
                    {/* Cake Layers */}
                    <div className="absolute top-0 left-2 w-44 h-8 bg-gradient-to-b from-pink-200 to-pink-300 rounded-t-lg" />
                    <div className="absolute top-2 left-4 w-40 h-8 bg-gradient-to-b from-rose-200 to-rose-300 rounded-t-lg" />
                    
                    {/* Candles */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {[1, 2, 3, 4, 5].map((candle) => (
                        <div key={candle} className="relative">
                          {/* Candle */}
                          <div className="w-2 h-8 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-full" />
                          
                          {/* Flame */}
                          {candlesLit && (
                            <motion.div
                              className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-b from-yellow-300 to-orange-400 rounded-full"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 5, -5, 0]
                              }}
                              transition={{ 
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced Blow Button */}
                <motion.button
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-8 py-4 cute-button text-white rounded-full font-poppins font-medium flex items-center space-x-2"
                  onClick={blowOutCandles}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!candlesLit}
                >
                  <Wind className="w-5 h-5" />
                  <span className="text-lg">{candlesLit ? 'Blow the Candles 🎂' : 'Candles Blown Out!'}</span>
                </motion.button>

                {/* Enhanced Reset Button */}
                {!candlesLit && (
                  <motion.button
                    className="absolute bottom-8 right-8 px-4 py-2 bg-white/60 text-gray-700 rounded-full font-poppins font-medium hover:bg-white/80 transition-colors flex items-center space-x-2 cute-shadow"
                    onClick={resetCandles}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset</span>
                  </motion.button>
                )}
              </div>

              {/* Enhanced Wish Message */}
              <AnimatePresence>
                {showWishMessage && (
                  <motion.div
                    className="text-center mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="inline-block"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <h4 className="font-dancing text-2xl md:text-3xl text-cute-pink mb-2 cute-shadow"
                          style={{ textShadow: '1px 1px 2px rgba(255, 182, 193, 0.3)' }}>
                        Make a wish! ✨
                      </h4>
                      <p className="font-poppins text-gray-600 text-lg md:text-xl">
                        Your wish will come true! 🌟
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Confetti */}
      <AnimatePresence>
        {confetti.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-3 h-3 rounded-full pointer-events-none"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor: particle.color,
            }}
            initial={{ 
              opacity: 1, 
              scale: 1,
              y: 0,
              rotate: 0
            }}
            animate={{ 
              opacity: 0, 
              scale: 0,
              y: -100,
              rotate: 360
            }}
            transition={{ 
              duration: 3,
              ease: "easeOut"
            }}
          />
        ))}
      </AnimatePresence>
    </section>
  )
}
