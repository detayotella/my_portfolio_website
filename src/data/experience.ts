/**
 * Experience, education and certifications.
 * Facts only, nothing here is invented; update entries as they change.
 */

export interface ExperienceEntry {
  role: string;
  org: string;
  location: string;
  period: string;
  points: string[];
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Backend Developer Intern',
    org: 'CamelCase Technologies',
    location: 'Ikorodu, Lagos, Nigeria',
    period: 'Jan 2025 - Feb 2025',
    points: [
      'Designed and executed tests using Pytest and FastAPI test utilities, achieving 95%+ coverage.',
      'Implemented Open Graph metadata to boost user engagement on social platforms.',
    ],
    tags: ['Pytest', 'FastAPI', 'Testing', 'Open Graph'],
  },
  {
    role: 'Data Scientist Intern',
    org: 'Explore AI',
    location: 'South Africa',
    period: 'Mar 2023 - May 2023',
    points: [
      'Dataset engineering on merged astronomical catalogues: Dark Energy Survey × SDSS, over one million observations and ~129 columns after merging.',
      'Exploratory analysis and feature exploration on large-scale scientific tabular data.',
      'Applied machine learning to galaxy classification as part of a research-oriented team.',
    ],
    tags: ['Dataset engineering', 'Scientific data analysis', 'Large-scale tabular data'],
  },
];

export const education = {
  degree: 'B.Tech, Computer Science',
  school: 'Federal University of Technology, Minna',
  period: '2021 - 2026',
  note: 'Four years of systems, databases, and algorithms, with the applied half of the education built in public, on this page.',
} as const;

export const certifications = [
  { org: 'DataCamp', title: 'Machine Learning with Python', year: '2023' },
  { org: 'DataCamp', title: 'Data Scientist with Python', year: '2022' },
  { org: 'Udacity', title: 'Data Analyst Nanodegree', year: '2022' },
] as const;
