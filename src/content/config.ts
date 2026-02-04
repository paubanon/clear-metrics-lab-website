import { defineCollection, z } from "astro:content";

const apps = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    icon: z.string(), // lucide-react icon name
    theme: z.object({
      accent: z.string(), // hex color
    }),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    appSlug: z.string(), // links post to specific app
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().default(0),
    appSlug: z.string(),
  }),
});

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    appSlug: z.string(),
    lastUpdated: z.coerce.date(),
  }),
});

export const collections = { apps, blog, docs, legal };
