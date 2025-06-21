import { getAllUseCase } from '../../application/use-case/question/getAll';
import { Request, Response, NextFunction } from 'express';
import { responseHandler } from '../../shared/utils/responseHandler';

export const getAllQuestions = async (req: Request, res: Response, next: NextFunction) => {
  const { search, tags } = req.query;
  console.log(req);
  try {
    const allQuestions = await getAllUseCase(search?.toString(), tags?.toString().split(','));
    responseHandler(res, 200, 'All questions', allQuestions);
  } catch (error) {
    next(error);
  }

};

