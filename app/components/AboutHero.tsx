'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
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
          About Kordex Technologies
        </h1>
        <p className="text-lg text-[#8BA5C8] leading-relaxed">
          Kordex Technologies is a Ghanaian technology firm founded by Gideon Agbavor, 
          combining software development, AI, cybersecurity, and education technology. 
          We're committed to delivering world-class solutions with a focus on innovation, 
          reliability, and global standards.
        </p>
      </motion.div>
    </section>
  );
}
