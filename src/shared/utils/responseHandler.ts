import { Response } from 'express';

export const responseHandler = <T>(res: Response, status: number, message: string, data: T) => {
  res.status(status).json({
    status: status,
    message: message,
    data: data,
  });
};
