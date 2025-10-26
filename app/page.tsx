import { MainLayout } from '@/components/layout/MainLayout';
import { HeroSection } from '@/components/sections/HeroSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <PortfolioSection />
    </MainLayout>
  );
}
