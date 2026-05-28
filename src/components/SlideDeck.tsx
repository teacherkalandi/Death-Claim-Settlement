import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';
import { Slide } from '../types';

interface SlideDeckProps {
  slides: Slide[];
}

export function SlideDeck({ slides }: SlideDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];
  const progressPercentage = ((currentIndex + 1) / slides.length) * 100;

  return (
    <div className="w-full max-w-6xl aspect-[16/9] sm:aspect-auto sm:h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden relative border-4 border-amber-400">
      {/* Top Progress Bar */}
      <div className="w-full h-1.5 bg-red-100 flex-shrink-0">
        <motion.div
          className="h-full bg-red-600"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Slide Content Area */}
      <div className="flex-1 overflow-hidden relative bg-orange-50/40">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full flex flex-col p-8 md:p-12 overflow-y-auto"
          >
            {currentSlide.title && (
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-red-900 mb-8 pb-4 border-b border-red-200/60 flex-shrink-0">
                {currentSlide.title}
              </h2>
            )}
            <div className="flex-1 flex flex-col w-full h-full">
              {currentSlide.content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Control Bar */}
      <div className="flex-shrink-0 h-16 bg-white border-t border-red-100/60 flex items-center justify-between px-6">
        <div className="text-sm font-medium text-red-400 font-mono">
          {currentIndex + 1} / {slides.length}
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="p-2 rounded-full hover:bg-red-50 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-red-600 cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === slides.length - 1}
            className="p-2 rounded-full hover:bg-red-50 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-red-600 cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
