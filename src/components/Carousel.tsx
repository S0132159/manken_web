import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  "https://images.unsplash.com/photo-1541562232579-512a21360020?w=1200&h=600&fit=crop", // Drawing/Studio
  "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&h=600&fit=crop", // Anime figures/toys
  "https://images.unsplash.com/photo-1612480797701-3e0fde408af3?w=1200&h=600&fit=crop", // Manga bookshelf
];

export default function Carousel({ isPaused }: { isPaused: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  return (
    <div className="bg-white border-8 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex items-center justify-center w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <div className="absolute top-4 left-4 bg-black text-white px-4 py-1 text-xl font-bold skew-x-[-12deg] z-20 font-sans hidden md:block">
        LATEST EVENT
      </div>
      <div className="w-full h-full flex items-center justify-center bg-gray-200">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={IMAGES[currentIndex]}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
            alt="活動照片"
          />
        </AnimatePresence>
        
        {/* Navigation Buttons */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border-4 border-black px-3 py-1 font-black text-2xl cursor-pointer hover:bg-cyan-400 active:translate-y-1 z-10 transition-all select-none" onClick={prev}>&lt;</div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-4 border-black px-3 py-1 font-black text-2xl cursor-pointer hover:bg-cyan-400 active:translate-y-1 z-10 transition-all select-none" onClick={next}>&gt;</div>

        {/* Decorative dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {IMAGES.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-colors ${idx === currentIndex ? 'bg-black' : 'bg-gray-300 border-2 border-black'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
