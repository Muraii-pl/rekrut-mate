import { z } from 'zod';

export const createQuestion = z.object({
  question: z.string().min(3),
  answer: z.string().min(3),
  tags: z.array(z.string().min(3)).min(1),
})
