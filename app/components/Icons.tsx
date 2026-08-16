import type { SVGProps } from 'react';

/**
 * Line icon set. Replaces the emoji the site used to render as illustrations —
 * emoji rasterise differently on every OS and read as placeholder art.
 *
 * All icons share a 24px grid, 1.5 stroke, round caps, and inherit
 * currentColor so they take their colour from the surrounding text.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Mortarboard — school management / academics. */
export function IconSchool(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3.5 2.5 8.2 12 12.9l9.5-4.7L12 3.5Z" />
      <path d="M6.4 10.7v5.1c0 1.6 2.5 2.9 5.6 2.9s5.6-1.3 5.6-2.9v-5.1" />
      <path d="M21.5 8.2v6.3" />
    </Icon>
  );
}

/** Sparked document — AI teaching tools. */
export function IconSparkDoc(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M13.5 2.7H7a2 2 0 0 0-2 2v14.6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.2l-5.5-5.5Z" />
      <path d="M13.4 2.8v4.1a1.4 1.4 0 0 0 1.4 1.4h4.1" />
      <path d="m10 12.4.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1Z" />
      <path d="M15.4 11.2l.45 1.05 1.05.45-1.05.45-.45 1.05-.45-1.05-1.05-.45 1.05-.45.45-1.05Z" />
    </Icon>
  );
}

/** Browser window — school websites. */
export function IconWindow(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2.5" y="4" width="19" height="16" rx="2.2" />
      <path d="M2.5 8.6h19" />
      <circle cx="5.9" cy="6.3" r=".6" fill="currentColor" stroke="none" />
      <circle cx="8.1" cy="6.3" r=".6" fill="currentColor" stroke="none" />
      <path d="M6.5 12.4h7" />
      <path d="M6.5 16h4.6" />
    </Icon>
  );
}

/** Shielded record — student data protection. */
export function IconShieldLock(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 2.8 4.7 5.6v5.9c0 4.3 3.1 8.3 7.3 9.7 4.2-1.4 7.3-5.4 7.3-9.7V5.6L12 2.8Z" />
      <rect x="9.4" y="11.2" width="5.2" height="4.3" rx="1" />
      <path d="M10.6 11.2v-1.3a1.4 1.4 0 0 1 2.8 0v1.3" />
    </Icon>
  );
}

/** Upward trend — outcomes / results. */
export function IconTrend(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 20.2h18" />
      <path d="m5.5 15.4 4-4.6 3.4 2.9 5.6-6.4" />
      <path d="M14.6 7.3h4v4" />
    </Icon>
  );
}

/** Clock — time saved. */
export function IconClock(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.9V12l3.3 2" />
    </Icon>
  );
}

/** Users — parents, teachers, community. */
export function IconUsers(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="9.4" cy="8.2" r="3.3" />
      <path d="M3.2 20.1a6.3 6.3 0 0 1 12.5 0" />
      <path d="M16.3 5.3a3.3 3.3 0 0 1 0 6.1" />
      <path d="M18.2 14.6a6.3 6.3 0 0 1 2.6 5.5" />
    </Icon>
  );
}

/** Signature/checklist — process, proposals. */
export function IconChecklist(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4.2" y="3" width="15.6" height="18" rx="2" />
      <path d="m8 8.6 1.5 1.5 2.8-2.8" />
      <path d="m8 15.2 1.5 1.5 2.8-2.8" />
      <path d="M14.6 9h3" />
      <path d="M14.6 15.6h3" />
    </Icon>
  );
}

/** Compass — orientation, local knowledge. */
export function IconCompass(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5 4.5-1.9Z" />
    </Icon>
  );
}

/** Chat bubble — communication. */
export function IconChat(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20.5 11.6c0 4-3.8 7.2-8.5 7.2a9.8 9.8 0 0 1-2.6-.35L4.2 20.5l1.4-3.7a6.9 6.9 0 0 1-2.1-4.9c0-4 3.8-7.2 8.5-7.2s8.5 3.2 8.5 7.2Z" />
    </Icon>
  );
}

/** Arrow right — inline link affordance. */
export function IconArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4.5 12h15" />
      <path d="m13.4 5.9 6.1 6.1-6.1 6.1" />
    </Icon>
  );
}

/** Check — feature list bullets. */
export function IconCheck(props: IconProps) {
  return (
    <Icon {...props} strokeWidth={2}>
      <path d="m4.5 12.6 4.7 4.7 10.3-11" />
    </Icon>
  );
}

/** Map of the service icons, keyed by the slugs in lib/services.ts. */
export const serviceIcons = {
  'school-platform': IconSchool,
  'ai-teaching-tools': IconSparkDoc,
  'school-websites': IconWindow,
  'student-data-security': IconShieldLock,
} as const;
