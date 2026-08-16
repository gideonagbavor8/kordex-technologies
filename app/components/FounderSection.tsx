'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section, { revealVariants, staggerVariants } from './Section';
import { IconCheck } from './Icons';
import { site, activeSocials } from '@/lib/site';
import { socialIcons } from './SocialIcons';

/**
 * Framed as a reason to trust us with money, not as a CV. The teaching career
 * leads because it is the part no competing agency can replicate; the degrees
 * follow as supporting evidence.
 */
const credentials = [
  'Taught in Ghana Education Service classrooms',
  'B.Ed Mathematics & ICT — Peki College of Education',
  'Google Cybersecurity Professional Certificate',
  'ALX Back-End Development — Python/Django',
  'BSc Software Development — BYU-Idaho',
  'Content Advisory Board, LogRocket',
];

export default function FounderSection() {
  return (
    <Section tone="raised" divided>
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="lg:sticky lg:top-32"
        >
          <div className="panel relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden">
            <Image
              src="/images/gideon.jpg"
              alt="Gideon Agbavor, founder of Kordex Technologies"
              fill
              sizes="(min-width: 1024px) 24rem, (min-width: 640px) 24rem, 100vw"
              className="object-cover object-center"
              priority
            />

            {/* Grounds the photo in the page's palette and keeps the caption legible. */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-base)] via-[var(--surface-base)]/10 to-transparent" />
            <div className="absolute inset-0 bg-[var(--brand)]/10 mix-blend-overlay" />

            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-lg text-white">Gideon Agbavor</p>
              <p className="mt-0.5 text-sm text-[var(--text-secondary)]">
                {site.location}
              </p>
            </div>
          </div>

          {activeSocials.length > 0 && (
            <div className="mt-6 flex justify-center gap-3">
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
            </div>
          )}
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="eyebrow mb-4">
            <span className="h-px w-6 bg-[var(--brand-bright)] opacity-60" />
            Founder
          </p>
          <h2 className="font-display text-[length:var(--text-h2)] leading-[1.1] text-[var(--text-primary)]">
            Gideon Agbavor
          </h2>
          <p className="mt-2 text-lg text-[var(--brand-bright)]">
            Founder &amp; Lead Engineer
          </p>

          <div className="mt-7 space-y-5 text-lg leading-relaxed text-[var(--text-secondary)]">
            <p>
              I trained as a teacher before I trained as an engineer. I know what a
              Friday evening looks like when terminal reports are due on Monday, what it
              costs a school when a record book goes missing, and why teachers quietly
              abandon software that was never designed for how they work.
            </p>
            <p>
              Most education software sold in Ghana was built for a different school
              system and translated afterwards. It asks schools to change how they
              operate to suit the tool. I started Kordex to build the opposite — systems
              shaped around NaCCA standards, GES reporting and the realities of running
              a school here.
            </p>
            <p>
              I still write the code. When you work with Kordex, you are talking to the
              person building your system, not to an account manager relaying messages.
            </p>
          </div>

          <div className="rule-fade my-9" />

          <p className="eyebrow mb-5">Background</p>
          <motion.ul
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {credentials.map((cred) => (
              <motion.li key={cred} variants={revealVariants} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-dim)] text-[var(--brand-bright)]">
                  <IconCheck className="h-3 w-3" />
                </span>
                <span className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  {cred}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </Section>
  );
}
