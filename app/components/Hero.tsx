'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconArrowRight } from './Icons';

export default function Hero() {
  const ease = [0.22, 1, 0.36, 1] as const;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
  };

  // Commitments, not vanity metrics. Each answers an objection a school head
  // actually raises: will they reply, do they know our curriculum, will the
  // price move after we sign?
  const commitments = [
    { value: '24 hrs', label: 'Every enquiry answered' },
    { value: 'NaCCA-aligned', label: 'Built to the Ghanaian curriculum' },
    { value: 'Fixed price', label: 'Agreed before work starts' },
  ];

  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-[var(--surface-base)] pt-28 pb-20">
      {/* Ground texture, masked so it fades before the copy starts */}
      <div
        className="dot-field absolute inset-0 opacity-[0.5]"
        style={{
          maskImage: 'radial-gradient(ellipse 75% 55% at 50% 40%, #000 20%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 55% at 50% 40%, #000 20%, transparent 78%)',
        }}
      />

      {/* Depth: two soft light sources, offset so the glow is not symmetrical */}
      <div className="pointer-events-none absolute -left-40 top-[12%] h-[34rem] w-[34rem] rounded-full bg-[var(--brand)] opacity-[0.13] blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-[6%] h-[26rem] w-[26rem] rounded-full bg-[var(--brand-bright)] opacity-[0.07] blur-[120px]" />

      {/* Horizon line at the base of the hero */}
      <div className="rule-fade absolute inset-x-0 bottom-0" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-page relative z-10"
      >
        <div className="mx-auto max-w-3xl text-center">
          {/* Availability badge */}
          <motion.div variants={item} className="mb-8 flex justify-center">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--surface-hairline-strong)] bg-[var(--brand-dim)] px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <motion.span
                  animate={{ scale: [1, 2.2, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inline-flex h-full w-full rounded-full bg-[var(--brand-bright)]"
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-bright)]" />
              </span>
              <span className="text-sm font-medium text-[var(--brand-bright)]">
                Onboarding schools for the 2026/27 academic year
              </span>
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[length:var(--text-display)] leading-[1.02] text-[var(--text-primary)]"
          >
            Software for African schools,
            <br className="hidden sm:block" />{' '}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-[var(--brand-bright)]">
                built by a teacher.
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.85, ease }}
                className="absolute inset-x-0 bottom-1.5 z-0 h-[0.35em] origin-left bg-[var(--brand)] opacity-20"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl"
          >
            Kordex builds the systems Ghanaian schools actually need — lesson planning,
            student records, admissions and results — designed by someone who taught in
            the classroom before writing the code.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--brand)] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[var(--brand)]/25 transition-all hover:bg-[var(--brand-bright)] hover:shadow-xl hover:shadow-[var(--brand)]/30"
            >
              Book a free consultation
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--surface-hairline-strong)] px-7 py-3.5 font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--brand-bright)] hover:bg-white/[0.03]"
            >
              See what we build
            </Link>
          </motion.div>
        </div>

        {/* Commitments */}
        <motion.dl
          variants={item}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-[var(--surface-hairline)] bg-[var(--surface-hairline)] sm:grid-cols-3"
        >
          {commitments.map((c) => (
            <div
              key={c.value}
              className="bg-[var(--surface-base)] px-6 py-6 text-center transition-colors hover:bg-[var(--surface-raised)]"
            >
              <dt className="font-display text-2xl text-[var(--text-primary)]">{c.value}</dt>
              <dd className="mt-1.5 text-sm text-[var(--text-tertiary)]">{c.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
