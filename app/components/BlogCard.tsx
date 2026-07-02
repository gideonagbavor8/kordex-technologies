'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPostMeta } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPostMeta;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 bg-gradient-to-br from-[#112040] to-[#0A1628] border border-[#1E6FD9]/20 rounded-xl hover:border-[#1E6FD9]/40 transition-all duration-300"
    >
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-[#E8EDF5] mb-2 line-clamp-2 hover:text-[#4A9FFF] transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-[#8BA5C8] text-sm">{formattedDate}</p>
      </div>

      <p className="text-[#8BA5C8] mb-4 line-clamp-3">{post.excerpt}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs bg-[#1E6FD9]/20 text-[#4A9FFF] rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center text-[#4A9FFF] hover:text-[#1E6FD9] transition-colors font-medium text-sm"
      >
        Read more →
      </Link>
    </motion.article>
  );
}
