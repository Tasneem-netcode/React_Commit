import React from 'react'
import { motion } from 'framer-motion'

const PlacesCard = ({ place, isActive }) => {
  return (
    <div className="relative w-full h-full bg-gray-900 rounded-3xl overflow-hidden shadow-2xl isolator">
      {/* Background Image with Parallax-like Zoom */}
      <motion.img
        src={place.image}
        alt={place.name}
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ scale: isActive ? 1.1 : 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Top Section: Mood & Rating */}
        <motion.div 
          className="flex justify-between items-start"
          initial={false}
          animate={{ y: isActive ? 0 : -20, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold text-white uppercase tracking-wider shadow-lg">
            {place.mood}
          </span>
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/10">
            <span className="text-yellow-400 text-sm">★</span>
            <span className="text-white text-sm font-bold">{place.rating}</span>
          </div>
        </motion.div>

        {/* Bottom Section: Info */}
        <motion.div 
          className="space-y-2"
          initial={false}
          animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold text-white leading-tight drop-shadow-lg">
            {place.name}
          </h2>
          <div className="flex justify-between items-center text-gray-200 text-sm font-medium">
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{place.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              <span>{place.distance}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PlacesCard