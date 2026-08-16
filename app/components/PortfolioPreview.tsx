'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section, { SectionHeading, revealVariants, staggerVariants } from './Section';
import { IconArrowRight } from './Icons';
import { featuredProjects } from '@/lib/projects';

export default function PortfolioPreview() {
  return (
    <Section tone="base" divided>
      <SectionHeading
        eyebrow="Selected work"
        title="Products we built before anyone asked us to"
        lead="We started building for schools because we needed these tools ourselves. Every project below is labelled honestly — what was built in-house, and what was open sourced."
      />

      <motion.div
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 gap-5 md:grid-cols-3"
      >
        {featuredProjects.map((project) => (
          <motion.article
            key={project.id}
            variants={revealVariants}
            className="panel panel-interactive group flex flex-col p-7"
          >
            <span className="mb-4 self-start rounded-full border border-[var(--surface-hairline-strong)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
              {project.type}
            </span>

            <h3 className="font-display text-xl text-[var(--text-primary)]">{project.name}</h3>
            <p className="mt-1 text-sm font-medium text-[var(--brand-bright)]">
              {project.summary}
            </p>

            <p className="mt-4 grow text-[15px] leading-relaxed text-[var(--text-secondary)]">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[var(--surface-hairline)] px-2 py-1 text-[11px] text-[var(--text-tertiary)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href="/portfolio"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-bright)]"
            >
              View project
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--surface-hairline-strong)] px-6 py-3 font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--brand-bright)] hover:bg-white/[0.03]"
        >
          See all work
          <IconArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </Section>
  );
}
