import type { Metadata } from 'next';
import BlogHero from '../components/BlogHero';
import BlogGrid from '../components/BlogGrid';
import { getAllBlogPosts } from '@/lib/blog';


export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on software development, AI, cybersecurity, and tech for African businesses — by Kordex Technologies.',
};

export default function Blog() {
  const posts = getAllBlogPosts();

  return (
    <main className="w-full">
      <BlogHero />
      <BlogGrid posts={posts} />
    </main>
  );
}
