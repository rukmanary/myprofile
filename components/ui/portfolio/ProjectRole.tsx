'use client';

import { motion } from 'framer-motion';
import {
  ChevronDown,
  User,
  Target,
  TrendingUp,
  Shield,
  Wrench
} from 'lucide-react';

interface ProjectRoleProps {
  role: string;
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
}

interface RoleData {
  type: 'paragraph' | 'structured';
  content: string | string[];
  isLong: boolean;
}

export function ProjectRole({ role, isExpanded, onToggle, className = '' }: ProjectRoleProps) {
  // Enhanced role processing
  const processRoleContent = (roleText: string): RoleData => {
    if (!roleText) return { type: 'paragraph', content: '', isLong: false };

    // Check if content has bullet points or structured format
    const hasBulletPoints = roleText.includes('•') || roleText.includes('-') || roleText.includes('**');
    const hasLineBreaks = roleText.includes('\n');

    if (hasBulletPoints || hasLineBreaks) {
      // Split by double line breaks to get sections
      const sections = roleText.split('\n\n').filter(section => section.trim());
      return {
        type: 'structured',
        content: sections,
        isLong: roleText.length > 300
      };
    } else {
      return {
        type: 'paragraph',
        content: roleText,
        isLong: roleText.length > 200
      };
    }
  };

  // Function to get appropriate icon for section
  const getIconForSection = (headerText: string) => {
    const text = headerText.toLowerCase();
    if (text.includes('leadership') || text.includes('architecture')) {
      return <User className="w-4 h-4 text-neon-cyan" />;
    } else if (text.includes('development') || text.includes('integration')) {
      return <Wrench className="w-4 h-4 text-neon-purple" />;
    } else if (text.includes('performance') || text.includes('security')) {
      return <Shield className="w-4 h-4 text-neon-cyan" />;
    } else if (text.includes('business') || text.includes('impact') || text.includes('results')) {
      return <TrendingUp className="w-4 h-4 text-green-400" />;
    } else {
      return <Target className="w-4 h-4 text-neon-purple" />;
    }
  };

  // Function to render structured content
  const renderStructuredContent = (sections: string[]) => {
    return sections.map((section, sectionIndex) => {
      const lines = section.split('\n').filter(line => line.trim());

      if (lines.length === 0) return null;

      // Check if first line is a header (contains **)
      const isHeader = lines[0].includes('**');

      if (isHeader) {
        const headerText = lines[0].replace(/\*\*/g, '');
        const bulletPoints = lines.slice(1);

        return (
          <div key={sectionIndex} className="mb-6 last:mb-0">
            <div className="flex items-center gap-3 mb-3">
              {getIconForSection(headerText)}
              <h5 className="text-white font-semibold text-base">{headerText}</h5>
            </div>
            <ul className="space-y-2 ml-8">
              {bulletPoints.map((point, pointIndex) => {
                const cleanPoint = point.replace(/^[•\-\s]+/, '').trim();
                if (!cleanPoint) return null;

                return (
                  <li key={pointIndex} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-2 shrink-0"></span>
                    <span>{cleanPoint}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      } else {
        // Regular paragraph
        return (
          <p key={sectionIndex} className="text-gray-300 leading-relaxed text-sm mb-4 last:mb-0">
            {section}
          </p>
        );
      }
    });
  };

  // Process role content
  const roleData = processRoleContent(role);
  const truncatedRole = roleData.type === 'paragraph' && roleData.isLong
    ? (roleData.content as string).substring(0, 200) + '...'
    : roleData.content;

  // Don't render if no role content
  if (!role) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className={`bg-linear-to-br from-navy/60 to-navy/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-navy-light/50 shadow-xl ${className}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-linear-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
          <User className="w-5 h-5 text-neon-cyan" />
        </div>
        <h4 className="text-white font-semibold text-xl">My Role & Contribution</h4>
      </div>

      <motion.div
        animate={{
          height: isExpanded ? 'auto' : 'auto'
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1]
        }}
        className="overflow-hidden"
      >
        {roleData.type === 'structured' ? (
          <div className="space-y-6">
            {isExpanded ?
              renderStructuredContent(roleData.content as string[]) :
              renderStructuredContent((roleData.content as string[]).slice(0, 2))
            }
          </div>
        ) : (
          <p className="text-gray-300 leading-relaxed text-base">
            {isExpanded ? roleData.content : truncatedRole}
          </p>
        )}
      </motion.div>

      {/* Read More/Less Button for Role */}
      {roleData.isLong && (
        <motion.button
          onClick={onToggle}
          className="inline-flex items-center gap-2 mt-4 text-neon-cyan hover:text-neon-cyan/80 transition-colors duration-300 font-medium text-sm group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>
            {isExpanded ? 'Show Less' : 'Show More Details'}
          </span>
          <motion.div
            animate={{
              rotate: isExpanded ? 180 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
          </motion.div>
        </motion.button>
      )}
    </motion.div>
  );
}