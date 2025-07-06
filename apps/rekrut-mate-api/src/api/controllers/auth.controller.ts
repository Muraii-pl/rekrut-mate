import { NextFunction, Request, Response } from 'express';
import { responseHandler } from '../../shared/utils/responseHandler';
import { createUserUseCase } from '../../application/use-case/user';
import { login, logout, refreshSession } from '../../application/services/authService';
import { LoginCredentialsDto, CreateUserDto, GetUserDto } from '@rm/dtos';

export async function registerUser(
  req: Request<{}, {}, CreateUserDto>,
  res: Response<GetUserDto>,
  next: NextFunction
): Promise<void> {
  try {
    const user = await createUserUseCase(req.body);
    responseHandler(res, 201, 'User created successfully', user);
  } catch (error) {
    next(error);
  }
}

export async function loginUser(req: Request<{}, {}, LoginCredentialsDto>, res: Response, next: NextFunction): Promise<void> {
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

export async  function logoutUser(req: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
  try {
    const session = await logout(req.cookies.session);
    res.status(200).cookie('session', session, { httpOnly: true, secure: true }).send();
  } catch (error) {
    next(error);
  }
}
