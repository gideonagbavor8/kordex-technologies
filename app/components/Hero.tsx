'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const stats = [
    { label: '4+ Service areas', value: '' },
    { label: '100% Remote-ready', value: '' },
    { label: 'GH Based in Ghana', value: '' },
  ];

  return (
    <section className="relative min-h-screen bg-[#0A1628] overflow-hidden flex items-center justify-center pt-20">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, #1E6FD9 1px, transparent 1px), linear-gradient(0deg, #1E6FD9 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Blue glow radial gradients */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[#1E6FD9] rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-[#4A9FFF] rounded-full opacity-5 blur-3xl" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div variants={badgeVariants} className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E6FD9]/10 border border-[#1E6FD9]/20">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[#4A9FFF] rounded-full"
            />
            <span className="text-[#4A9FFF] text-sm font-medium">
              Now accepting new projects
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F5F7FA] mb-6"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Connecting ideas to intelligent execution.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-[#8BA5C8] mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Kordex Technologies builds world-class web applications, AI-powered tools,
          cybersecurity solutions, and education technology — crafted in Ghana, delivered
          globally.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="/services"
            className="px-8 py-3 bg-[#1E6FD9] text-white rounded-lg font-medium hover:bg-[#4A9FFF] transition-colors"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-[#1E6FD9] text-[#1E6FD9] rounded-lg font-medium hover:bg-[#1E6FD9]/10 transition-colors"
          >
            Start a Project →
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-[#1E6FD9]/20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
            >
              <p className="text-[#E8EDF5] font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
