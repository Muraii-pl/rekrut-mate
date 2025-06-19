import { NextFunction, Request, Response } from 'express';

/**
 * Error handler middleware.
 *
 * @param {Object} err - The error object from the exception.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function in the middleware chain.
 *
 * @returns {void}
 */
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.dir(err);
  res.status(500).json({
    status: 500,
    message: "Something went wrong",
    error: err.message
  });
};
