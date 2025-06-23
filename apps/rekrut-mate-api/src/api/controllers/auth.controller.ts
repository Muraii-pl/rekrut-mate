import { NextFunction, Request, Response } from 'express';
import { responseHandler } from '../../shared/utils/responseHandler';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { GetUserDto } from '../../application/dto/get-user.dto';
import { IResponseHandler } from '../../shared/interfaces/response-handler.interface';
import { createUserUseCase } from '../../application/use-case/user';
import { LoginUserDto } from '../../application/dto/login-user.dto';
import { login, refreshSession } from '../../application/services/authService';

export async function registerUser(req: Request<{}, {}, CreateUserDto>, res: Response<IResponseHandler<GetUserDto>>, next: NextFunction): Promise<void> {
  try {
    const user = await createUserUseCase(req.body);
    responseHandler(res, 201, 'User created successfully', user);
  } catch (error) {
    next(error);
  }
}

export async function loginUser(req: Request<{}, {}, LoginUserDto>, res: Response, next: NextFunction): Promise<void> {
  try {
    let session: string;
    if ( req.cookies.session ) {
      try {
        session = await refreshSession(req.cookies.session);
      } catch (error) {
        session = await login(req.body);
      }
    } else {
      session = await login(req.body);
    }
    res.status(200).cookie('session', session, { httpOnly: true, secure: true }).send();
  } catch (error) {
    next(error);
  }
}

export async function refreshUserSession(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const session = await refreshSession(req.cookies.session);
    res.status(200).cookie('session', session, { httpOnly: true, secure: true }).send();
  } catch (error) {
    next(error);
  }
}
