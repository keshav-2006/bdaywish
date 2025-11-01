'use client'

import { useRef } from 'react'
import LandingPage from './components/LandingPage'
import PhotoGallery from './components/PhotoGallery'
import LoveLetterSection from './components/LoveLetterSection'
import InteractiveFeature from './components/InteractiveFeature'
import FinalMessage from './components/FinalMessage'
import MusicPlayer from './components/MusicPlayer'
import { motion } from 'framer-motion'
import { Music } from 'lucide-react'

export default function Home() {
  const photoGalleryRef = useRef<HTMLElement>(null)
  const loveLetterRef = useRef<HTMLElement>(null)
  const interactiveRef = useRef<HTMLElement>(null)
  const finalMessageRef = useRef<HTMLElement>(null)

  const scrollToPhotoGallery = () => {
    photoGalleryRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToLoveLetter = () => {
    loveLetterRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToInteractive = () => {
    interactiveRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToFinalMessage = () => {
    finalMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="relative">
      {/* Music Player Indicator */}
      <motion.div
        className="fixed top-4 left-4 z-40 bg-gradient-to-r from-cute-pink to-cute-purple text-white px-4 py-2 rounded-full shadow-lg border border-white/30"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="flex items-center space-x-2">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Music className="w-4 h-4" />
          </motion.div>
          <span className="font-poppins text-sm font-medium">🎵 Music Available</span>
        </div>
      </motion.div>

      {/* Landing Page */}
      <LandingPage 
        name="Tinniiii" 
        onScrollToNext={scrollToPhotoGallery}
      />

      {/* Photo Gallery */}
      <section ref={photoGalleryRef}>
        <PhotoGallery />
      </section>

      {/* Love Letter */}
      <section ref={loveLetterRef}>
        <LoveLetterSection />
      </section>

      {/* Interactive Features */}
      <section ref={interactiveRef}>
        <InteractiveFeature />
      </section>

      {/* Final Message */}
      <section ref={finalMessageRef}>
        <FinalMessage onScrollToTop={scrollToTop} />
      </section>

      {/* Music Player */}
      <MusicPlayer />
    </main>
  )
}
