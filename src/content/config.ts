import { defineCollection, z } from "astro:content";

const authors = defineCollection({
  schema: z.object({
    type: z.string().optional(),
    title: z.string(),
    thumbnail: z.string().optional(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    type: z.string().optional(),
    layout: z.string().optional(),
    title: z.string(),
    description: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    author: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

const pages = defineCollection({
  schema: z.object({
    type: z.string().optional(),
    layout: z.string().optional(),
    title: z.string(),
    // no time to set up schema for blocks
    // blocks: z.array(
    // 	z.object({}).optional(),
    // 	z.object({}).optional(),
    // 	z.object({}).optional(),
    // 	z.object({}).optional(),
    // )
  }),
});

export const collections = { authors, blog, pages };
