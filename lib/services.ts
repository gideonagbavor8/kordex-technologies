/**
 * The four things we build for schools.
 *
 * Positioning note: web, AI and security are *how* we build, not separate menu
 * items. Every entry below is framed as a problem a school head already has,
 * with the technology listed as supporting detail rather than as the pitch.
 */

export interface Service {
  slug: 'school-platform' | 'ai-teaching-tools' | 'school-websites' | 'student-data-security';
  name: string;
  short: string;
  headline: string;
  description: string;
  /** Concrete pains this removes — written in the buyer's words, not ours. */
  problems: string[];
  deliverables: string[];
  stack: string[];
}

export const services: Service[] = [
  {
    slug: 'school-platform',
    name: 'School Management & LMS',
    short: 'Records, results and reporting in one system.',
    headline: 'Replace the exercise books and spreadsheets.',
    description:
      'Most schools run on a mix of record books, spreadsheets and WhatsApp groups. We replace that with one platform for student records, attendance, continuous assessment, terminal reports and fees — built around the way Ghanaian schools actually operate, not adapted from a foreign template.',
    problems: [
      'Terminal reports take teachers an entire weekend to compile',
      'Student records live in books that can be lost or damaged',
      'Fee arrears are tracked by hand and chased inconsistently',
      'Heads cannot see performance across classes without asking each teacher',
    ],
    deliverables: [
      'Student information and enrolment records',
      'Attendance and continuous assessment tracking',
      'Automated terminal reports and transcripts',
      'Fee invoicing, payments and arrears tracking',
      'Parent portal for results and announcements',
      'Separate access for heads, teachers and bursars',
    ],
    stack: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL', 'Turborepo'],
  },
  {
    slug: 'ai-teaching-tools',
    name: 'AI Tools for Teachers',
    short: 'Lesson planning that respects the curriculum.',
    headline: 'Give teachers back their evenings.',
    description:
      'Lesson notes, schemes of work and assessment design consume the hours teachers should spend teaching. We build AI tools grounded in the curriculum standards your teachers are actually held to — so the output is usable in class, not generic filler that needs rewriting.',
    problems: [
      'Lesson notes take 4–6 hours every week, for every teacher',
      'General-purpose AI produces plans that ignore NaCCA standards',
      'Assessment quality varies widely between streams',
      'Newly posted teachers have no template to work from',
    ],
    deliverables: [
      'Curriculum-aligned lesson plan generation',
      'Scheme of work and termly planning tools',
      'Assessment and exam item generation',
      'Marking and feedback assistance',
      'Head-of-department review workflow',
      'Teacher training and rollout support',
    ],
    stack: ['Next.js', 'Python', 'LLM integration', 'Drizzle ORM', 'Neon Postgres'],
  },
  {
    slug: 'school-websites',
    name: 'School Websites & Admissions',
    short: 'Where parents decide whether to enrol.',
    headline: 'Most parents judge your school online first.',
    description:
      'Parents research schools long before they visit the compound. A slow, outdated or missing website costs enrolments quietly, every term. We build fast, mobile-first school sites with online admissions that work properly on the mobile data Ghanaian parents actually browse on.',
    problems: [
      'Prospective parents cannot find fees, results or term dates online',
      'Admission forms are collected and processed entirely by hand',
      'The current site is slow or broken on mobile',
      'Publishing news or results needs a developer every time',
    ],
    deliverables: [
      'Mobile-first school website',
      'Online admissions and enquiry forms',
      'News, events and term calendar',
      'Photo galleries and virtual tours',
      'WhatsApp and SMS enquiry routing',
      'Staff-editable content — no developer needed',
    ],
    stack: ['Next.js', 'Tailwind CSS', 'Headless CMS', 'Vercel'],
  },
  {
    slug: 'student-data-security',
    name: 'Student Data Protection',
    short: 'Minors’ records, secured properly.',
    headline: 'A shared password is not a security policy.',
    description:
      'Schools hold some of the most sensitive data there is — minors’ records, health notes, guardian contacts, fee histories. We secure it the way it should be: encrypted storage, real per-user access control, audited changes, and a tested plan for when a laptop goes missing.',
    problems: [
      'All staff share one login to the school’s records',
      'Student data sits unencrypted on personal laptops',
      'No backup if a device is lost, stolen or damaged',
      'No record of who changed a grade, or when',
    ],
    deliverables: [
      'Security review of existing school systems',
      'Encrypted storage and automated backups',
      'Per-user accounts with role-based permissions',
      'Audit trails on records and grade changes',
      'Staff security training',
      'Data protection policy documentation',
    ],
    stack: ['Encryption', 'Access control', 'Automated backups', 'Security auditing'],
  },
];

/** Service names, for the contact form's dropdown. */
export const serviceOptions = services.map((s) => s.name);
