'use client';

import { motion } from 'framer-motion';
import Section, { SectionHeading, revealVariants, staggerVariants } from './Section';

/**
 * Grouped by what each layer does for the client, so a school head reads
 * capability rather than a wall of framework names they have no way to judge.
 */
const groups = [
  {
    label: 'Applications',
    detail: 'What your staff and parents use every day.',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    label: 'Data',
    detail: 'Where student records live, and how they stay correct.',
    items: ['PostgreSQL', 'Prisma', 'Drizzle ORM', 'Node.js'],
  },
  {
    label: 'Intelligence',
    detail: 'The lesson planning and assessment tooling.',
    items: ['Python', 'Django', 'LLM integration'],
  },
  {
    label: 'Operations',
    detail: 'Keeping it fast, backed up and online.',
    items: ['Vercel', 'Docker', 'Automated backups', 'Encryption'],
  },
];

export default function TechStack() {
  return (
    <Section tone="raised" divided>
      <SectionHeading
        eyebrow="Under the hood"
        title="Modern tools, chosen to still be here in five years"
        lead="Schools cannot afford software that becomes unmaintainable. We build on technology with long support horizons and a wide pool of engineers who know it."
      />

      <motion.div
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        {groups.map((group) => (
          <motion.div key={group.label} variants={revealVariants} className="panel p-7">
            <h3 className="font-display text-xl text-[var(--text-primary)]">
              {group.label}
            </h3>
            <p className="mt-1.5 text-sm text-[var(--text-tertiary)]">{group.detail}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-[var(--surface-hairline)] bg-[var(--surface-base)] px-3 py-1.5 text-sm text-[var(--text-secondary)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
