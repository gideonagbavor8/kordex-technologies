'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesPreview() {
  const services = [
    {
      name: 'Web & App Development',
      description: 'Modern, scalable applications built with cutting-edge technologies.',
      icon: '🌐',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      name: 'AI & Automation',
      description: 'Intelligent solutions powered by machine learning and automation.',
      icon: '🤖',
      tech: ['Python', 'TensorFlow', 'LLMs', 'RPA'],
    },
    {
      name: 'Cybersecurity',
      description: 'Secure your digital assets with enterprise-grade protection.',
      icon: '🔒',
      tech: ['Security Audits', 'Encryption', 'Penetration Testing', 'Compliance'],
    },
    {
      name: 'Education Technology',
      description: 'Innovative learning platforms that empower students globally.',
      icon: '📚',
      tech: ['EdTech', 'LMS', 'Interactive Content', 'Analytics'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
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
            Services built for modern businesses
          </h2>
          <p className="text-[#8BA5C8] text-lg max-w-2xl mx-auto">
            We deliver comprehensive solutions across multiple domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-8 bg-gradient-to-br from-[#112040] to-[#0A1628] border border-[#1E6FD9]/20 rounded-xl hover:border-[#1E6FD9]/40 transition-all group cursor-pointer"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#E8EDF5] mb-3">
                {service.name}
              </h3>
              <p className="text-[#8BA5C8] mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs font-medium bg-[#1E6FD9]/20 text-[#4A9FFF] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="text-[#4A9FFF] font-semibold hover:text-[#1E6FD9] transition-colors"
          >
            View all services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
