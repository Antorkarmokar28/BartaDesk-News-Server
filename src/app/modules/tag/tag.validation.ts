import { z } from 'zod';

export const tagZodSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Tag name is required' }),
    slug: z.string().min(1, { message: 'Slug is required' }),
  }),
});
export const updateTagZodSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Tag name is required' }).optional(),
    slug: z.string().min(1, { message: 'Slug is required' }).optional(),
  }),
});
