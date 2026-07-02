'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  name: string;
  description: string;
  stack: string[];
  category: string[];
  live?: string;
  github?: string;
  index: number;
}

export default function ProjectCard({
  name,
  description,
  stack,
  category,
  live,
  github,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative p-6 bg-gradient-to-br from-[#112040] to-[#0A1628] border border-[#1E6FD9]/20 rounded-xl hover:border-[#1E6FD9]/60 transition-all duration-300 overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E6FD9]/0 via-[#1E6FD9]/10 to-[#1E6FD9]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-[#E8EDF5] mb-2">{name}</h3>
          <p className="text-[#8BA5C8] text-sm leading-relaxed">{description}</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {category.map((cat, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium bg-[#1E6FD9]/30 text-[#4A9FFF] rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {stack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-[#1E6FD9]/20 text-[#4A9FFF] rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 text-sm bg-[#1E6FD9] text-white rounded hover:bg-[#4A9FFF] transition-colors text-center font-medium"
            >
              Live Demo →
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 text-sm border border-[#1E6FD9] text-[#4A9FFF] rounded hover:bg-[#1E6FD9]/10 transition-colors text-center font-medium"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
