import AboutHero from '../components/AboutHero';
import FounderSection from '../components/FounderSection';
import TechStack from '../components/TechStack';
import ValuesSection from '../components/ValuesSection';
import AboutCTA from '../components/AboutCTA';

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
