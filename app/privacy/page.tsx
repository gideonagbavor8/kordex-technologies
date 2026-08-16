import type { Metadata } from 'next';
import LegalPage from '@/app/components/LegalPage';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Kordex Technologies collects, uses, and protects the personal information you share with us.',
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="15 August 2026">
      <p>
        {site.name} (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains what
        information we collect when you use this website, why we collect it, and what
        control you have over it.
      </p>

      <h2>Information we collect</h2>
      <p>We only collect information you choose to give us, plus basic anonymous usage data.</p>
      <ul>
        <li>
          <strong>Contact form submissions.</strong> Your name, email address, selected
          service, budget range, and project description.
        </li>
        <li>
          <strong>Direct correspondence.</strong> Anything you send us by email or WhatsApp.
        </li>
        <li>
          <strong>Anonymous usage data.</strong> Page views and general traffic patterns,
          collected via Vercel Analytics. This does not use cookies and does not identify
          you personally.
        </li>
      </ul>

      <h2>How we use it</h2>
      <p>
        We use your information solely to respond to your enquiry, prepare proposals, and
        deliver work you engage us for. We do not sell, rent, or trade your personal
        information, and we do not add you to marketing lists without your explicit consent.
      </p>

      <h2>Service providers</h2>
      <p>
        We rely on a small number of third parties to operate this site. Each processes data
        only on our behalf:
      </p>
      <ul>
        <li>
          <strong>Vercel</strong> — website hosting and privacy-friendly analytics.
        </li>
        <li>
          <strong>Resend</strong> — delivery of contact form notifications and confirmation
          emails.
        </li>
      </ul>

      <h2>Data retention</h2>
      <p>
        Enquiry correspondence is kept for as long as needed to serve you, and for a
        reasonable period afterwards for our business records. You may ask us to delete your
        information at any time.
      </p>

      <h2>Your rights</h2>
      <p>
        You may request a copy of the personal information we hold about you, ask us to
        correct it, or ask us to delete it. Email{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond within 30 days.
      </p>

      <h2>Security</h2>
      <p>
        Data is transmitted over encrypted connections (HTTPS) and stored with reputable
        providers. No system is perfectly secure, but we take reasonable technical measures
        to protect your information.
      </p>

      <h2>Children</h2>
      <p>
        This website is intended for businesses and institutions. We do not knowingly collect
        personal information from children.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy as our services change. The revision date at the top of
        this page always reflects the current version.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
        We are based in {site.location}.
      </p>
    </LegalPage>
  );
}
