import { getByEmail } from '../use-case/user/getUser';
import { isTextMatch } from './hashService';
import { closeSession, createSession, updateSession } from '../use-case/session';
import { getSession } from '../use-case/session/getSession';
import { LoginCredentialsDto } from '@rm/dtos';

export const login = async (credentials: LoginCredentialsDto): Promise<string> => {
  const user = await getByEmail(credentials.email);

  if ( user && await isTextMatch(credentials.password, user.password) ) {
    const session = await createSession(user.id);
    return session.id;
  } else {
    throw new Error('Invalid Credentials');
  }
};

export const refreshSession = async (id: string): Promise<any> => {
  const session = await getSession(id);
  if ( session ) {
    await updateSession(id, session.userId);
    return session.id;
  } else {
    throw new Error('Session expired');
  }
};

export const logout = async (id: string): Promise<void> => {
  await closeSession(id);
};
