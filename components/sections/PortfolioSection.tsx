'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import {
  ProjectCarousel,
  ProjectDetails,
  ProjectMetaInfo,
  ProjectTechnologies,
  ProjectTools,
  ProjectRole
} from '@/components/ui/portfolio';
import { ExternalLink, Github } from 'lucide-react';

export function PortfolioSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isRoleExpanded, setIsRoleExpanded] = useState(false);
  const activeProject = portfolioItems[activeProjectIndex];

  // Reset description and role expansion when project changes
  useEffect(() => {
    setIsDescriptionExpanded(false);
    setIsRoleExpanded(false);
  }, [activeProjectIndex]);

  const handleProjectSelect = (index: number) => {
    setActiveProjectIndex(index);
  };



  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const toggleRole = () => {
    setIsRoleExpanded(!isRoleExpanded);
  };

  return (
    <section id="portfolio" className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${activeProject.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 sm:pb-20 lg:pb-24">
          {/* Header Section with Title and Extended Carousel */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between pt-20 pb-8 gap-8">
            {/* Section Title */}
            <div className="shrink-0">
              <motion.h2
                className="text-4xl sm:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                My <span className="gradient-text">Portfolio</span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Showcase of my recent work and projects
              </motion.p>
            </div>

            <ProjectCarousel
              portfolioItems={portfolioItems}
              activeProjectIndex={activeProjectIndex}
              onProjectSelect={handleProjectSelect}
            />
          </div>

          {/* Project Details Section - Full Width */}
          <div className="flex-1 flex items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="w-full space-y-8"
              >
                {/* Project Title & Category */}
                <ProjectDetails
                  project={activeProject}
                  isDescriptionExpanded={isDescriptionExpanded}
                  onToggleDescription={toggleDescription}
                />

                {/* Project Meta Info */}
                <ProjectMetaInfo project={activeProject} />

                {/* Technologies */}
                <ProjectTechnologies technologies={activeProject.technologies} />

                {/* Tools */}
                <ProjectTools tools={activeProject.tools || []} />

                {/* Project Role & Contribution */}
                <ProjectRole
                  role={activeProject.role || ''}
                  isExpanded={isRoleExpanded}
                  onToggle={toggleRole}
                />

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-wrap gap-4 pt-8 pb-8"
                >
                  {activeProject.liveUrl && (
                    <Button
                      variant="neon"
                      onClick={() => window.open(activeProject.liveUrl, '_blank')}
                      className="flex items-center gap-2 px-6 py-3"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </Button>
                  )}
                  {activeProject.githubUrl && (
                    <Button
                      variant={activeProject.isPrivateRepo ? "outline" : "neonPurple"}
                      onClick={() => window.open(activeProject.githubUrl, '_blank')}
                      className="flex items-center gap-2 px-6 py-3"
                    >
                      <Github className="w-5 h-5" />
                      {activeProject.isPrivateRepo ? 'Private Repository' : 'View Code'}
                    </Button>
                  )}
                  {activeProject.isPrivateRepo && (
                    <span className="text-sm text-gray-400 flex items-center">
                      * Repository is private due to client confidentiality
                    </span>
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}