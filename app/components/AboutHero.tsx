'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
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
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[var(--brand)] opacity-[0.1] blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease }}
        className="container-page relative z-10"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5 justify-center">
            <span className="h-px w-6 bg-[var(--brand-bright)] opacity-60" />
            About Kordex
          </p>
          <h1 className="font-display text-[length:var(--text-h1)] leading-[1.06] text-[var(--text-primary)]">
            We taught in the classrooms we now build for
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
            Kordex Technologies is a Ghanaian education technology company. We build the
            software schools here actually need — not adapted from a foreign system, and
            not guessed at from the outside.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
