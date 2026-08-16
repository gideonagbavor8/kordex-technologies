'use client';

import { motion } from 'framer-motion';

export default function PortfolioHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--surface-base)] pt-36 pb-16 sm:pt-40">
      <div
        className="dot-field absolute inset-0 opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 10%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 30%, #000 10%, transparent 75%)',
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[var(--brand)] opacity-[0.1] blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="container-page relative z-10"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5 justify-center">
            <span className="h-px w-6 bg-[var(--brand-bright)] opacity-60" />
            Our work
          </p>
          <h1 className="font-display text-[length:var(--text-h1)] leading-[1.06] text-[var(--text-primary)]">
            What we have built so far
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
            Every project is labelled for what it is — client work, a product we built
            in-house, or something we open sourced. We would rather show you less and
            have you trust all of it.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
