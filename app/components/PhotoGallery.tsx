'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Heart, Camera } from 'lucide-react'
import Image from 'next/image'

interface Photo {
  id: number
  src: string
  caption: string
  alt: string
}

interface PhotoGalleryProps {
  photos?: Photo[]
}

export default function PhotoGallery({ 
  photos = [
    { id: 1, src: '/photos/photo1.jpg', caption: 'Low quality images with high quality bond✨', alt: 'Beautiful memories' },
    { id: 2, src: '/photos/photo2.jpg', caption: 'Low quality images with high quality bond✨', alt: 'Precious moments' },
  ]
}: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (photo: Photo, index: number) => {
    setSelectedPhoto(photo)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedPhoto(null)
  }

  const nextPhoto = () => {
    const nextIndex = (currentIndex + 1) % photos.length
    setCurrentIndex(nextIndex)
    setSelectedPhoto(photos[nextIndex])
  }

  const prevPhoto = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length
    setCurrentIndex(prevIndex)
    setSelectedPhoto(photos[prevIndex])
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section className="min-h-screen py-16 px-4 md:px-8 bg-gradient-to-br from-soft-pink via-soft-lavender to-soft-mint">
      <div className="max-w-7xl mx-auto">
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
            Our Beautiful Memories 📸💕
          </h2>
          <p className="font-poppins text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
             style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>
            Low quality images with high quality bond✨
          </p>
        </motion.div>

        {/* Enhanced Photo Grid with better responsiveness */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="group relative overflow-hidden rounded-3xl cute-shadow hover:cute-shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(photo, index)}
            >
              {/* Enhanced Photo Display */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Enhanced Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cute-pink/0 to-cute-purple/0 group-hover:from-cute-pink/30 group-hover:to-cute-purple/30 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.2 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
                  </motion.div>
                </div>
              </div>

              {/* Enhanced Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
                <p className="font-poppins text-white text-sm md:text-base font-medium drop-shadow-lg">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              {/* Enhanced Backdrop */}
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
              
              {/* Enhanced Modal Content */}
              <motion.div
                className="relative max-w-5xl max-h-[90vh] bg-white rounded-3xl cute-shadow-lg overflow-hidden"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Enhanced Close Button */}
                <motion.button
                  className="absolute top-4 right-4 z-10 w-12 h-12 bg-cute-pink/80 hover:bg-cute-pink text-white rounded-full flex items-center justify-center transition-all duration-300 cute-shadow"
                  onClick={closeModal}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>

                {/* Enhanced Navigation Buttons */}
                <motion.button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-cute-purple/80 hover:bg-cute-purple text-white rounded-full flex items-center justify-center transition-all duration-300 cute-shadow"
                  onClick={prevPhoto}
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-cute-purple/80 hover:bg-cute-purple text-white rounded-full flex items-center justify-center transition-all duration-300 cute-shadow"
                  onClick={nextPhoto}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>

                {/* Enhanced Photo Content */}
                <div className="aspect-video relative">
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 80vw"
                  />
                </div>

                {/* Enhanced Photo Info */}
                <div className="p-6 bg-gradient-to-r from-soft-pink/30 to-soft-lavender/30">
                  <h3 className="font-dancing text-2xl md:text-3xl text-gray-800 mb-2">
                    {selectedPhoto.caption}
                  </h3>
                  <p className="font-poppins text-gray-600 text-lg">
                    {selectedPhoto.alt}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-poppins text-sm md:text-base text-gray-500">
                      {currentIndex + 1} of {photos.length}
                    </span>
                    <div className="flex space-x-2 items-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Heart className="w-5 h-5 md:w-6 md:h-6 text-cute-pink" />
                      </motion.div>
                      <span className="font-poppins text-sm md:text-base text-gray-600">Loved</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
