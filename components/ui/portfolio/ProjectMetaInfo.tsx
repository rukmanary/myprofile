'use client';

import { motion } from 'framer-motion';
import { Clock, Briefcase, Wrench } from 'lucide-react';
import { PortfolioItem } from '@/types';

interface ProjectMetaInfoProps {
  project: PortfolioItem;
  className?: string;
}

export function ProjectMetaInfo({
  project,
  className = ''
}: ProjectMetaInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {/* Duration */}
      {project.duration && (
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-neon-cyan/20 flex items-center justify-center">
            <Clock className="w-6 h-6 text-neon-cyan" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Duration</p>
            <p className="text-white font-medium">{project.duration}</p>
          </div>
        </div>
      )}

      {/* Category */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-neon-purple/20 flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-neon-purple" />
        </div>
        <div>
          <p className="text-sm text-gray-400">Category</p>
          <p className="text-white font-medium capitalize">{project.category}</p>
        </div>
      </div>

      {/* Tools Count */}
      {project.tools && (
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-neon-purple/20 flex items-center justify-center">
            <Wrench className="w-6 h-6 text-neon-purple" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Tools Used</p>
            <p className="text-white font-medium">{project.tools.length} Tools</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}