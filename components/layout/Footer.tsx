'use client';

import { Heart, Server } from 'lucide-react';
import Image from 'next/image';
import { personalInfo, navItems as quickLinks } from '@/lib/data';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { scrollToSection } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark border-t border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/og-image.jpeg"
                  alt={personalInfo.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">{personalInfo.name}</h3>
                <p className="text-gray-400 text-sm">{personalInfo.title}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-neon-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-300 hover:text-neon-cyan transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="text-gray-300">
                {personalInfo.location.city}, {personalInfo.location.country}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <SocialLinks
                layout="horizontal"
                size="small"
                variant="footer"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-navy-light">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>&copy; {currentYear} {personalInfo.name}. All rights reserved.</span>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-gray-300 text-sm">
              <div className="flex items-center space-x-2">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>using Next.js & Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>•</span>
                <span>Deployed on</span>
                <Server className="w-4 h-4 text-blue-400" />
                <span>VPS with Linux Ubuntu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}