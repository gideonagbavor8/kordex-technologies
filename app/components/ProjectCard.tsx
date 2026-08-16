'use client';

import { motion } from 'framer-motion';
import { IconArrowRight } from './Icons';
import type { Project, ProjectType } from '@/lib/projects';

const typeStyles: Record<ProjectType, string> = {
  'Client project': 'border-[var(--success)]/35 bg-[var(--success)]/10 text-[var(--success)]',
  'In-house product': 'border-[var(--brand-bright)]/35 bg-[var(--brand-dim)] text-[var(--brand-bright)]',
  'Open source': 'border-[var(--surface-hairline-strong)] text-[var(--text-tertiary)]',
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const hasLinks = Boolean(project.live || project.github);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index, 5) * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-40px' }}
      className="panel panel-interactive group flex flex-col p-7"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <span
          className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${typeStyles[project.type]}`}
        >
          {project.type}
        </span>
        <span className="font-display text-sm text-[var(--text-tertiary)] opacity-40">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="font-display text-xl text-[var(--text-primary)]">{project.name}</h3>
      <p className="mt-1 text-sm font-medium text-[var(--brand-bright)]">{project.summary}</p>

      <p className="mt-4 grow text-[15px] leading-relaxed text-[var(--text-secondary)]">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-[var(--surface-hairline)] px-2 py-1 text-[11px] text-[var(--text-tertiary)]"
          >
            {tech}
          </span>
        ))}
      </div>

      {hasLinks ? (
        <div className="mt-7 flex gap-2.5">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-bright)]"
            >
              Live demo
              <IconArrowRight className="h-3.5 w-3.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-lg border border-[var(--surface-hairline-strong)] px-4 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--brand-bright)] hover:bg-white/[0.03]"
            >
              Source code
            </a>
          )}
        </div>
      ) : (
        // An unverifiable claim is worse than an absent one — say so plainly
        // rather than leaving a card that looks like it lost its buttons.
        <p className="mt-7 rounded-lg border border-dashed border-[var(--surface-hairline)] px-4 py-2.5 text-center text-xs text-[var(--text-tertiary)]">
          Private build — demo available on request
        </p>
      )}
    </motion.article>
  );
}
