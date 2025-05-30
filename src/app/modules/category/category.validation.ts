import { z } from 'zod';

export const categoryZodSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    slug: z.string().min(1, { message: 'Slug is required' }),
    description: z.string().optional(),
  }),
});
