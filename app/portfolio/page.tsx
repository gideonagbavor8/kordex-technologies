import type { Metadata } from 'next';
import PortfolioHero from '../components/PortfolioHero';
import PortfolioGrid from '../components/PortfolioGrid';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'View selected projects by Kordex Technologies including CurriculumCraft AI, Tarso Hotel, SecureVault, and more.',
};

export default function Portfolio() {
  return (
    <main className="w-full">
      <PortfolioHero />
      <PortfolioGrid />
    </main>
  );
}
