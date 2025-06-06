import HeroSection from './_components/HeroSection';
import PlansSection from './_components/PlansSection';
import FeaturesSection from './_components/FeaturesSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <PlansSection />
    </main>
  );
} 