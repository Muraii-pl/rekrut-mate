import { getAllUseCase } from '../../application/use-case/question/getAll';
import { NextFunction, Request, Response } from 'express';
import { responseHandler } from '../../shared/utils/responseHandler';
import { getBySlugUseCase } from '../../application/use-case/question/getBySlug';
import { getSession } from '../../application/use-case/session/getSession';
import { generateSlug } from '../../shared/utils/generateSlug';
import { CreateQuestionDto } from '../../application/dto/create-question.dto';
import { createUseCase } from '../../application/use-case/question/create';

export const getAllQuestions = async (req: Request, res: Response, next: NextFunction) => {
  const { search, tags } = req.query;
  try {
    const allQuestions = await getAllUseCase(search?.toString(), tags?.toString().split(','));
    responseHandler(res, 200, 'All questions', allQuestions);
  } catch (error) {
    next(error);
  }
};

export const getBySlug = async (req: Request, res: Response, next: NextFunction) => {
  const { slug } = req.params;
  try {
    const question = await getBySlugUseCase(slug);
    responseHandler(res, 200, 'Question found', question);
  } catch (error) {
    next(error);
  }
}

export const create = async (req: Request<{}, {}, CreateQuestionDto>, res: Response, next: NextFunction) => {
  const { userId } = await getSession(req.cookies['session']);
  try {
    const newQuestion = await createUseCase(req.body, userId);
    responseHandler(res, 201, 'Question created', newQuestion);
  } catch (error) {
    next(error);
  }
}
