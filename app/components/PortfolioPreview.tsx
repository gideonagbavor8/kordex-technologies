'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioPreview() {
  const projects = [
    {
      name: 'CurriculumCraft AI',
      description: 'AI-powered curriculum generation platform for educators worldwide.',
      tech: ['Next.js', 'OpenAI', 'Tailwind CSS', 'PostgreSQL'],
      image: '🎓',
    },
    {
      name: 'Tarso Hotel',
      description: 'Luxury hotel booking and management system with real-time updates.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🏨',
    },
    {
      name: 'SecureVault',
      description: 'Enterprise password management and security solution.',
      tech: ['TypeScript', 'Encryption', 'Security Audit', 'AWS'],
      image: '🔐',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#F5F7FA] mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Selected work
          </h2>
          <p className="text-[#8BA5C8] text-lg">
            Featured projects that showcase our expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="p-8 bg-gradient-to-br from-[#112040] to-[#0A1628] border border-[#1E6FD9]/20 rounded-xl hover:border-[#1E6FD9]/40 transition-all"
            >
              <div className="text-5xl mb-4">{project.image}</div>
              <h3 className="text-xl font-semibold text-[#E8EDF5] mb-3">
                {project.name}
              </h3>
              <p className="text-[#8BA5C8] mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs font-medium bg-[#1E6FD9]/20 text-[#4A9FFF] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href="/portfolio"
                className="text-[#4A9FFF] font-semibold hover:text-[#1E6FD9] transition-colors text-sm"
              >
                View project →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="text-[#4A9FFF] font-semibold hover:text-[#1E6FD9] transition-colors"
          >
            See all projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
