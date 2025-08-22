import { defineCollection, z } from 'astro:content';

const chaptersCollection = defineCollection({
    type: 'content',
    schema: z.object({
    title: z.string(),
    chapterNumber: z.number().optional(), // Make optional if not all content has it
    editUrl: z.string().url().optional(),
    }),
});

const topicsCollection = defineCollection({
    type: 'data', // This is for JSON or YAML files
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

export const collections = {
    chapters: chaptersCollection,
    topics: topicsCollection, // Register the new collection
};