'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { scrollToSection } from '@/lib/utils';
import { useUserRegion } from '@/hooks/useUserRegion';

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { greeting, isLoading } = useUserRegion();

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 parallax-element"
      >
        <div className="absolute inset-0 bg-linear-to-br from-navy via-navy-dark to-black" />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-primary opacity-5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Basmalah */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-400 font-medium mb-2"
            style={{ fontFamily: 'serif' }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </motion.p>

          {/* Regional Greeting */}
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg sm:text-xl text-gray-300 font-medium mb-2"
            >
              {greeting.local && (
                <span className="mr-2" style={{ fontFamily: greeting.local.includes('أهلاً') || greeting.local.includes('欢迎') || greeting.local.includes('いらっしゃいませ') || greeting.local.includes('환영합니다') || greeting.local.includes('Добро') ? 'serif' : 'inherit' }}>
                  {`${greeting.local} -`}
                </span>
              )}
              <span>{greeting.english}</span>
            </motion.div>
          )}

          {/* Hello I'm */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 font-medium"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold gradient-text"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              variant="neon"
              size="lg"
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-16"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-neon-cyan">6+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-neon-purple">3</div>
              <div className="text-gray-400 text-sm">Fortune-Level Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-neon-cyan">5</div>
              <div className="text-gray-400 text-sm">Enterprise Applications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-neon-purple">100%</div>
              <div className="text-gray-400 text-sm">Enterprise Scale</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('portfolio')}
          className="flex flex-col items-center space-y-2 text-gray-400 hover:text-neon-cyan transition-colors group"
        >
          <span className="text-sm">Scroll Down</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-neon-cyan" />
        </button>
      </motion.div>
    </section>
  );
}