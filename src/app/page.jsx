'use client';
import AnimatedHero from './_components/AnimatedHero';
import { DynamicPlansSection, DynamicFeaturesSection, DynamicLocationsSection } from './_components/ClientWrapper';

export default function Home() {
  return (
    <main>
      <AnimatedHero />
      <DynamicFeaturesSection />
      <DynamicLocationsSection />
      <DynamicPlansSection />
    </main>
  );
} 