import type { Metadata } from 'next';
import LegalPage from '@/app/components/LegalPage';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms governing use of the Kordex Technologies website and the engagement of our services.',
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="15 August 2026">
      <p>
        These terms govern your use of the {site.name} website and set out the general basis
        on which we take on client work. Individual projects are governed by a signed
        proposal or contract, which takes precedence over anything on this page.
      </p>

      <h2>Use of this website</h2>
      <p>
        This site and its content are provided for information. You may not copy, reproduce,
        or redistribute substantial portions of it without our written permission.
      </p>

      <h2>Enquiries and quotes</h2>
      <p>
        Submitting the contact form does not create a contract. Prices shown on this site are
        starting points for typical projects, not binding quotes. Any fixed price is
        confirmed only in a written proposal covering a defined scope of work.
      </p>

      <h2>Scope and changes</h2>
      <p>
        Each engagement is defined by an agreed scope, timeline, and deliverables. Work
        requested outside that scope is quoted and agreed separately before it begins.
        Timelines assume you provide content, access, approvals, and feedback within the
        agreed windows.
      </p>

      <h2>Payment</h2>
      <p>
        Unless a proposal states otherwise, projects require a deposit before work begins,
        with the balance due on delivery. Invoices are payable within 14 days. We may suspend
        work on overdue accounts.
      </p>

      <h2>Intellectual property</h2>
      <p>
        On receipt of full payment, ownership of the custom work produced for your project
        transfers to you. We retain ownership of our pre-existing tools, libraries, and
        internal frameworks, and grant you a perpetual licence to use them as part of your
        delivered project. Third-party and open-source components remain under their own
        licences.
      </p>

      <h2>Portfolio rights</h2>
      <p>
        We may reference your project — name, description, and screenshots — in our portfolio
        and marketing, unless you ask us in writing not to.
      </p>

      <h2>Confidentiality</h2>
      <p>
        We treat non-public information you share with us as confidential and will not
        disclose it to third parties except as needed to deliver your project. We are happy
        to sign a separate non-disclosure agreement on request.
      </p>

      <h2>Warranty and support</h2>
      <p>
        We correct defects in our work, free of charge, for 30 days after delivery. This
        covers faults in what we built; it does not cover new features, third-party service
        changes, or issues caused by modifications made by others. Ongoing support and
        maintenance are available under a separate agreement.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, our total liability arising from an engagement is
        limited to the fees paid for that engagement. We are not liable for indirect or
        consequential losses, including lost profits or lost data.
      </p>

      <h2>Termination</h2>
      <p>
        Either party may end an engagement with written notice. You remain responsible for
        work completed up to that point, and we will hand over all completed deliverables
        that have been paid for.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the Republic of Ghana, and disputes are
        subject to the jurisdiction of the Ghanaian courts.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
