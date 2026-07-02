'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="py-20 bg-[#112040] px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2
          className="text-4xl sm:text-5xl font-bold text-[#F5F7FA] mb-6"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Ready to build something great?
        </h2>
        <p className="text-[#8BA5C8] text-lg mb-8">
          Let's discuss your next project and bring your ideas to life.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-[#1E6FD9] text-white rounded-lg font-medium hover:bg-[#4A9FFF] transition-colors"
        >
          Start a Project
        </Link>
      </motion.div>
    </section>
  );
}
