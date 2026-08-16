'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/lib/services';
import { serviceIcons } from './Icons';

export default function ServicesHero() {
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--surface-base)] pt-36 pb-20 sm:pt-40">
      <div
        className="dot-field absolute inset-0 opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 10%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 30%, #000 10%, transparent 75%)',
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[var(--brand)] opacity-[0.11] blur-[120px]" />

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="eyebrow mb-5 justify-center">
            <span className="h-px w-6 bg-[var(--brand-bright)] opacity-60" />
            What we build
          </p>
          <h1 className="font-display text-[length:var(--text-h1)] leading-[1.06] text-[var(--text-primary)]">
            Everything a school needs to run on software instead of paper
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
            Four systems, designed to work together. Start with whichever one is costing
            your staff the most time — nothing has to be rebuilt when you add the next.
          </p>
        </motion.div>

        {/* Jump links */}
        <motion.nav
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 lg:grid-cols-4"
          aria-label="Jump to a service"
        >
          {services.map((service) => {
            const Icon = serviceIcons[service.slug];
            return (
              <Link
                key={service.slug}
                href={`#${service.slug}`}
                className="panel panel-interactive group flex flex-col gap-3 p-5 text-left"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--brand-dim)] text-[var(--brand-bright)] transition-colors group-hover:bg-[var(--brand)] group-hover:text-white">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm font-semibold leading-snug text-[var(--text-primary)]">
                  {service.name}
                </span>
              </Link>
            );
          })}
        </motion.nav>
      </div>
    </section>
  );
}
