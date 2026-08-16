'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/app/components/ContactForm';
import { socialIcons } from '@/app/components/SocialIcons';
import { IconCheck } from '@/app/components/Icons';
import { site, activeSocials, hasWhatsApp, whatsappLink } from '@/lib/site';

const reassurances = [
  'A reply within 24 hours, from the person who builds the software',
  'A free 20-minute consultation, with no obligation to continue',
  'A fixed written price before any work begins',
];

export default function ContactPageClient() {
  const ease = [0.22, 1, 0.36, 1] as const;

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
  };

  return (
    <main className="relative isolate w-full overflow-hidden bg-[var(--surface-base)] pt-36 pb-24 sm:pt-40">
      <div
        className="dot-field absolute inset-0 opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 20%, #000 10%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 50% at 50% 20%, #000 10%, transparent 75%)',
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[var(--brand)] opacity-[0.1] blur-[130px]" />

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          {/* Left: reassurance and direct channels */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item}>
              <p className="eyebrow mb-5">
                <span className="h-px w-6 bg-[var(--brand-bright)] opacity-60" />
                Get in touch
              </p>
              <h1 className="font-display text-[length:var(--text-h1)] leading-[1.06] text-[var(--text-primary)]">
                Tell us what is costing your staff the most time
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">
                You will leave the first conversation with a clear view of what to fix
                first — whether or not you decide to work with us.
              </p>
            </motion.div>

            <motion.ul variants={item} className="mt-9 space-y-3.5">
              {reassurances.map((line) => (
                <li key={line} className="flex gap-3.5">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-dim)] text-[var(--brand-bright)]">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
                    {line}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={item} className="rule-fade my-10" />

            {/* Direct channels */}
            <motion.div variants={item} className="space-y-3">
              {hasWhatsApp && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel panel-interactive group flex items-center gap-4 p-5"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#25D366]">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35M12.05 21.8h-.02a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.78 9.78 0 0 1-1.5-5.22c0-5.4 4.4-9.8 9.82-9.8 2.62 0 5.08 1.03 6.93 2.88a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.8 9.8M20.52 3.45A11.72 11.72 0 0 0 12.05 0C5.55 0 .26 5.29.26 11.79c0 2.08.54 4.11 1.58 5.9L.16 24l6.45-1.69a11.75 11.75 0 0 0 5.44 1.39h.01c6.5 0 11.79-5.29 11.79-11.79 0-3.15-1.23-6.11-3.45-8.34" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-semibold text-[var(--text-primary)]">
                      WhatsApp
                    </span>
                    <span className="block text-sm text-[var(--text-tertiary)]">
                      +{site.whatsapp} — usually the fastest reply
                    </span>
                  </span>
                </a>
              )}

              <a
                href={`mailto:${site.email}`}
                className="panel panel-interactive group flex items-center gap-4 p-5"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-dim)] text-[var(--brand-bright)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden="true">
                    <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                    <path d="m2.5 7 9.5 5.6L21.5 7" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-[var(--text-primary)]">Email</span>
                  <span className="block truncate text-sm text-[var(--text-tertiary)]">
                    {site.email}
                  </span>
                </span>
              </a>

              <div className="panel flex items-center gap-4 p-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-dim)] text-[var(--brand-bright)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>
                  <span className="block font-semibold text-[var(--text-primary)]">
                    Based in
                  </span>
                  <span className="block text-sm text-[var(--text-tertiary)]">
                    {site.location} — working with schools nationwide
                  </span>
                </span>
              </div>
            </motion.div>

            {activeSocials.length > 0 && (
              <motion.div variants={item} className="mt-8 flex gap-3">
                {activeSocials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--surface-hairline)] text-[var(--text-tertiary)] transition-colors hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-white"
                  >
                    {socialIcons[social.name]}
                  </a>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Right: the form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="panel p-7 sm:p-9"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
