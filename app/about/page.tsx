import type { Metadata } from 'next';
import AboutHero from '../components/AboutHero';
import FounderSection from '../components/FounderSection';
import ValuesSection from '../components/ValuesSection';
import TechStack from '../components/TechStack';
import CTABanner from '../components/CTABanner';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Kordex Technologies is a Ghanaian education technology company founded by Gideon Agbavor, a former Ghana Education Service teacher who now builds the software schools here actually need.',
};

export default function About() {
  return (
    <main className="w-full">
      <AboutHero />
      <FounderSection />
      <ValuesSection />
      <TechStack />
      <CTABanner />
    </main>
  );
}
