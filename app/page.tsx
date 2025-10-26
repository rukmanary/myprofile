import { MainLayout } from '@/components/layout/MainLayout';
import { HeroSection, PortfolioSection } from '@/components/sections';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <PortfolioSection />
    </MainLayout>
  );
}
