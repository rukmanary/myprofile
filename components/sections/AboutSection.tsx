'use client';

import { motion } from 'framer-motion';
import { personalInfo, features } from '@/lib/data';
import { Features3DCarousel } from '@/components/ui/about';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-linear-to-b from-navy-dark to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know more about my background, skills, and what drives my passion for development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Hello! I&apos;m {personalInfo.name.split(' ')[0]}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              {personalInfo.additionalDescriptions.map((description, index) => (
                <p key={index} className="text-gray-300 leading-relaxed">
                  {description}
                </p>
              ))}
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div>
                <h4 className="text-white font-semibold mb-2">Personal Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Location:</span>
                    <span className="text-white">{personalInfo.location.city}, {personalInfo.location.country}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email:</span>
                    <span className="text-white">{personalInfo.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Freelance:</span>
                    <span className="text-neon-cyan">Available</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">Interests</h4>
                <div className="space-y-2 text-sm">
                  {personalInfo.interests.map((interest, index) => (
                    <div key={index} className="text-gray-300">• {interest}</div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - 3D Carousel */}
          <Features3DCarousel features={features} />
        </div>
      </div>
    </section>
  );
}