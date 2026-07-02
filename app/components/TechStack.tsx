'use client';

import { motion } from 'framer-motion';

export default function TechStack() {
  const technologies = [
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Prisma',
    'Docker',
    'Tailwind CSS',
    'Python',
    'Django',
    'Vercel',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 bg-[#112040] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-[#F5F7FA] mb-12"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Technology Stack
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              variants={badgeVariants}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-[#1E6FD9] text-white font-medium rounded-full hover:bg-[#4A9FFF] transition-colors cursor-pointer"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
