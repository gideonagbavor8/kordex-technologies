import type { Metadata} from 'next';
import AboutHero from '../components/AboutHero';
import FounderSection from '../components/FounderSection';
import TechStack from '../components/TechStack';
import ValuesSection from '../components/ValuesSection';
import AboutCTA from '../components/AboutCTA';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Kordex Technologies and founder Gideon Agbavor — a Ghanaian software developer, educator, and AI builder.',
};

export default function About() {
  return (
    <main className="w-full">
      <AboutHero />
      <FounderSection />
      <TechStack />
      <ValuesSection />
      <AboutCTA />
    </main>
  );
}
