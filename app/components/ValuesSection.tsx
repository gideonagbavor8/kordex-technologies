'use client';

import { motion } from 'framer-motion';

export default function ValuesSection() {
  const values = [
    {
      title: 'African Excellence',
      description: 'Proud to build world-class solutions rooted in African innovation and excellence.',
    },
    {
      title: 'Global Standards',
      description: 'We adhere to international best practices in technology, security, and quality.',
    },
    {
      title: 'Reliable Delivery',
      description: 'Consistent, on-time delivery with a commitment to your success.',
    },
    {
      title: 'Clear Communication',
      description: 'Transparent, honest conversations with every stakeholder at every stage.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-[#0A1628] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-[#F5F7FA] mb-12"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Our Values
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {values.map((value, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="p-8 bg-gradient-to-br from-[#112040] to-[#0A1628] border border-[#1E6FD9]/20 rounded-xl hover:border-[#1E6FD9]/40 transition-all"
            >
              <h3 className="text-2xl font-semibold text-[#1E6FD9] mb-3">
                {value.title}
              </h3>
              <p className="text-[#8BA5C8]">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
