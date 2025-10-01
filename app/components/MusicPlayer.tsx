'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

interface MusicPlayerProps {
  src?: string
  autoplay?: boolean
}

export default function MusicPlayer({ 
  src = '/music/happy-birthday-334876.mp3', 
  autoplay = true 
}: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  // Try to autoplay on mount (will work if browser allows)
  useEffect(() => {
    const tryAutoplay = async () => {
      if (!audioRef.current) return
      if (!autoplay) return
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (err) {
        // Autoplay blocked by browser; show a gentle prompt
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 3000)
      }
    }
    tryAutoplay()

    // Fallback: start on first user interaction
    const resumeOnInteract = async () => {
      if (!audioRef.current) return
      if (isPlaying) return
      try {
        await audioRef.current.play()
        setIsPlaying(true)
        window.removeEventListener('click', resumeOnInteract)
        window.removeEventListener('touchstart', resumeOnInteract)
        window.removeEventListener('keydown', resumeOnInteract)
        window.removeEventListener('mousemove', resumeOnInteract)
      } catch {}
    }

    window.addEventListener('click', resumeOnInteract, { once: true })
    window.addEventListener('touchstart', resumeOnInteract, { once: true })
    window.addEventListener('keydown', resumeOnInteract, { once: true })
    window.addEventListener('mousemove', resumeOnInteract, { once: true })

    // Fallback: when tab becomes visible again
    const onVisibility = async () => {
      if (document.visibilityState === 'visible') {
        resumeOnInteract()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      window.removeEventListener('click', resumeOnInteract)
      window.removeEventListener('touchstart', resumeOnInteract)
      window.removeEventListener('keydown', resumeOnInteract)
      window.removeEventListener('mousemove', resumeOnInteract)
      document.removeEventListener('visibilitychange', onVisibility)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause()
          setIsPlaying(false)
        } else {
          await audioRef.current.play()
          setIsPlaying(true)
          // Show notification when music starts
          setShowNotification(true)
          setTimeout(() => setShowNotification(false), 3000)
        }
      } catch (error) {
        console.log('Audio playback failed:', error)
        // Show user-friendly message
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 3000)
      }
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="auto"
        autoPlay={autoplay}
        playsInline
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          console.log('Audio file not found. Please check the music file path.')
          setShowNotification(true)
          setTimeout(() => setShowNotification(false), 3000)
        }}
        onLoadStart={() => console.log('Loading music...')}
        onCanPlay={() => console.log('Music ready to play')}
      />
      
      {/* Floating Music Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed top-4 right-4 z-50 bg-gradient-to-r from-cute-pink to-cute-purple text-white px-4 py-2 rounded-full shadow-lg border border-white/30"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                🎵
              </motion.div>
              <span className="font-poppins text-sm font-medium">
                {isPlaying ? 'Music Started!' : 'Click to play music'}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <div className="relative">
          {/* Enhanced Music Player Button with better visibility */}
          <motion.button
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-cute-pink via-cute-purple to-cute-blue cute-shadow-lg flex items-center justify-center text-white hover:cute-shadow-lg transition-all duration-300 romantic-glow border-2 border-white/30"
            onClick={() => { setShowControls(!showControls); togglePlay(); }}
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 10px 25px rgba(255, 154, 158, 0.4)",
                "0 15px 35px rgba(255, 154, 158, 0.6)",
                "0 10px 25px rgba(255, 154, 158, 0.4)"
              ]
            }}
            transition={{ 
              scale: { duration: 2, repeat: Infinity },
              boxShadow: { duration: 2, repeat: Infinity }
            }}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 md:w-8 md:h-8 drop-shadow-lg" />
            ) : (
              <Play className="w-6 h-6 md:w-8 md:h-8 ml-1 drop-shadow-lg" />
            )}
          </motion.button>
          
          {/* Pulsing ring effect for better visibility */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cute-pink/50 pointer-events-none"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Music note indicator */}
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-cute-yellow rounded-full flex items-center justify-center text-xs font-bold text-white pointer-events-none"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ♪
          </motion.div>

          <AnimatePresence>
            {showControls && (
              <motion.div
                className="absolute bottom-24 right-0 bg-white/40 backdrop-blur-md rounded-2xl p-4 cute-shadow-lg border border-white/50 min-w-[240px] md:min-w-[260px]"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="space-y-4">
                  {/* Music Title */}
                  <div className="text-center">
                    <h3 className="font-dancing text-lg text-gray-800 mb-1">🎵 Birthday Music</h3>
                    <p className="font-poppins text-sm text-gray-600">Happy Birthday Song</p>
                  </div>
                  
                  {/* Play/Pause Button */}
                  <div className="flex justify-center">
                    <motion.button
                      className="px-6 py-3 cute-button text-white rounded-full text-base font-medium flex items-center space-x-2"
                      onClick={togglePlay}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-5 h-5" />
                          <span>Pause Music</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5" />
                          <span>Play Music</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                  
                  {/* Volume Controls */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Volume</span>
                      <motion.button
                        onClick={toggleMute}
                        className="p-2 rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 text-gray-600" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-gray-600" />
                        )}
                      </motion.button>
                    </div>
                    
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-full h-3 bg-white/50 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="text-center">
                    <motion.div
                      className="inline-flex items-center space-x-2 text-sm text-gray-600"
                      animate={{ opacity: isPlaying ? [0.6, 1, 0.6] : 0.6 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-cute-pink' : 'bg-gray-400'}`} />
                      <span>{isPlaying ? 'Now Playing' : 'Paused'}</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FF9A9E, #FECFEF);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(255, 154, 158, 0.4);
          transition: all 0.3s ease;
        }
        
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 12px rgba(255, 154, 158, 0.6);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FF9A9E, #FECFEF);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 8px rgba(255, 154, 158, 0.4);
          transition: all 0.3s ease;
        }
        
        .slider::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 12px rgba(255, 154, 158, 0.6);
        }
      `}</style>
    </>
  )
}
