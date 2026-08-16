'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconArrowRight, IconChat } from './Icons';
import { hasWhatsApp, whatsappLink } from '@/lib/site';

export default function CTABanner() {
  return (
    <section className="relative isolate overflow-hidden border-t border-[var(--surface-hairline)] bg-[var(--surface-base)] py-24 sm:py-32">
      <div
        className="dot-field absolute inset-0 opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 72%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 72%)',
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand)] opacity-[0.11] blur-[130px]" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: '-80px' }}
        className="container-page relative z-10 text-center"
      >
        <h2 className="mx-auto max-w-2xl font-display text-[length:var(--text-h2)] leading-[1.1] text-[var(--text-primary)]">
          What would your teachers do with their weekends back?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">
          Twenty minutes, no obligation. You will leave with a clear view of what to fix
          first — whether or not you work with us.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--brand)] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[var(--brand)]/25 transition-all hover:bg-[var(--brand-bright)] hover:shadow-xl hover:shadow-[var(--brand)]/30"
          >
            Book a free consultation
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {hasWhatsApp && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--surface-hairline-strong)] px-7 py-3.5 font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--brand-bright)] hover:bg-white/[0.03]"
            >
              <IconChat className="h-4 w-4" />
              Message on WhatsApp
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}
