import Hero from './components/Hero';
import ServicesPreview from './components/ServicesPreview';
import PortfolioPreview from './components/PortfolioPreview';
import CTABanner from './components/CTABanner';

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
