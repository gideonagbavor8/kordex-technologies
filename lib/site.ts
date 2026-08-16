/**
 * Central site configuration.
 *
 * Contact details are referenced from here by the footer, contact page,
 * WhatsApp button and transactional emails — update once, changes everywhere.
 *
 * ⚠️ FILL THESE IN — items marked TODO are placeholders. UI that depends on an
 * unset value hides itself rather than rendering a broken link.
 */

export const site = {
  name: 'Kordex Technologies',
  tagline: 'Education technology for African schools.',

  // TODO: swap to your custom domain once purchased, and update
  // `metadataBase` in app/layout.tsx to match.
  url: 'https://kordextechnologies.vercel.app',

  // TODO: change to hello@<your-domain> once the domain + mailbox exist.
  email: 'gideonagbavor8@gmail.com',

  location: 'Ho, Volta Region, Ghana',

  // Digits only, with country code, no "+" or spaces.
  whatsapp: '233554547692',

  whatsappMessage: "Hi Kordex — I'd like to talk about a project.",

  socials: {
    github: 'https://github.com/gideonagbavor8',
    linkedin: 'https://www.linkedin.com/in/gideon-k-agbavor',
    x: 'https://x.com/gideon_agbavor',
  },
} as const;

export const hasWhatsApp = site.whatsapp.length > 0;

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

/** Social entries with a configured URL, ready to render. */
export const activeSocials = (
  [
    { name: 'GitHub', href: site.socials.github },
    { name: 'LinkedIn', href: site.socials.linkedin },
    { name: 'X', href: site.socials.x },
  ] as const
).filter((s) => s.href.length > 0);
