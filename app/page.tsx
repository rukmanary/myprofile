import { MainLayout } from '@/components/layout/MainLayout';
import {
  HeroSection,
  PortfolioSection,
  AboutSection,
  ResumeSection,
  ContactSection,
} from '@/components/sections';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ResumeSection />
      <ContactSection />
    </MainLayout>
  );
}
