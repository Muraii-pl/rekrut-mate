import { z } from 'zod';
import { NextFunction, Request, Response } from 'express';

export const validSchema = (schema: z.ZodObject<any, any>) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
