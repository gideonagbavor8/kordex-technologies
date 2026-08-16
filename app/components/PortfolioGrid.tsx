'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects, projectCategories, type ProjectCategory } from '@/lib/projects';

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section className="border-t border-[var(--surface-hairline)] bg-[var(--surface-base)] py-20 sm:py-24">
      <div className="container-page">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((cat) => {
            const active = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={active}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'text-white'
                    : 'border border-[var(--surface-hairline)] text-[var(--text-secondary)] hover:border-[var(--surface-hairline-strong)] hover:text-[var(--text-primary)]'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-[var(--brand)]"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <span className="relative">{cat}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center text-[var(--text-tertiary)]"
          >
            No projects in this category yet.
          </motion.p>
        )}
      </div>
    </section>
  );
}
