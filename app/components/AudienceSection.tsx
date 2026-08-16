'use client';

import { motion } from 'framer-motion';
import Section, { revealVariants, staggerVariants } from './Section';
import { IconSchool, IconUsers, IconCompass, IconTrend } from './Icons';

const audiences = [
  {
    icon: IconSchool,
    title: 'Private schools',
    body: 'Basic and senior high schools that want better systems than their competitors down the road — and want parents to notice.',
  },
  {
    icon: IconUsers,
    title: 'School groups',
    body: 'Multi-campus operators who need consistent records, comparable results and one view across every branch.',
  },
  {
    icon: IconCompass,
    title: 'GES districts',
    body: 'District offices coordinating many public schools, where reporting has to roll up cleanly without more paperwork.',
  },
  {
    icon: IconTrend,
    title: 'Publishers & EdTech',
    body: 'Education businesses that need a technical partner who already understands the curriculum they are publishing into.',
  },
];

export default function AudienceSection() {
  return (
    <Section tone="raised" divided>
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        {/* Left: the argument */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <p className="eyebrow mb-4">
            <span className="h-px w-6 bg-[var(--brand-bright)] opacity-60" />
            Who we build for
          </p>
          <h2 className="font-display text-[length:var(--text-h2)] leading-[1.1] text-[var(--text-primary)]">
            We only work with education.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">
            An agency in Accra can write the same code. A software company abroad can
            build a slicker product. Neither has stood in front of a Ghanaian classroom,
            filled in a NaCCA scheme of work, or waited on a terminal report deadline.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
            That is the whole reason this company exists — and the reason we do not
            pretend to be everything to everyone.
          </p>

          <div className="rule-fade my-8" />

          <blockquote className="border-l-2 border-[var(--brand)] pl-5">
            <p className="font-display text-xl italic leading-relaxed text-[var(--text-primary)]">
              “Most school software fails because it was designed for a school system
              that isn’t ours.”
            </p>
            <footer className="mt-3 text-sm text-[var(--text-tertiary)]">
              Gideon Agbavor — Founder, former GES teacher
            </footer>
          </blockquote>
        </motion.div>

        {/* Right: the segments */}
        <motion.ul
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {audiences.map(({ icon: Icon, title, body }) => (
            <motion.li
              key={title}
              variants={revealVariants}
              className="panel panel-interactive group p-6"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--surface-hairline)] bg-[var(--brand-dim)] text-[var(--brand-bright)] transition-colors group-hover:border-[var(--brand)] group-hover:bg-[var(--brand)] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
