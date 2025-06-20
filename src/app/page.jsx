'use client';
import AnimatedHero from './_components/AnimatedHero';
import HeroSection from './_components/HeroSection';
import { DynamicPlansSection, DynamicFeaturesSection, DynamicLocationsSection } from './_components/ClientWrapper';

export default function Home() {
  return (
    <main className="relative">
      <section className="relative z-0">
        <AnimatedHero />
      </section>
      <section className="relative z-10">
        <HeroSection />
      </section>
      <section className="relative z-10">
        <DynamicFeaturesSection />
      </section>
      <section className="relative z-10">
        <DynamicLocationsSection />
      </section>
      <section className="relative z-10">
        <DynamicPlansSection />
      </section>
    </main>
  );
} 