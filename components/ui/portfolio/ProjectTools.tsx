'use client';

import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

interface ProjectToolsProps {
  tools: string[];
  className?: string;
}

export function ProjectTools({
  tools,
  className = ''
}: ProjectToolsProps) {
  if (!tools || tools.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className={className}
    >
      <h4 className="text-white font-semibold mb-4 flex items-center gap-2 text-lg">
        <Wrench className="w-5 h-5 text-neon-purple" />
        Tools Used
      </h4>
      <div className="flex flex-wrap gap-3">
        {tools.map((tool, index) => (
          <motion.span
            key={tool}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="px-4 py-2 text-sm bg-neon-purple/10 text-neon-purple rounded-lg border border-neon-purple/20 hover:bg-neon-purple/20 transition-colors"
          >
            {tool}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}