'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { serviceIcons, IconCheck, IconArrowRight } from './Icons';
import type { Service } from '@/lib/services';

/**
 * One service, rendered from data. Replaces the four hand-written service
 * components that shared the same markup with different strings.
 *
 * `flip` alternates the column order down the page so the eye has something to
 * track instead of four identical left-right blocks.
 */
export default function ServiceBlock({
  service,
  index,
  flip = false,
}: {
  service: Service;
  index: number;
  flip?: boolean;
}) {
  const Icon = serviceIcons[service.slug];
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id={service.slug}
      className={`relative scroll-mt-28 border-t border-[var(--surface-hairline)] py-20 sm:py-28 ${
        index % 2 === 1 ? 'bg-[var(--surface-raised)]' : 'bg-[var(--surface-base)]'
      }`}
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            viewport={{ once: true, margin: '-80px' }}
            className={flip ? 'lg:order-2' : ''}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="inline-flex h-13 w-13 items-center justify-center rounded-xl border border-[var(--surface-hairline)] bg-[var(--brand-dim)] p-3 text-[var(--brand-bright)]">
                <Icon className="h-7 w-7" />
              </span>
              <span className="font-display text-3xl text-[var(--text-tertiary)] opacity-40">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <h2 className="font-display text-[length:var(--text-h2)] leading-[1.12] text-[var(--text-primary)]">
              {service.name}
            </h2>
            <p className="mt-3 font-display text-xl italic text-[var(--brand-bright)]">
              {service.headline}
            </p>

            <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
              {service.description}
            </p>

            {/* The pains, stated plainly */}
            <div className="mt-8">
              <p className="eyebrow mb-4">Sound familiar?</p>
              <ul className="space-y-2.5">
                {service.problems.map((problem) => (
                  <li
                    key={problem}
                    className="flex gap-3 text-[15px] leading-relaxed text-[var(--text-secondary)]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--danger)] opacity-70"
                      aria-hidden="true"
                    />
                    {problem}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 font-semibold text-[var(--brand-bright)]"
            >
              Talk about this for your school
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
            viewport={{ once: true, margin: '-80px' }}
            className={`panel p-8 ${flip ? 'lg:order-1' : ''}`}
          >
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              What you get
            </h3>

            <ul className="mt-6 space-y-4">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3.5">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-dim)] text-[var(--brand-bright)]">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="rule-fade my-7" />

            <p className="eyebrow mb-3">Built with</p>
            <div className="flex flex-wrap gap-1.5">
              {service.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[var(--surface-hairline)] px-2.5 py-1 text-xs text-[var(--text-tertiary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
