/**
 * Single source of truth for portfolio work.
 *
 * Previously the homepage preview and the portfolio grid kept separate copies
 * of the same projects, and their descriptions had already drifted apart.
 *
 * `type` is deliberately explicit. Buyers can tell the difference between paid
 * client work and something we built ourselves — labelling it honestly reads as
 * confidence, while blurring it costs trust everywhere else on the site.
 */

export type ProjectType = 'Client project' | 'In-house product' | 'Open source';

export type ProjectCategory = 'Schools' | 'Teaching' | 'Security' | 'Other work';

export interface Project {
  id: number;
  name: string;
  type: ProjectType;
  /** One line for cards; the full story goes in a case study. */
  summary: string;
  description: string;
  stack: string[];
  category: ProjectCategory[];
  live?: string;
  github?: string;
  /** Featured projects lead the homepage preview. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 7,
    name: 'SEH Hub',
    // In active development. If Ho International School commissioned this
    // rather than piloting it, change to 'Client project'.
    type: 'In-house product',
    summary: 'School–home engagement over SMS.',
    description:
      'School–home engagement platform connecting administrators, teachers, parents and students — grades, announcements and two-way messaging delivered by SMS so parents do not need a smartphone or data. In active development with Ho International School.',
    stack: ['Next.js 15', 'Drizzle ORM', 'Neon Postgres', 'Arkesel SMS', 'Ed25519'],
    category: ['Schools', 'Teaching'],
    live: 'https://seh-hub.vercel.app',
    github: 'https://github.com/gideonagbavor8/seh-hub',
    featured: true,
  },
  {
    id: 1,
    name: 'CurriculumCraft AI',
    type: 'In-house product',
    summary: 'Lesson planning for Ghanaian JHS teachers.',
    description:
      'AI lesson planning built for Ghanaian JHS teachers, generating curriculum-aligned plans in minutes instead of hours. Grounded in NaCCA standards rather than generic templates.',
    stack: ['Next.js 15', 'Tailwind CSS v4', 'Drizzle ORM', 'Neon Postgres', 'GitHub Models'],
    category: ['Teaching'],
    live: 'https://curriculumcraft-ai.vercel.app',
    github: 'https://github.com/gideonagbavor8/curriculumcraft-ai',
    featured: true,
  },
  {
    id: 2,
    name: 'EduKrom LMS',
    type: 'In-house product',
    summary: 'School management aligned to NaCCA/GES.',
    description:
      'A Ghana-specific learning management and school administration suite, aligned to NaCCA/GES curriculum standards — student records, assessment, reporting and fees in one system.',
    stack: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL', 'Turborepo'],
    category: ['Schools', 'Teaching'],
    featured: true,
  },
  {
    id: 3,
    name: 'SecureVault',
    type: 'In-house product',
    summary: 'Encrypted credential storage.',
    description:
      'Password manager built as a security exercise, using AES-256-GCM encryption for credential storage — the same approach we apply to protecting student records.',
    stack: ['Next.js', 'Express', 'PostgreSQL', 'Docker', 'Encryption'],
    category: ['Security'],
  },
  {
    id: 4,
    name: 'PhishPhalanx',
    type: 'Open source',
    summary: 'Threat intelligence CLI.',
    description:
      'Threat intelligence command-line tool for security professionals, covering real-time detection and analysis of phishing infrastructure.',
    stack: ['Node.js', 'MongoDB', 'CLI'],
    category: ['Security'],
    github: 'https://github.com/gideonagbavor8/phishphalanx',
  },
  {
    id: 5,
    name: 'Tarso Hotel Website',
    type: 'Client project',
    summary: 'Hotel site with booking interface.',
    description:
      'Hotel website with a modern booking interface and responsive design, built for fast loading on mobile connections.',
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    category: ['Other work'],
    live: 'https://tarso-hotel.vercel.app',
    // Real client work, but a hotel — off-niche for an education-first
    // homepage. It stays on /portfolio, where its "Client project" badge still
    // does the credibility work without diluting the school positioning.
  },
  {
    id: 6,
    name: 'TaskFlow',
    type: 'In-house product',
    summary: 'Collaborative task management.',
    description:
      'Full-stack task management application with real-time collaboration, built to explore multi-user sync patterns.',
    stack: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    category: ['Other work'],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectCategories: (ProjectCategory | 'All')[] = [
  'All',
  'Schools',
  'Teaching',
  'Security',
  'Other work',
];
