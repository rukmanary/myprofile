'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioItem } from '@/types';
import { getImageUrl } from '@/lib/utils';

interface ProjectCarouselProps {
  portfolioItems: PortfolioItem[];
  activeProjectIndex: number;
  onProjectSelect: (index: number) => void;
  onImageClick?: () => void;
  className?: string;
}

export function ProjectCarousel({
  portfolioItems,
  activeProjectIndex,
  onProjectSelect,
  onImageClick,
  className = ''
}: ProjectCarouselProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToProject = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const cardWidth = 200; // Adjusted for larger card layout (w-48 + gap)
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const selectProject = (index: number) => {
    onProjectSelect(index);
    // Scroll the selected card into view
    if (carouselRef.current) {
      const cardWidth = 200;
      const scrollPosition = index * cardWidth;
      carouselRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`relative shrink-0 ${className}`}
    >
      {/* Carousel Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Browse Projects</h3>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToProject('left')}
            className="w-8 h-8 text-gray-400 hover:text-white bg-black/50 backdrop-blur-sm border border-gray-700 hover:border-gray-500"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToProject('right')}
            className="w-8 h-8 text-gray-400 hover:text-white bg-black/50 backdrop-blur-sm border border-gray-700 hover:border-gray-500"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Project Carousel Container - 3 Items Visible */}
      <div className="relative group">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 w-6 h-full bg-linear-to-r from-black/80 to-transparent z-10 pointer-events-none" />

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 w-6 h-full bg-linear-to-l from-black/80 to-transparent z-10 pointer-events-none" />

        {/* Scrollable Carousel - Extended Width for 3 Cards with 1.2x Hover Support */}
        <div
          ref={carouselRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-6 pt-4 px-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            width: '520px' // Extended width to show 3 cards (160px * 3 + gaps)
          }}
        >
          {portfolioItems.map((project, index) => {
            const isActive = index === activeProjectIndex;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={project.id}
                onClick={() => selectProject(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`shrink-0 cursor-pointer group/card relative ${isHovered ? 'z-50' : 'z-10'}`}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ transformOrigin: 'center center' }}
              >
                <div className={`w-48 h-28 sm:w-56 sm:h-32 lg:w-64 lg:h-36 rounded-lg overflow-hidden border-2 transition-all duration-300 ${isActive
                  ? 'border-neon-cyan shadow-xl shadow-neon-cyan/30'
                  : 'border-gray-700 hover:border-gray-500'
                  }`}>
                  <div className="relative w-full h-full">
                    {/* Project Image */}
                    <img
                      src={getImageUrl(project.imageName)}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
                    />

                    {/* Enlarge Button - Bottom Right Corner */}
                    <div
                      className={`absolute bottom-2 right-2 backdrop-blur-sm rounded-full p-2 transition-all duration-200 shadow-lg ${isActive
                          ? 'bg-black/70 cursor-pointer hover:bg-black/80'
                          : 'bg-black/30 cursor-not-allowed opacity-50'
                        }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isActive) {
                          onImageClick?.();
                        }
                      }}
                    >
                      <svg
                        className={`w-4 h-4 transition-colors duration-200 ${isActive ? 'text-white' : 'text-gray-400'
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute top-1 right-1 w-2 h-2 bg-neon-cyan rounded-full shadow-lg shadow-neon-cyan/50"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}


                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Compact Progress Indicator */}
      <div className="flex justify-center gap-1 mt-3">
        {portfolioItems.map((_, index) => (
          <button
            key={index}
            onClick={() => selectProject(index)}
            className={`h-1 rounded-full transition-all duration-300 ${index === activeProjectIndex
              ? 'bg-neon-cyan w-6 shadow-lg shadow-neon-cyan/50'
              : 'bg-gray-600 hover:bg-gray-500 w-3'
              }`}
          />
        ))}
      </div>
    </motion.div>
  );
}