import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import places from "../data/places"
import PlacesCard from "./PlacesCard"

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // check for mobile screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize() // initial check
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1 < places.length ? prev + 1 : 0))
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : places.length - 1))
  }

  // Swipe handler
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      handleNext()
    } else if (info.offset.x > 100) {
      handlePrev()
    }
  }

  // Visual constants
  const CARD_WIDTH = isMobile ? 260 : 320
  const SPACING = isMobile ? 180 : 260

  return (
    <div className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col items-center justify-center font-sans">
      {/* Dynamic Background */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={places[activeIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={places[activeIndex].image}
            alt="bg"
            className="w-full h-full object-cover blur-3xl scale-110"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black z-0 pointer-events-none" />

      {/* Header */}
      <div className="absolute top-6 md:top-10 left-0 w-full z-20 text-center px-4">
        <motion.h1 
          key={`title-${activeIndex}`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-6xl font-extrabold text-white tracking-widest uppercase drop-shadow-lg"
        >
          {places[activeIndex].location}
        </motion.h1>
        <motion.p 
            key={`subtitle-${activeIndex}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-300 text-xs md:text-lg tracking-[0.2em] mt-2 uppercase font-light"
        >
          Experience the <span className="text-yellow-400 font-medium">{places[activeIndex].mood}</span> Vibe
        </motion.p>
      </div>

      {/* 3D Carousel */}
      <div className="relative z-10 w-full h-full flex items-center justify-center [perspective:1000px] touch-none">
        {places.map((place, index) => {
          const offset = index - activeIndex
          const isActive = index === activeIndex
          
          return (
            <motion.div
              key={place.id}
              layout
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={isActive ? handleDragEnd : undefined} // Only active card drives navigation
              className="absolute rounded-3xl cursor-grab active:cursor-grabbing will-change-transform"
              style={{
                width: CARD_WIDTH,
                height: isMobile ? 380 : 480,
                x: offset * SPACING,
                zIndex: isActive ? 50 : 10 - Math.abs(offset), 
              }}
              animate={{
                scale: isActive ? 1 : 1 - Math.abs(offset) * (isMobile ? 0.1 : 0.15),
                opacity: isActive ? 1 : Math.max(0, 1 - Math.abs(offset) * 0.3),
                rotateY: isActive ? 0 : offset * -5,
                x: offset * SPACING,
                z: isActive ? 0 : -100 * Math.abs(offset), // Add depth
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 30,
                mass: 0.8
              }}
            >
              <PlacesCard place={place} isActive={isActive} />
            </motion.div>
          )
        })}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 w-full px-6 flex justify-between items-center z-20 md:justify-center md:gap-12">
        
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="group relative p-3 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all active:scale-90"
        >
          <div className="absolute inset-0 rounded-full bg-white/5 blur opacity-0 group-hover:opacity-100 transition-opacity" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Indicators (Desktop mainly, or minimal on mobile) */}
        <div className="flex gap-2">
            {places.map((_, i) => (
                <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-white" : "w-1.5 bg-gray-600"}`}
                />
            ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="group relative p-3 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all active:scale-90"
        >
          <div className="absolute inset-0 rounded-full bg-white/5 blur opacity-0 group-hover:opacity-100 transition-opacity" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Carousel
