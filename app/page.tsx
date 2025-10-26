import { MainLayout } from '@/components/layout/MainLayout';
import {
  HeroSection,
  PortfolioSection,
  AboutSection,
} from '@/components/sections';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
    </MainLayout>
  );
}
