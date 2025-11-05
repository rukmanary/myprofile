'use client';

import React from 'react';
import { socialLinks } from '@/lib/data';
import { trackEvent } from '@/lib/ga';

interface SocialLinksProps {
  layout?: 'vertical' | 'horizontal';
  size?: 'small' | 'large';
  variant?: 'sidebar' | 'footer';
  className?: string;
}

export function SocialLinks({ 
  layout = 'vertical', 
  size = 'large', 
  variant = 'sidebar',
  className = '' 
}: SocialLinksProps) {
  
  const getFontAwesomeIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return 'fa-brands fa-linkedin-in';
      case 'instagram':
        return 'fa-brands fa-instagram';
      case 'youtube':
        return 'fa-brands fa-youtube';
      case 'email':
        return 'fa-solid fa-envelope';
      default:
        return 'fa-solid fa-envelope';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return '#0072b1';
      case 'instagram':
        return '#E1306C';
      case 'youtube':
        return '#FF0000';
      case 'email':
        return '#FFFFFF';
      default:
        return '#FFFFFF';
    }
  };

  const iconSize = size === 'large' ? 60 : 40;
  const fontSize = size === 'large' ? '1.5em' : '1.2em';
  const containerClass = layout === 'vertical' 
    ? 'flex flex-col items-center gap-3' 
    : 'flex space-x-3';

  return (
    <>
      {/* Font Awesome CSS Import */}
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.4.2/css/all.css" />
      
      <div className={`${containerClass} ${className}`}>
        {socialLinks.map((link) => {
          const platformColor = getPlatformColor(link.platform);
          const iconClass = getFontAwesomeIcon(link.platform);

          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.platform}
              className={`social-icon-${variant}`}
              style={{ '--color': platformColor } as React.CSSProperties}
              onClick={() => trackEvent({ action: 'social_click', category: 'social', label: link.platform })}
            >
              <i className={iconClass}></i>
            </a>
          );
        })}
      </div>

      <style jsx>{`
        .social-icon-sidebar,
        .social-icon-footer {
          border-radius: 50%;
          box-sizing: border-box;
          width: ${iconSize}px;
          height: ${iconSize}px;
          min-width: ${iconSize}px;
          min-height: ${iconSize}px;
          max-width: ${iconSize}px;
          max-height: ${iconSize}px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          transition: 0.5s;
          background: rgba(0, 0, 0, 0);
          color: var(--color);
          font-size: ${fontSize};
          padding: 0;
          overflow: hidden;
          position: relative;
          -webkit-box-reflect: below 2px linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.3) 100%);
        }
        
        .social-icon-sidebar i,
        .social-icon-footer i {
          line-height: 1;
          display: block;
        }
        
        .social-icon-sidebar:hover,
        .social-icon-footer:hover {
          background: var(--color);
          color: #050801;
          box-shadow: 
            0 0 5px var(--color),
            0 0 25px var(--color),
            0 0 50px var(--color),
            0 0 100px var(--color);
        }
      `}</style>
    </>
  );
}