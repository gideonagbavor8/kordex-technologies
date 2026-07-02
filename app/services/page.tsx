import ServicesHero from '../components/ServicesHero';
import WebDevelopmentService from '../components/WebDevelopmentService';
import AIAutomationService from '../components/AIAutomationService';
import CybersecurityService from '../components/CybersecurityService';
import EducationTechService from '../components/EducationTechService';
import ServicesPricing from '../components/ServicesPricing';

export default function Services() {
  return (
    <main className="w-full">
      <ServicesHero />
      <WebDevelopmentService />
      <AIAutomationService />
      <CybersecurityService />
      <EducationTechService />
      <ServicesPricing />
    </main>
  );
}
