import { NextFunction, Request, Response } from 'express';
import { getSession } from '../../application/use-case/session/getSession';
import { responseHandler } from '../../shared/utils/responseHandler';
import { createUseCase } from '../../application/use-case/comment/create';
import { getRepliesUseCase } from '../../application/use-case/comment/getReplies';
import { CreateCommentDto } from '@rm/dtos';

export const create = async (req: Request<{}, {}, CreateCommentDto>, res: Response, next: NextFunction) => {
  const { userId } = await getSession(req.cookies['session']);
  try {
    const newComment = await createUseCase(req.body, userId);
    responseHandler(res, 201, 'Comment created', newComment);
  } catch (error) {
    next(error);
  }
};


export const getReplies = async (
  req: Request<{ commentId: string }, {}, CreateCommentDto>,
  res: Response, next: NextFunction
): Promise<void> => {
  try {
    const { commentId } = req.params;
    const replies = await getRepliesUseCase(commentId);
    responseHandler(res, 200, 'Replies found', replies);
  } catch (error) {
    next(error);
  }
};
