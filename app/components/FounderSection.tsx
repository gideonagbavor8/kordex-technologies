'use client';

import { motion } from 'framer-motion';

export default function FounderSection() {
  const credentials = [
    'B.Ed Mathematics & ICT from Peki College of Education (University of Ghana)',
    'BSc Software Development at BYU-Idaho (graduating November 2026)',
    'ALX Back-End Development (Python/Django, 100.03%)',
    'Google Cybersecurity Professional Certificate',
    'Content Advisory Board at LogRocket',
    'Teaching background with Ghana Education Service',
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

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-[#0A1628] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#1E6FD9] to-[#4A9FFF] flex items-center justify-center">
              <span className="text-6xl font-bold text-white">GA</span>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl font-bold text-[#F5F7FA] mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Gideon Agbavor
              <br />
              <span className="text-[#4A9FFF]">Founder & Lead Engineer</span>
            </h2>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {credentials.map((cred, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 text-[#8BA5C8]"
                >
                  <span className="text-[#1E6FD9] font-bold mt-1">✓</span>
                  <span>{cred}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
