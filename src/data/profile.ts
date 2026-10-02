/**
 * Single source of truth for personal identity + links.
 * Project repository links live in src/content/projects/*.mdx frontmatter.
 */

export const profile = {
  name: 'Adetayo Tella',
  firstName: 'Adetayo',
  role: 'Computer Science graduate · AI/ML engineer',
  statement: 'I build intelligent systems and study how they work.',
  support:
    'ML pipelines, retrieval systems, and CNNs trained from scratch, moving between the mathematics of how models learn and the engineering that ships them.',
  education: {
    school: 'Federal University of Technology, Minna',
    degree: 'B.Tech, Computer Science',
    period: '2021 - 2026',
  },
  location: 'Nigeria',

  email: 'tellaadetayo@gmail.com',
  github: 'https://github.com/detayotella',
  linkedin: 'https://www.linkedin.com/in/adetayo-tella/',
} as const;

export const site = {
  title: 'Adetayo Tella · Computer Science Graduate & AI/ML Engineer',
  description:
    'Computer Science graduate and AI/ML engineer working across NLP, computer vision, and healthcare AI, building research-grade machine learning systems.',
} as const;

export const nav = [
  { href: '/#about', label: 'about' },
  { href: '/#projects', label: 'projects' },
  { href: '/#research', label: 'research' },
  { href: '/#writing', label: 'writing' },
  { href: '/#experience', label: 'experience' },
  { href: '/#contact', label: 'contact' },
] as const;
