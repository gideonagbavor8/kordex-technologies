import type { Metadata } from 'next';
import ContactPageClient from '@/app/components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a free 20-minute consultation with Kordex Technologies. We reply to every school enquiry within 24 hours.',
};

export default function Contact() {
  return <ContactPageClient />;
}