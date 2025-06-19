import { authRepository } from '../../../infrastructure/database/repositories/auth.repository';

export const createSession = async (userId: string) => {
  return await authRepository.create(userId);
};
