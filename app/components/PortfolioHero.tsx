'use client';

import { motion } from 'framer-motion';

export default function PortfolioHero() {
  return (
    <section className="py-20 bg-[#0A1628] px-4 sm:px-6 lg:px-8 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1
          className="text-5xl sm:text-6xl font-bold text-[#F5F7FA] mb-6"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Our Portfolio
        </h1>
        <p className="text-lg text-[#8BA5C8] leading-relaxed">
          Selected projects showcasing our expertise across web development, AI, cybersecurity, 
          and education technology. Each project represents our commitment to excellence and innovation.
        </p>
      </motion.div>
    </section>
  );
}
