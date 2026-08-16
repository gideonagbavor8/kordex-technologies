'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // The menu closes from the links' own onClick rather than from a pathname
  // effect — reacting to navigation would setState during an effect and
  // trigger a cascading render.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'border-b border-[var(--surface-hairline)] bg-[var(--surface-base)]/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-page">
        <div className="flex h-20 items-center justify-between">
          {/* Logo lockup */}
          <Link href="/" className="group flex items-center gap-3" aria-label="Kordex Technologies — home">
            {/*
              The K mark only. The full lockup includes a navy "KORDEX
              TECHNOLOGIES" wordmark that would be unreadable on this dark
              header — and would duplicate the text beside it.
            */}
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={251}
              height={325}
              priority
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="text-[15px] font-semibold text-[var(--text-primary)]">
                Kordex
              </span>
              <span className="mt-0.5 text-[13px] font-medium text-[var(--brand-bright)]">
                Technologies
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-[var(--text-primary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3.5 -bottom-px h-0.5 rounded-full bg-[var(--brand-bright)]"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </Link>
            ))}

            <Link
              href="/contact"
              className="ml-3 rounded-lg bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--brand)]/20 transition-colors hover:bg-[var(--brand-bright)]"
            >
              Book a consultation
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-primary)] transition-colors hover:bg-white/5 md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d={isOpen ? 'M6 18 18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/*
        Rendered conditionally rather than collapsed to height 0 — the old
        version kept its links in the tab order while visually hidden.
      */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--surface-hairline)] md:hidden"
          >
            <nav className="container-page flex flex-col gap-1 py-5" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-4 py-3 text-[15px] font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-[var(--brand-dim)] text-[var(--brand-bright)]'
                      : 'text-[var(--text-secondary)] hover:bg-white/5 hover:text-[var(--text-primary)]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-lg bg-[var(--brand)] px-4 py-3 text-center text-[15px] font-semibold text-white"
              >
                Book a consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
