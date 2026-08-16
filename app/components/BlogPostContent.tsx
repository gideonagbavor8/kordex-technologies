'use client';

import { Fragment, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import { IconArrowRight } from './Icons';

interface BlogPostContentProps {
  post: BlogPost;
  readingTime: number;
}

/**
 * Renders inline `**bold**`, `*italic*`, `` `code` `` and `[text](href)`.
 * The previous renderer only handled whole-line bold, so any emphasis inside a
 * sentence was printed with its literal asterisks.
 */
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(pattern).filter(Boolean);

  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`;

    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={key} className="font-semibold text-[var(--text-primary)]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={key}
          className="rounded border border-[var(--surface-hairline)] bg-[var(--surface-raised)] px-1.5 py-0.5 text-[0.9em] text-[var(--brand-bright)]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={key} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }

    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link;
      const external = /^https?:\/\//.test(href);
      return (
        <a
          key={key}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="text-[var(--brand-bright)] underline-offset-4 hover:underline"
        >
          {label}
        </a>
      );
    }

    return <Fragment key={key}>{part}</Fragment>;
  });
}

function renderMarkdown(content: string) {
  const blocks: ReactNode[] = [];
  const lines = content.split('\n');
  let listBuffer: string[] = [];

  const flushList = (key: string) => {
    if (listBuffer.length === 0) return;
    blocks.push(
      <ul key={key} className="my-6 space-y-2.5 pl-1">
        {listBuffer.map((entry, i) => (
          <li key={i} className="flex gap-3 leading-relaxed text-[var(--text-secondary)]">
            <span
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]"
              aria-hidden="true"
            />
            <span>{renderInline(entry, `li-${key}-${i}`)}</span>
          </li>
        ))}
      </ul>
    );
    listBuffer = [];
  };

  lines.forEach((raw, i) => {
    const line = raw.trimEnd();

    if (line.startsWith('- ') || line.startsWith('* ')) {
      listBuffer.push(line.slice(2));
      return;
    }

    flushList(`list-${i}`);

    if (line.startsWith('### ')) {
      blocks.push(
        <h3 key={i} className="mt-10 mb-3 font-display text-xl text-[var(--text-primary)]">
          {renderInline(line.slice(4), `h3-${i}`)}
        </h3>
      );
    } else if (line.startsWith('## ')) {
      blocks.push(
        <h2
          key={i}
          className="mt-12 mb-4 font-display text-2xl leading-snug text-[var(--text-primary)] sm:text-3xl"
        >
          {renderInline(line.slice(3), `h2-${i}`)}
        </h2>
      );
    } else if (line.startsWith('# ')) {
      blocks.push(
        <h2
          key={i}
          className="mt-12 mb-4 font-display text-3xl leading-snug text-[var(--text-primary)]"
        >
          {renderInline(line.slice(2), `h1-${i}`)}
        </h2>
      );
    } else if (line.startsWith('> ')) {
      blocks.push(
        <blockquote
          key={i}
          className="my-7 border-l-2 border-[var(--brand)] pl-5 font-display text-lg italic leading-relaxed text-[var(--text-primary)]"
        >
          {renderInline(line.slice(2), `q-${i}`)}
        </blockquote>
      );
    } else if (line.trim() !== '') {
      blocks.push(
        <p key={i} className="mb-5 text-[17px] leading-[1.75] text-[var(--text-secondary)]">
          {renderInline(line, `p-${i}`)}
        </p>
      );
    }
  });

  flushList('list-end');
  return blocks;
}

export default function BlogPostContent({ post, readingTime }: BlogPostContentProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="min-h-screen bg-[var(--surface-base)] pt-32 pb-24">
      <div className="container-page max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-tertiary)] transition-colors hover:text-[var(--brand-bright)]"
          >
            <IconArrowRight className="h-4 w-4 rotate-180" />
            All writing
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <h1 className="font-display text-[length:var(--text-h1)] leading-[1.08] text-[var(--text-primary)]">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[var(--text-tertiary)]">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formattedDate}</time>
            <span aria-hidden="true">·</span>
            <span>{readingTime} min read</span>
          </div>

          {post.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[var(--surface-hairline)] px-2.5 py-1 text-[11px] text-[var(--text-tertiary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.header>

        <div className="rule-fade my-10" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          {renderMarkdown(post.content)}
        </motion.div>

        <div className="rule-fade my-12" />

        {/* Closing conversion prompt — a reader who finishes a post is warm. */}
        <div className="panel p-8 text-center">
          <h2 className="font-display text-xl text-[var(--text-primary)]">
            Running a school and recognising these problems?
          </h2>
          <p className="mx-auto mt-3 max-w-md leading-relaxed text-[var(--text-secondary)]">
            A 20-minute consultation is free, and you leave with a clear view of what to
            fix first.
          </p>
          <Link
            href="/contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--brand-bright)]"
          >
            Book a consultation
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
