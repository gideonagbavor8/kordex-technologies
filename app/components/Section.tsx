'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

/**
 * Section rhythm primitive.
 *
 * Previously every section repeated `py-20 bg-[#0A1628]`, so the page read as
 * one undifferentiated column. `tone` alternates the ground colour to give the
 * page vertical rhythm, and the spacing scale lives in one place.
 */

type Tone = 'base' | 'raised';

interface SectionProps {
  children: ReactNode;
  tone?: Tone;
  /** Adds a hairline top border — use when two same-tone sections meet. */
  divided?: boolean;
  id?: string;
  className?: string;
}

const toneClasses: Record<Tone, string> = {
  base: 'bg-[var(--surface-base)]',
  raised: 'bg-[var(--surface-raised)]',
};

export default function Section({
  children,
  tone = 'base',
  divided = false,
  id,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-28 ${toneClasses[tone]} ${
        divided ? 'border-t border-[var(--surface-hairline)]' : ''
      } ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-80px' }}
      className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} mb-14 sm:mb-16 ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow mb-4 ${centered ? 'justify-center' : ''}`}>
          <span className="h-px w-6 bg-[var(--brand-bright)] opacity-60" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[length:var(--text-h2)] leading-[1.1] text-[var(--text-primary)]">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">{lead}</p>
      )}
    </motion.div>
  );
}

/** Standard entrance animation for content blocks below a heading. */
export const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};
