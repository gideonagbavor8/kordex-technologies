import type { Metadata } from 'next';
import Hero from './components/Hero';
import ServicesPreview from './components/ServicesPreview';
import PortfolioPreview from './components/PortfolioPreview';
import CTABanner from './components/CTABanner';


export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our four service areas: Web & App Development, AI & Automation, Cybersecurity, and Education Technology.',
};

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <CTABanner />
    </main>
  );
}
