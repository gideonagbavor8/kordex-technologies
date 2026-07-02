import BlogHero from '../components/BlogHero';
import BlogGrid from '../components/BlogGrid';
import { getAllBlogPosts } from '@/lib/blog';

export default function Blog() {
  const posts = getAllBlogPosts();

  return (
    <main className="w-full">
      <BlogHero />
      <BlogGrid posts={posts} />
    </main>
  );
}
