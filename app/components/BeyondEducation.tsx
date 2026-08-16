'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconArrowRight } from './Icons';

/**
 * Deliberately understated. Education is the positioning, but turning away
 * good non-school work would be silly — this keeps the door open without
 * diluting the headline claim.
 */
export default function BeyondEducation() {
  return (
    <section
      id="beyond-education"
      className="scroll-mt-28 border-t border-[var(--surface-hairline)] bg-[var(--surface-raised)] py-20"
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="panel mx-auto flex max-w-4xl flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Beyond education</p>
            <h2 className="font-display text-2xl leading-snug text-[var(--text-primary)]">
              We take selected work outside the school sector
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
              Web applications, AI automation and security work for businesses we find
              interesting. Education is our specialism, not our limit — if the problem is
              a good fit, we would like to hear about it.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg border border-[var(--surface-hairline-strong)] px-6 py-3 font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--brand-bright)] hover:bg-white/[0.03]"
          >
            Tell us about it
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
