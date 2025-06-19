import { authRepository } from '../../../infrastructure/database/repositories/auth.repository';
import { Session } from '../../../domain/entities';

export const getSession = async (id: string): Promise<Session> => {
  return await authRepository.get(id);
};
