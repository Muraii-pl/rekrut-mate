import { NextFunction, Request, Response } from 'express';
import { getAllUseCase } from '../../application/use-case/tags/getAll';
import { responseHandler } from '../../shared/utils/responseHandler';

export const getAllTags = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allTags = await getAllUseCase();
    responseHandler(res, 200, 'All tags', allTags);
  } catch (error) {
    next(error);
  }
};
