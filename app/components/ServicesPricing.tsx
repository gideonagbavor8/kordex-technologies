'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionHeading, revealVariants, staggerVariants } from './Section';
import { IconCheck, IconArrowRight } from './Icons';

/**
 * Published starting prices. "Contact us for pricing" is the single biggest
 * reason small-institution buyers bounce — a floor filters out enquiries that
 * were never going to close, before they cost anyone a call.
 */
const packages = [
  {
    name: 'School Website',
    tagline: 'For schools that need to be found and trusted online.',
    priceGhs: 'From GHS 9,000',
    priceUsd: '≈ USD 750',
    timeline: 'Live in 2–3 weeks',
    features: [
      'Mobile-first school website',
      'Online admissions and enquiry forms',
      'News, events and term calendar',
      'WhatsApp enquiry routing',
      'Staff-editable content',
      '30 days of post-launch support',
    ],
    featured: false,
  },
  {
    name: 'School Platform',
    tagline: 'For schools ready to retire the record books.',
    priceGhs: 'From GHS 35,000',
    priceUsd: '≈ USD 2,800',
    timeline: 'Live in 6–10 weeks',
    features: [
      'Everything in School Website',
      'Student records and enrolment',
      'Attendance and continuous assessment',
      'Automated terminal reports',
      'Fee invoicing and arrears tracking',
      'Parent portal',
      'On-site staff training',
      'Support through your first full term',
    ],
    featured: true,
  },
  {
    name: 'Group & District',
    tagline: 'For multi-campus groups and district offices.',
    priceGhs: 'Scoped per rollout',
    priceUsd: 'Per-student licensing available',
    timeline: 'Phased by campus',
    features: [
      'Everything in School Platform',
      'Multi-campus records and reporting',
      'Cross-school performance comparison',
      'Central administration console',
      'Data migration from existing systems',
      'Ongoing engineering capacity',
      'Priority response times',
    ],
    featured: false,
  },
];

export default function ServicesPricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-28 border-t border-[var(--surface-hairline)] bg-[var(--surface-base)] py-20 sm:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          title="Published prices, fixed before we start"
          lead="Every school is scoped individually, but these are the ranges engagements fall into. No hourly billing, and no figure that moves after you sign."
        />

        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 items-start gap-5 lg:grid-cols-3"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={revealVariants}
              className={`panel relative flex h-full flex-col p-8 ${
                pkg.featured
                  ? 'border-[var(--brand)]/50 shadow-[0_0_0_1px_rgba(30,111,217,0.18),var(--shadow-lift)] lg:-mt-5'
                  : ''
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-[var(--brand)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Most schools start here
                </span>
              )}

              <h3 className="font-display text-2xl text-[var(--text-primary)]">{pkg.name}</h3>
              <p className="mt-2 min-h-[42px] text-sm leading-relaxed text-[var(--text-tertiary)]">
                {pkg.tagline}
              </p>

              <div className="my-7">
                <p className="font-display text-3xl text-[var(--text-primary)]">
                  {pkg.priceGhs}
                </p>
                <p className="mt-1.5 text-sm font-medium text-[var(--brand-bright)]">
                  {pkg.priceUsd}
                </p>
                <p className="mt-1 text-sm text-[var(--text-tertiary)]">{pkg.timeline}</p>
              </div>

              <div className="rule-fade mb-7" />

              <ul className="mb-9 grow space-y-3.5">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-dim)] text-[var(--brand-bright)]">
                      <IconCheck className="h-2.5 w-2.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`group inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all ${
                  pkg.featured
                    ? 'bg-[var(--brand)] text-white shadow-lg shadow-[var(--brand)]/25 hover:bg-[var(--brand-bright)]'
                    : 'border border-[var(--surface-hairline-strong)] text-[var(--text-primary)] hover:border-[var(--brand-bright)] hover:bg-white/[0.03]'
                }`}
              >
                Start a conversation
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-xl text-center text-[var(--text-tertiary)]"
        >
          Payment is staged across the project, and mission schools and start-up
          institutions can ask about phased terms.
        </motion.p>
      </div>
    </section>
  );
}
