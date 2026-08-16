'use client';

import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { BlogPostMeta } from '@/lib/blog';

interface BlogGridProps {
  posts: BlogPostMeta[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="border-t border-[var(--surface-hairline)] bg-[var(--surface-base)] py-20 sm:py-24">
      <div className="container-page">
        {posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="panel mx-auto max-w-lg p-10 text-center"
          >
            <p className="text-lg text-[var(--text-secondary)]">
              Nothing published yet — the first pieces are being written now.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
