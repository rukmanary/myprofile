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
import { ExternalLink, Github, X } from 'lucide-react';
import { getImageUrl } from '@/lib/utils';

export function PortfolioSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isRoleExpanded, setIsRoleExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeProject = portfolioItems[activeProjectIndex];

  // Reset description and role expansion when project changes
  useEffect(() => {
    setIsDescriptionExpanded(false);
    setIsRoleExpanded(false);
    setIsModalOpen(false);
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="portfolio" className="relative min-h-screen bg-gray-900">
      {/* Main Content */}
      <div className="min-h-screen flex flex-col">
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
              onImageClick={openModal}
            />
          </div>

          {/* Project Details Section - New Layout */}
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
                {/* Project Title & Description */}
                <div className="space-y-6">
                  <ProjectDetails
                    project={activeProject}
                    isDescriptionExpanded={isDescriptionExpanded}
                    onToggleDescription={toggleDescription}
                  />
                </div>

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

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 z-10 p-2 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={getImageUrl(activeProject.imageName)}
                  alt={activeProject.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>

              {/* Image Caption */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{activeProject.title}</h3>
                <p className="text-gray-300">{activeProject.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}