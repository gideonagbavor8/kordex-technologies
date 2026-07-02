'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * (i + 1), duration: 0.3 },
    }),
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1628]/80 backdrop-blur-md shadow-lg'
          : 'bg-[#0A1628]/40 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#1E6FD9] rounded flex items-center justify-center font-semibold text-white group-hover:shadow-lg transition-shadow">
              KX
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-white font-semibold">Kordex</span>
              <span className="text-[#4A9FFF] text-sm font-medium leading-none">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
              >
                <Link
                  href={link.href}
                  className="text-[#E8EDF5] hover:text-[#4A9FFF] transition-colors text-sm font-medium"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              custom={navLinks.length}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <Link
                href="/contact"
                className="px-6 py-2 bg-[#1E6FD9] text-white rounded-lg hover:bg-[#4A9FFF] transition-colors font-medium text-sm"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#E8EDF5] hover:text-[#4A9FFF] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-[#E8EDF5] hover:bg-[#1E6FD9]/20 rounded transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 bg-[#1E6FD9] text-white rounded hover:bg-[#4A9FFF] transition-colors font-medium text-sm text-center"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
