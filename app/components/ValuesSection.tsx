'use client';

import { motion } from 'framer-motion';
import Section, { SectionHeading, revealVariants, staggerVariants } from './Section';
import { IconCompass, IconChecklist, IconChat, IconClock } from './Icons';

/**
 * Principles worth stating are ones a client could hold us to. Generic virtues
 * ("excellence", "innovation") tell a buyer nothing, so each of these is a
 * commitment with a visible consequence.
 */
const values = [
  {
    icon: IconCompass,
    title: 'Built for here',
    body: 'NaCCA standards, GES reporting formats and Ghanaian fee structures are the starting point, not a localisation task we get to later.',
  },
  {
    icon: IconChecklist,
    title: 'Priced before we start',
    body: 'You approve a fixed figure against a written scope. If the scope changes, we quote the change before doing the work — never after.',
  },
  {
    icon: IconChat,
    title: 'You talk to the builder',
    body: 'No account managers relaying messages. The person answering your questions is the person writing your software.',
  },
  {
    icon: IconClock,
    title: 'We stay for the first term',
    body: 'Launch is the easy part. We stay close through your first full term, because that is when the questions that matter actually surface.',
  },
];

export default function ValuesSection() {
  return (
    <Section tone="base" divided>
      <SectionHeading
        eyebrow="How we operate"
        title="Four commitments you can hold us to"
        lead="Stated plainly, so you can tell whether we kept them."
      />

      <motion.div
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {values.map(({ icon: Icon, title, body }) => (
          <motion.div
            key={title}
            variants={revealVariants}
            className="panel panel-interactive group flex gap-5 p-7"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--surface-hairline)] bg-[var(--brand-dim)] text-[var(--brand-bright)] transition-colors group-hover:border-[var(--brand)] group-hover:bg-[var(--brand)] group-hover:text-white">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">
                {title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
                {body}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
