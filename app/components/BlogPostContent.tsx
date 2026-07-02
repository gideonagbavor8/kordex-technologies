'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

interface BlogPostContentProps {
  post: BlogPost;
  readingTime: number;
}

export default function BlogPostContent({ post, readingTime }: BlogPostContentProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Simple markdown to HTML converter for headings and paragraphs
  const renderMarkdown = (content: string) => {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('## ')) {
        return (
          <h2
            key={i}
            className="text-3xl font-bold text-[#E8EDF5] mt-8 mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {line.replace(/^## /, '')}
          </h2>
        );
      }
      if (line.startsWith('# ')) {
        return (
          <h1
            key={i}
            className="text-4xl font-bold text-[#E8EDF5] mt-8 mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {line.replace(/^# /, '')}
          </h1>
        );
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <p key={i} className="text-[#8BA5C8] mb-4">
            <strong className="text-[#E8EDF5]">{line.replace(/\*\*/g, '')}</strong>
          </p>
        );
      }
      if (line.startsWith('-')) {
        return (
          <li key={i} className="text-[#8BA5C8] ml-6 mb-2 list-disc">
            {line.replace(/^- /, '')}
          </li>
        );
      }
      if (line.trim() === '') {
        return <div key={i} className="h-2" />;
      }
      if (line.trim() !== '') {
        return (
          <p key={i} className="text-[#8BA5C8] mb-4 leading-relaxed">
            {line}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <article className="min-h-screen bg-[#0A1628] pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-[#4A9FFF] hover:text-[#1E6FD9] transition-colors font-medium"
          >
            ← Back to blog
          </Link>
        </motion.div>

        {/* Post header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1
            className="text-5xl sm:text-6xl font-bold text-[#F5F7FA] mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {post.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-[#8BA5C8] text-sm mb-6">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-[#1E6FD9]/20 text-[#4A9FFF] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#1E6FD9]/0 via-[#1E6FD9]/20 to-[#1E6FD9]/0 mb-12" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          {renderMarkdown(post.content)}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#1E6FD9]/0 via-[#1E6FD9]/20 to-[#1E6FD9]/0 my-12" />

        {/* Back link at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-[#4A9FFF] hover:text-[#1E6FD9] transition-colors font-medium"
          >
            ← Back to blog
          </Link>
        </motion.div>
      </div>
    </article>
  );
}
