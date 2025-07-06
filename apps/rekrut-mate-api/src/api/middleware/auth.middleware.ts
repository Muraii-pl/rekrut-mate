import { NextFunction, Request, Response } from 'express';
import { getSession } from '../../application/use-case/session/getSession';
import { responseHandler } from '../../shared/utils/responseHandler';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    if ( !req.cookies.session || !(await getSession(req.cookies.session)) ) {
      responseHandler(res, 401, 'Unauthorized', 'You must be logged in');
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }

};
