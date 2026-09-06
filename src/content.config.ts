import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Project case studies live in src/content/projects/*.mdx.
 * Frontmatter is validated below; the MDX body is the long-form write-up.
 * To add a project: create a new .mdx file here, no component changes needed.
 */
const projects = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './src/content/projects',
    // keep dots in ids so URLs read cleanly, e.g. "cifar-10" → /projects/cifar-10
    generateId: ({ entry }) => entry.replace(/\.mdx$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    links: z
      .object({
        repo: z.string().url().optional(), // TODO: add GitHub repo URLs when available
        demo: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
