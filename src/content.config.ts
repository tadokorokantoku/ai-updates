import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const releases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/releases' }),
  schema: z.object({
    version: z.string(),
    date: z.coerce.date(),
    highlights: z.array(z.string()).optional(),
  }),
});

const commands = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/commands' }),
  schema: z.object({
    name: z.string(),
    introducedIn: z.string(),
    description: z.string(),
    deprecated: z.boolean().default(false),
    deprecatedIn: z.string().optional(),
    category: z.enum(['slash', 'cli', 'flag']).default('slash'),
  }),
});

export const collections = { releases, commands };
