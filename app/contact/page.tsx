import type { Metadata } from 'next';
import ContactPageClient from '@/app/components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with Kordex Technologies. Get a response within 24 hours.',
};

export default function Contact() {
  return <ContactPageClient />;
}