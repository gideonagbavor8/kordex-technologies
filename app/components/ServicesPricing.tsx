'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesPricing() {
  return (
    <section className="py-20 bg-[#0A1628] px-4 sm:px-6 lg:px-8 border-t border-[#1E6FD9]/20">
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
          Pricing & Consultation
        </h2>
        <p className="text-lg text-[#8BA5C8] mb-8 leading-relaxed">
          Every project is scoped and priced individually. We believe in transparency and 
          customized solutions tailored to your specific needs and budget.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-[#1E6FD9] text-white rounded-lg font-medium hover:bg-[#4A9FFF] transition-colors"
        >
          Get a Free Consultation
        </Link>
      </motion.div>
    </section>
  );
}
