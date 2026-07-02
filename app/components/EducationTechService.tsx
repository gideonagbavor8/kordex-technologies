'use client';

import { motion } from 'framer-motion';

export default function EducationTechService() {
  const stack = ['Next.js', 'PostgreSQL', 'NaCCA Standards', 'React', 'TypeScript'];
  const deliverables = [
    'Learning Management Systems (LMS)',
    'AI-powered lesson planners',
    'Curriculum-aligned tools',
    'School management systems',
    'Student assessment platforms',
    'Interactive learning content',
  ];

  return (
    <section className="py-20 bg-[#112040] px-4 sm:px-6 lg:px-8 border-t border-[#1E6FD9]/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          {/* Content (reversed order visually on desktop) */}
          <div className="md:order-2">
            <h2
              className="text-4xl font-bold text-[#F5F7FA] mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Education Technology
            </h2>
            <p className="text-[#8BA5C8] text-lg mb-6 leading-relaxed">
              Transform education with innovative learning platforms. We build curriculum tools, 
              LMS platforms, and AI-powered learning systems that empower educators and engage 
              students globally.
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-[#E8EDF5] font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 text-sm bg-[#1E6FD9]/20 text-[#4A9FFF] rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h3 className="text-[#E8EDF5] font-semibold mb-4">What's Included</h3>
              <ul className="space-y-2">
                {deliverables.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-[#8BA5C8]"
                  >
                    <span className="text-[#1E6FD9] font-bold mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Icon */}
          <div className="flex justify-center md:justify-start md:order-1">
            <div className="text-8xl">📚</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
