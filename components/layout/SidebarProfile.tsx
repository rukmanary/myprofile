'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { scrollToSection } from '@/lib/utils';

export function SidebarProfile() {

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 h-screen w-80 bg-navy/90 backdrop-blur-lg border-r border-navy-light z-40 overflow-y-auto"
    >
      <div className="p-6 flex flex-col h-full justify-evenly">
        {/* Name at the top */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">{personalInfo.name}</h1>
        </div>

        {/* Profile Image - Centered with consistent spacing */}
        <div className="flex justify-center">
          <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-neon-cyan neon-glow">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Specialization Section - Consistent alignment */}
        <div className="text-center">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Specialization
          </h3>
          <p className="text-lg gradient-text font-medium">{personalInfo.title}</p>
          <p className="text-sm text-gray-400 font-medium">{personalInfo.subtitle}</p>
        </div>

        {/* Location Section - Consistent alignment */}
        <div className="text-center">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Location
          </h3>
          <p className="text-gray-300 text-sm">{personalInfo.location.city}, {personalInfo.location.country}</p>
        </div>

        {/* Bottom section with social icons and button */}
        <div className="flex flex-col space-y-6">
          {/* Social Links */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-center">
              Connect with me
            </h3>
            <SocialLinks 
              layout="horizontal" 
              size="large" 
              variant="sidebar"
            />
          </div>

          {/* Let's Work Together Button */}
          <div className="flex justify-center px-2">
            <Button
              variant="primary"
              className="w-full"
              onClick={() => scrollToSection('contact')}
            >
              Let&apos;s Work Together
            </Button>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}