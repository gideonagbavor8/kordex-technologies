'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPostMeta } from '@/lib/blog';
import { IconArrowRight } from './Icons';

interface BlogCardProps {
  post: BlogPostMeta;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index, 5) * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-40px' }}
      className="panel panel-interactive group flex flex-col p-7"
    >
      <time dateTime={post.date} className="text-sm text-[var(--text-tertiary)]">
        {formattedDate}
      </time>

      <h2 className="mt-3 font-display text-xl leading-snug text-[var(--text-primary)] transition-colors group-hover:text-[var(--brand-bright)]">
        {/* Stretched link makes the whole card clickable without nesting anchors. */}
        <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
          {post.title}
        </Link>
      </h2>

      <p className="mt-3 grow text-[15px] leading-relaxed text-[var(--text-secondary)]">
        {post.excerpt}
      </p>

      {post.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[var(--surface-hairline)] px-2 py-1 text-[11px] text-[var(--text-tertiary)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-bright)]">
        Read more
        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </motion.article>
  );
}
