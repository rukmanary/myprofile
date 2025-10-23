'use client';

import { ReactNode } from 'react';
import { SidebarProfile } from './SidebarProfile';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <SidebarProfile />
      </div>

      {/* Mobile Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="lg:ml-80">
        <div className="lg:pt-20 pt-16">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}