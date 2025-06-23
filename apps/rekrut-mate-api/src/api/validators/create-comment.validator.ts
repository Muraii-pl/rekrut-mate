import { z } from 'zod';

export const createComment = z.object({
  content: z.string().min(3),
  questionId: z.string().uuid(),
  commentId: z.string().uuid().optional()
})
