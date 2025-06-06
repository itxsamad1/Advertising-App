import HeroSection from '@/components/HeroSection';
import PlansSection from '@/components/PlansSection';
import FeaturesSection from '@/components/FeaturesSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <PlansSection />
    </main>
  );
} 