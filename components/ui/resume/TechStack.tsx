'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { techStack } from '@/lib/data';

export function TechStack() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Filter techStack based on active filter
  const filteredTechStack = useMemo(() => {
    if (activeFilter === 'all') {
      return techStack;
    }
    return techStack.filter(tech => {
      switch (activeFilter) {
        case 'technologies':
          return tech.category === 'Technology';
        case 'methodologies':
          return tech.category === 'Methodology';
        case 'tools':
          return tech.category === 'Tool';
        default:
          return true;
      }
    });
  }, [activeFilter]);

  // Filter categories for buttons
  const filterCategories = [
    { id: 'all', label: 'All', color: 'from-gray-500/20 to-gray-600/20', borderColor: 'border-gray-500/30', textColor: 'text-gray-300' },
    { id: 'technologies', label: 'Technologies', color: 'from-neon-cyan/20 to-blue-500/20', borderColor: 'border-neon-cyan/30', textColor: 'text-neon-cyan' },
    { id: 'methodologies', label: 'Methodologies', color: 'from-purple-500/20 to-pink-500/20', borderColor: 'border-purple-500/30', textColor: 'text-purple-400' },
    { id: 'tools', label: 'Tools', color: 'from-orange-500/20 to-red-500/20', borderColor: 'border-orange-500/30', textColor: 'text-orange-400' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="my-20"
    >
      <h3 className="text-2xl font-semibold text-white text-center mb-12">
        Tech <span className="gradient-text">Stack</span>
      </h3>

      {/* Category Filters */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-4">
          {filterCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`
                px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer
                ${activeFilter === category.id
                  ? `bg-linear-to-r ${category.color} ${category.borderColor} scale-105 shadow-lg`
                  : 'bg-gray-800/30 border-gray-600/30 hover:bg-gray-700/40 hover:border-gray-500/40'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`text-sm font-medium transition-colors duration-300 ${activeFilter === category.id ? category.textColor : 'text-gray-400 hover:text-gray-300'
                }`}>
                {category.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="
        grid grid-flow-col auto-cols-max grid-rows-2 gap-4 overflow-x-auto pb-2 snap-x snap-mandatory
        sm:grid-flow-row sm:auto-cols-auto sm:grid-rows-none sm:overflow-x-visible sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-6
      ">
        <AnimatePresence mode="popLayout">
          {filteredTechStack.map((tech, index) => (
            <motion.div
              key={`${activeFilter}-${tech.name}`}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 10
              }}
              className="group relative snap-start"
            >
              <div className={`
              relative p-6 rounded-xl bg-gray-900/70 
               border border-white/20 backdrop-blur-sm
               hover:border-white/40 transition-all duration-300
               hover:shadow-lg hover:shadow-white/10
               flex flex-col items-center text-center space-y-3
             `}>
                {/* Logo */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-black/40 ring-1 ring-white/10 -z-10" />
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-10 h-10 object-contain transition-all duration-300 z-10"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.currentTarget;
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        target.style.display = 'none';
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback icon */}
                  <div className="hidden w-10 h-10 bg-linear-to-br from-gray-600 to-gray-800 rounded-lg items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h4 className="text-white text-sm font-medium group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {tech.name}
                </h4>

                {/* Category Badge */}
                <div className={`
                px-2 py-1 rounded-full text-xs font-medium
                ${tech.category === 'Technology' ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30' : ''}
                ${tech.category === 'Methodology' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : ''}
                ${tech.category === 'Tool' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : ''}
              `}>
                  {tech.category}
                </div>

                {/* Hover Glow Effect */}
                <div className={`
                absolute inset-0 rounded-xl bg-linear-to-br ${tech.color} 
                opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10
              `} />
              </div>

              {/* Floating Particles Effect */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-60"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${10 + i * 20}%`,
                    }}
                    animate={{
                      y: [-10, -20, -10],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        <div>
          <motion.div
            key={`all-${filteredTechStack.length}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-3xl sm:text-4xl font-bold text-gray-300 mb-2"
          >
            {activeFilter === 'all' ? techStack.length : filteredTechStack.length}+
          </motion.div>
          <div className="text-gray-400 text-sm">
            {activeFilter === 'all' ? 'Total Items' : 'Filtered Items'}
          </div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl font-bold text-neon-cyan mb-2">
            {techStack.filter(tech => tech.category === 'Technology').length}+
          </div>
          <div className="text-gray-400 text-sm">Technologies</div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
            {techStack.filter(tech => tech.category === 'Methodology').length}+
          </div>
          <div className="text-gray-400 text-sm">Methodologies</div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">
            {techStack.filter(tech => tech.category === 'Tool').length}+
          </div>
          <div className="text-gray-400 text-sm">Tools</div>
        </div>
      </motion.div>
    </motion.div>
  );
}