'use client';

import Link from 'next/link';
import Image from 'next/image';
import { site, activeSocials, hasWhatsApp, whatsappLink } from '@/lib/site';
import { socialIcons } from './SocialIcons';

const columns = [
  {
    heading: 'Company',
    links: [
      { name: 'Services', href: '/services' },
      { name: 'Our work', href: '/portfolio' },
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    heading: 'For schools',
    links: [
      { name: 'School management & LMS', href: '/services#school-platform' },
      { name: 'AI tools for teachers', href: '/services#ai-teaching-tools' },
      { name: 'Websites & admissions', href: '/services#school-websites' },
      { name: 'Data protection', href: '/services#student-data-security' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--surface-hairline)] bg-[var(--surface-base)] pt-16 pb-10">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Identity */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-5 flex items-center gap-3">
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={251}
                height={325}
                className="h-10 w-auto"
              />
              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-semibold text-[var(--text-primary)]">
                  Kordex
                </span>
                <span className="mt-0.5 text-[13px] font-medium text-[var(--brand-bright)]">
                  Technologies
                </span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-[var(--text-tertiary)]">
              Education technology for African schools. Built in {site.location}.
            </p>

            {activeSocials.length > 0 && (
              <div className="mt-6 flex gap-2.5">
                {activeSocials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--surface-hairline)] text-[var(--text-tertiary)] transition-colors hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-white"
                  >
                    {socialIcons[social.name]}
                  </a>
                ))}
              </div>
            )}
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="mb-4 text-sm font-semibold text-[var(--text-primary)]">
                {column.heading}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-tertiary)] transition-colors hover:text-[var(--brand-bright)]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--text-primary)]">
              Talk to us
            </h3>
            <ul className="space-y-2.5">
              {hasWhatsApp && (
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-tertiary)] transition-colors hover:text-[var(--brand-bright)]"
                  >
                    WhatsApp +{site.whatsapp}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-sm text-[var(--text-tertiary)] transition-colors hover:text-[var(--brand-bright)]"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-[var(--brand-bright)] transition-colors hover:text-[var(--brand)]"
                >
                  Book a consultation →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule-fade my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-[var(--text-tertiary)] sm:flex-row">
          <p>
            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span>{' '}
            {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-[var(--brand-bright)]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-[var(--brand-bright)]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
