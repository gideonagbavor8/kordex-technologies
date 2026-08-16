import type { Metadata } from 'next';
import Hero from './components/Hero';
import AudienceSection from './components/AudienceSection';
import ServicesPreview from './components/ServicesPreview';
import PortfolioPreview from './components/PortfolioPreview';
import ProcessSection from './components/ProcessSection';
import CTABanner from './components/CTABanner';

export const metadata: Metadata = {
  title: 'Education technology for African schools',
  description:
    'Kordex Technologies builds school management systems, AI lesson planning tools, admissions websites and student data security for Ghanaian schools — founded by a former GES teacher.',
};

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <AudienceSection />
      <ServicesPreview />
      <PortfolioPreview />
      <ProcessSection />
      <CTABanner />
    </main>
  );
}
