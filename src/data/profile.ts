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
    'I work across AI research and engineering, building machine learning pipelines and retrieval systems while exploring the mathematics of how models learn and turning research ideas into reliable, practical applications.',
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
  { href: '/#experience', label: 'experience' },
  { href: '/#writing', label: 'writing' },
  { href: '/#contact', label: 'contact' },
] as const;
