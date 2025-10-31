'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { PortfolioItem } from '@/types';

interface ProjectDetailsProps {
  project: PortfolioItem;
  isDescriptionExpanded: boolean;
  onToggleDescription: () => void;
  className?: string;
}

export function ProjectDetails({
  project,
  isDescriptionExpanded,
  onToggleDescription,
  className = ''
}: ProjectDetailsProps) {
  // Calculate description truncation
  const { isDescriptionLong, truncatedDescription } = useMemo(() => {
    const isLong = project.description.length > 150;
    const truncated = isLong
      ? project.description.substring(0, 150) + '...'
      : project.description;

    return {
      isDescriptionLong: isLong,
      truncatedDescription: truncated
    };
  }, [project.description]);

  return (
    <div className={className}>
      {/* Category and Featured Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3 mb-3"
      >
        <span className="px-3 py-1 text-sm bg-neon-purple/20 text-neon-purple rounded-full capitalize">
          {project.category}
        </span>
        {project.featured && (
          <span className="px-3 py-1 text-sm bg-neon-cyan/20 text-neon-cyan rounded-full">
            Featured
          </span>
        )}
      </motion.div>

      {/* Project Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
      >
        {project.title}
      </motion.h3>

      {/* Enhanced Description with Read More/Less */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative max-w-4xl"
      >
        <motion.div
          animate={{
            height: isDescriptionExpanded ? 'auto' : 'auto'
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1]
          }}
          className="overflow-hidden"
        >
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            {isDescriptionExpanded ? project.description : truncatedDescription}
          </p>
        </motion.div>

        {/* Read More/Less Button */}
        {isDescriptionLong && (
          <motion.button
            onClick={onToggleDescription}
            className="inline-flex items-center gap-2 mt-3 text-neon-cyan hover:text-neon-cyan/80 transition-colors duration-300 font-medium text-sm group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>
              {isDescriptionExpanded ? 'Read Less' : 'Read More'}
            </span>
            <motion.div
              animate={{
                rotate: isDescriptionExpanded ? 180 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
            </motion.div>
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}