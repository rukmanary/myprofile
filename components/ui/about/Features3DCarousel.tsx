'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Feature } from '@/types';

export interface Features3DCarouselProps {
  features: Feature[];
  className?: string;
}

export function Features3DCarousel({ features, className = '' }: Features3DCarouselProps) {
  // 3D Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotation logic
  useEffect(() => {
    if (!isAutoRotating || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoRotating, isHovered, features.length]);

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  }, [features.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  }, [features.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch/Swipe Support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Carousel Container */}
      <div
        className="relative w-full h-[500px] md:h-[500px] sm:h-[400px] perspective-1000"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Background Glow Effect */}
        <div
          className={`absolute inset-0 rounded-full blur-3xl opacity-20 transition-all duration-1000 bg-linear-to-r ${features[currentIndex].color}`}
          style={{
            transform: 'scale(1.5)',
            zIndex: -1
          }}
        />

        {/* Carousel Items */}
        <div className="relative w-full h-full preserve-3d">
          {features.map((feature, index) => {
            const angle = (index - currentIndex) * (360 / features.length);
            const isActive = index === currentIndex;
            const isNext = index === (currentIndex + 1) % features.length;
            const isPrev = index === (currentIndex - 1 + features.length) % features.length;

            return (
              <motion.div
                key={index}
                className="absolute inset-0 cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateY: angle,
                  z: isActive ? 100 : 0,
                  scale: isActive ? 1.1 : isNext || isPrev ? 0.9 : 0.8,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                onClick={() => goToSlide(index)}
                whileHover={{
                  scale: isActive ? 1.15 : 1.0,
                  z: isActive ? 120 : 20,
                }}
              >
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    transform: `translateZ(200px)`,
                  }}
                >
                  <Card
                    className={`w-80 h-96 sm:w-72 sm:h-80 transition-all duration-500 group relative overflow-hidden ${isActive
                      ? 'border-2 border-neon-cyan shadow-2xl shadow-neon-cyan/20'
                      : 'border border-gray-600 hover:border-neon-cyan/50'
                      }`}
                  >
                    {/* Card Background Gradient */}
                    <div
                      className={`absolute inset-0 opacity-10 bg-linear-to-br ${feature.color}`}
                    />

                    {/* Animated Particles */}
                    {isActive && (
                      <div className="absolute inset-0 overflow-hidden">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                            animate={{
                              x: [0, Math.random() * 300],
                              y: [0, Math.random() * 350],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.5,
                            }}
                          />
                        ))}
                      </div>
                    )}

                    <CardContent className="p-8 text-center h-full flex flex-col justify-center relative z-10">
                      {/* Icon with 3D Effect */}
                      <motion.div
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center relative`}
                        animate={{
                          rotateX: isActive ? [0, 10, 0] : 0,
                          rotateY: isActive ? [0, 10, 0] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut",
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotateY: 15,
                        }}
                      >
                        {/* Icon Glow */}
                        <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${feature.color} blur-lg opacity-50`} />
                        <feature.icon className="w-10 h-10 text-white relative z-10" />
                      </motion.div>

                      {/* Title with Gradient */}
                      <motion.h4
                        className={`text-2xl font-bold mb-4 ${isActive ? 'bg-linear-to-r bg-clip-text text-transparent ' + feature.color : 'text-white'
                          }`}
                        animate={{
                          scale: isActive ? [1, 1.05, 1] : 1,
                        }}
                        transition={{
                          duration: 2,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut",
                        }}
                      >
                        {feature.title}
                      </motion.h4>

                      {/* Description */}
                      <motion.p
                        className={`leading-relaxed ${isActive ? 'text-gray-200' : 'text-gray-400'
                          }`}
                        animate={{
                          opacity: isActive ? 1 : 0.7,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {feature.description}
                      </motion.p>

                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-linear-to-r ${feature.color}`} />
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-20">
        <motion.button
          onClick={prevSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 backdrop-blur-sm border border-neon-cyan/30 flex items-center justify-center text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-20">
        <motion.button
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 backdrop-blur-sm border border-neon-cyan/30 flex items-center justify-center text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {features.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-neon-cyan shadow-lg shadow-neon-cyan/50'
              : 'bg-gray-600 hover:bg-gray-400'
              }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Auto-rotation Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <motion.button
          onClick={() => setIsAutoRotating(!isAutoRotating)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isAutoRotating
            ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
            : 'bg-gray-800/50 text-gray-400 border border-gray-600'
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isAutoRotating ? 'Auto' : 'Manual'}
        </motion.button>
      </div>
    </motion.div>
  );
}