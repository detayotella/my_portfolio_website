/**
 * Skills, grouped by domain and ordered by relevance to the portfolio's
 * central narrative (AI systems + ML + backend engineering). Update this
 * file to add or re-order skills; the section renders itself.
 */

export interface SkillGroup {
  label: string;
  items: string[];
  note?: string;
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Rust', 'Java', 'Julia'],
    note: 'daily drivers: python · typescript · sql · deepening rust',
  },
  {
    label: 'machine learning & ai',
    items: [
      'PyTorch',
      'scikit-learn',
      'Transformers & LLMs',
      'RAG',
      'Computer Vision',
      'NLP',
      'XGBoost',
      'LightGBM',
      'CatBoost',
    ],
    note: 'hands-on: pytorch cnns · rag pipelines · llm-as-judge evaluation',
  },
  {
    label: 'data',
    items: ['Pandas', 'NumPy', 'PostgreSQL', 'MongoDB', 'Data Analysis', 'Data Visualization'],
  },
  {
    label: 'backend & software engineering',
    items: [
      'Node.js',
      'Express',
      'FastAPI',
      'REST API design',
      'Prisma',
      'SQLAlchemy · Alembic',
      'JWT authentication',
      'Zod',
      'RabbitMQ',
      'Redis',
      'MongoDB · Mongoose',
    ],
  },
  {
    label: 'tooling & infrastructure',
    items: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Linux', 'Jupyter', 'uv'],
  },
];
