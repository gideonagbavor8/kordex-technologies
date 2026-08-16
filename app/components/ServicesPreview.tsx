'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section, { SectionHeading, revealVariants, staggerVariants } from './Section';
import { serviceIcons, IconArrowRight } from './Icons';
import { services } from '@/lib/services';

export default function ServicesPreview() {
  return (
    <Section tone="base" divided>
      <SectionHeading
        eyebrow="What we build"
        title="Four systems every school eventually needs"
        lead="Start with the one that hurts most. They are designed to connect, so nothing has to be rebuilt when you add the next."
      />

      <motion.div
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {services.map((service, i) => {
          const Icon = serviceIcons[service.slug];
          return (
            <motion.article key={service.slug} variants={revealVariants} className="group">
              <Link
                href={`/services#${service.slug}`}
                className="panel panel-interactive flex h-full flex-col p-7 sm:p-8"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--surface-hairline)] bg-[var(--brand-dim)] text-[var(--brand-bright)] transition-colors group-hover:border-[var(--brand)] group-hover:bg-[var(--brand)] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-sm text-[var(--text-tertiary)] opacity-50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-display text-[length:var(--text-h3)] text-[var(--text-primary)]">
                  {service.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--brand-bright)]">
                  {service.short}
                </p>

                <p className="mt-4 grow text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  {service.description.split('. ')[0]}.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-bright)]">
                  Explore
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.article>
          );
        })}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center text-[var(--text-tertiary)]"
      >
        Not a school?{' '}
        <Link
          href="/services#beyond-education"
          className="font-medium text-[var(--brand-bright)] underline-offset-4 hover:underline"
        >
          We take selected work outside education
        </Link>
        .
      </motion.p>
    </Section>
  );
}
