import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A1628] flex flex-col items-center justify-center text-center px-6">
      <div className="mb-6 text-[#1E6FD9] text-8xl font-bold font-playfair">404</div>
      <h1 className="text-white text-3xl font-semibold mb-4">Page not found</h1>
      <p className="text-[#8BA5C8] text-lg mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#1E6FD9] text-white rounded-lg font-medium hover:bg-[#2578e8] transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}