/**
 * Single source of truth for personal identity + links.
 * Project repository links live in src/content/projects/*.mdx frontmatter.
 */

export const profile = {
  name: 'Adetayo Tella',
  firstName: 'Adetayo',
  role: 'Computer Science student · aspiring AI/ML engineer',
  statement: 'I build intelligent systems and study how they work.',
  support:
    'Computer Science student focused on AI systems, machine learning, backend engineering, and research in ML and computer vision. Currently building LLM and retrieval applications, backend services, and CNN models.',
  education: {
    school: 'Federal University of Technology, Minna',
    degree: 'B.Tech, Computer Science',
    period: '2021 - 2026 (expected)',
  },
  location: 'Nigeria',

  email: 'tellaadetayo@gmail.com',
  github: 'https://github.com/detayotella',
  linkedin: 'https://www.linkedin.com/in/adetayo-tella/',
} as const;

export const site = {
  title: 'Adetayo Tella · Computer Science Student & Aspiring AI/ML Engineer',
  description:
    'Computer Science student and aspiring AI/ML engineer building intelligent systems, machine learning applications, and research-oriented software.',
} as const;

export const nav = [
  { href: '/#about', label: 'about' },
  { href: '/#projects', label: 'projects' },
  { href: '/#research', label: 'research' },
  { href: '/#experience', label: 'experience' },
  { href: '/#contact', label: 'contact' },
] as const;
