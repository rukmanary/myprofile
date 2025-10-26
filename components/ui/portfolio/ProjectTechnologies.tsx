'use client';

import { motion } from 'framer-motion';

interface ProjectTechnologiesProps {
  technologies: string[];
  className?: string;
}

export function ProjectTechnologies({
  technologies,
  className = ''
}: ProjectTechnologiesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className={className}
    >
      <h4 className="text-white font-semibold mb-4 flex items-center gap-2 text-lg">
        <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
        Technologies Used
      </h4>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="px-4 py-2 text-sm bg-navy-light text-neon-cyan rounded-lg border border-neon-cyan/20 hover:bg-neon-cyan/10 transition-colors"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}