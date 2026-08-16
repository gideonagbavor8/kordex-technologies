'use client';

import { motion } from 'framer-motion';
import Section, { SectionHeading, revealVariants, staggerVariants } from './Section';

const steps = [
  {
    step: '01',
    title: 'A conversation, not a pitch',
    body: 'Twenty minutes on how your school currently runs — records, reporting, admissions, fees. You leave with a clear picture of what is worth fixing first, whether or not you hire us.',
    duration: 'Week 1',
  },
  {
    step: '02',
    title: 'A written proposal',
    body: 'Exact scope, timeline and fixed price, in plain language. No hourly billing and no figure that moves after you sign. If it is not right, we revise it before anything is built.',
    duration: 'Week 1',
  },
  {
    step: '03',
    title: 'Build, in the open',
    body: 'You see working software every week, not a status report. Teachers and administrators try it while it is still cheap to change, so the finished system matches how your school actually works.',
    duration: 'Weeks 2–10',
  },
  {
    step: '04',
    title: 'Rollout and training',
    body: 'We migrate your existing records, train your staff on site, and stay close through the first full term — because the term after launch is when the real questions arrive.',
    duration: 'Launch term',
  },
];

export default function ProcessSection() {
  return (
    <Section tone="raised" divided>
      <SectionHeading
        eyebrow="How we work"
        title="No surprises, no moving prices"
        lead="Schools have been burned by software projects before. This is exactly how an engagement with us runs."
      />

      <motion.ol
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="relative mx-auto max-w-3xl"
      >
        {/* Spine */}
        <div
          className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-[var(--brand)] via-[var(--surface-hairline-strong)] to-transparent sm:block"
          aria-hidden="true"
        />

        {steps.map((s) => (
          <motion.li
            key={s.step}
            variants={revealVariants}
            className="relative flex gap-6 pb-10 last:pb-0"
          >
            <span className="relative z-10 hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[var(--surface-hairline-strong)] bg-[var(--surface-base)] font-display text-lg text-[var(--brand-bright)] sm:flex">
              {s.step}
            </span>

            <div className="pt-1">
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {s.title}
                </h3>
                <span className="rounded-full border border-[var(--surface-hairline)] px-2.5 py-0.5 text-xs font-medium text-[var(--text-tertiary)]">
                  {s.duration}
                </span>
              </div>
              <p className="leading-relaxed text-[var(--text-secondary)]">{s.body}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
