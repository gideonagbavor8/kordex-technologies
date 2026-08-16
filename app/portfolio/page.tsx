import type { Metadata } from 'next';
import PortfolioHero from '../components/PortfolioHero';
import PortfolioGrid from '../components/PortfolioGrid';
import CTABanner from '../components/CTABanner';

export const metadata: Metadata = {
  title: 'Our work',
  description:
    'Education technology built by Kordex Technologies — CurriculumCraft AI for lesson planning, EduKrom LMS for school management, and more. Every project labelled honestly.',
};

export default function Portfolio() {
  return (
    <main className="w-full">
      <PortfolioHero />
      <PortfolioGrid />
      <CTABanner />
    </main>
  );
}
