'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

type Category = 'All' | 'Web & App' | 'AI' | 'Cybersecurity' | 'EdTech';

const projects = [
  {
    id: 1,
    name: 'CurriculumCraft AI',
    description:
      'AI-powered lesson planning platform designed specifically for Ghanaian JHS teachers. Generates curriculum-aligned lessons instantly.',
    stack: ['Next.js 15', 'Tailwind CSS v4', 'Drizzle ORM', 'Neon PostgreSQL', 'GitHub Models'],
    category: ['AI', 'EdTech'],
    live: 'https://curriculumcraft-ai.vercel.app',
    github: 'https://github.com/gideonagbavor8/curriculumcraft-ai',
  },
  {
    id: 2,
    name: 'Tarso Hotel Website',
    description:
      'Professional hotel website with modern booking interface and responsive design for premium user experience.',
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    category: ['Web & App'],
    live: 'https://tarso-hotel.vercel.app',
  },
  {
    id: 3,
    name: 'TaskFlow',
    description:
      'Full-stack task management application with real-time collaboration features and intuitive UI.',
    stack: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    category: ['Web & App'],
  },
  {
    id: 4,
    name: 'SecureVault',
    description:
      'Enterprise-grade password manager with AES-256-GCM encryption and secure credential storage.',
    stack: ['Next.js', 'Express', 'PostgreSQL', 'Docker', 'Encryption'],
    category: ['Cybersecurity', 'Web & App'],
  },
  {
    id: 5,
    name: 'EduKrom LMS',
    description:
      'Ghana-specific Learning Management System aligned to NaCCA/GES curriculum standards. Complete school management suite.',
    stack: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL', 'Turborepo'],
    category: ['EdTech'],
  },
  {
    id: 6,
    name: 'PhishPhalanx',
    description:
      'Advanced threat intelligence CLI tool for cybersecurity professionals. Real-time threat detection and analysis.',
    stack: ['Node.js', 'MongoDB', 'CLI'],
    category: ['Cybersecurity'],
    github: 'https://github.com/gideonagbavor8/phishphalanx',
  },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const categories: Category[] = ['All', 'Web & App', 'AI', 'Cybersecurity', 'EdTech'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section className="py-20 bg-[#0A1628] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-[#1E6FD9] text-white shadow-lg shadow-[#1E6FD9]/50'
                  : 'bg-[#112040] text-[#8BA5C8] border border-[#1E6FD9]/20 hover:border-[#1E6FD9]/40 hover:text-[#4A9FFF]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              stack={project.stack}
              category={project.category}
              live={project.live}
              github={project.github}
              index={index}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-[#8BA5C8]">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
