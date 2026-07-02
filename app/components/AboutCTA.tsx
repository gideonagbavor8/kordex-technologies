'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="py-20 bg-[#112040] px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2
          className="text-4xl font-bold text-[#F5F7FA] mb-6"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Ready to collaborate?
        </h2>
        <p className="text-lg text-[#8BA5C8] mb-8">
          Let's discuss how Kordex Technologies can help bring your vision to life.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-[#1E6FD9] text-white rounded-lg font-medium hover:bg-[#4A9FFF] transition-colors"
        >
          Work with us
        </Link>
      </motion.div>
    </section>
  );
}
