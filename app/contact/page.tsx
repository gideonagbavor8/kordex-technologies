// 'use client';

import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import ContactForm from '@/app/components/ContactForm';




export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with Kordex Technologies. Get a response within 24 hours.',
};

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="w-full bg-[#0A1628] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-start"
          >
            {/* Heading */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1
                className="text-5xl sm:text-6xl font-bold text-[#F5F7FA] mb-4 font-playfair"
              >
                {`Let's build something great.`}
              </h1>
              <p className="text-[#8BA5C8] text-lg">
                {`We'll respond to your inquiry within 24 hours.`}
              </p>
            </motion.div>

            {/* Contact Info Items */}
            <motion.div variants={itemVariants} className="space-y-8 mb-12">
              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#1E6FD9]/20">
                    <span className="text-xl">✉️</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#F5F7FA] font-semibold mb-1 font-playfair">Email</h3>
                  <a
                    href="mailto:gideonagbavor8@gmail.com"
                    // href="mailto:hello@kordextechnologies.com"
                    className="text-[#4A9FFF] hover:text-[#1E6FD9] transition-colors"
                  >
                    {/* hello@kordextechnologies.com */}
                    gideonagbavor8@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#1E6FD9]/20">
                    <span className="text-xl">📍</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#F5F7FA] font-semibold mb-1 font-playfair">Location</h3>
                  <p className="text-[#8BA5C8]">Ho, Volta Region, Ghana</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#1E6FD9]/20">
                    <span className="text-xl">💬</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#F5F7FA] font-semibold mb-1 font-playfair">WhatsApp</h3>
                  <p className="text-[#8BA5C8]">Available on request</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-[#F5F7FA] font-semibold mb-4 font-playfair">Connect with us</h3>
              <div className="flex gap-6">
                <a
                  href="https://github.com/gideonagbavor8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-[#1E6FD9]/20 text-[#4A9FFF] hover:bg-[#1E6FD9]/40 hover:text-[#1E6FD9] transition-all"
                  title="GitHub"
                >
                  ⚙️
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-[#1E6FD9]/20 text-[#4A9FFF] hover:bg-[#1E6FD9]/40 hover:text-[#1E6FD9] transition-all"
                  title="LinkedIn"
                >
                  💼
                </a>
                <a
                  href="https://x.com/KordexTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-[#1E6FD9]/20 text-[#4A9FFF] hover:bg-[#1E6FD9]/40 hover:text-[#1E6FD9] transition-all"
                  title="X (Twitter)"
                >
                  𝕏
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#112040] to-[#0A1628] border border-[#1E6FD9]/20 rounded-xl p-8 md:p-10"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
