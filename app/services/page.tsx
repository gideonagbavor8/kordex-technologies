import type { Metadata } from 'next';
import ServicesHero from '../components/ServicesHero';
import ServiceBlock from '../components/ServiceBlock';
import ServicesPricing from '../components/ServicesPricing';
import BeyondEducation from '../components/BeyondEducation';
import CTABanner from '../components/CTABanner';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'School management systems, AI lesson planning tools, admissions websites and student data protection for Ghanaian schools. Published starting prices, fixed before work begins.',
};

export default function Services() {
  return (
    <main className="w-full">
      <ServicesHero />

      {services.map((service, i) => (
        <ServiceBlock key={service.slug} service={service} index={i} flip={i % 2 === 1} />
      ))}

      <ServicesPricing />
      <BeyondEducation />
      <CTABanner />
    </main>
  );
}
