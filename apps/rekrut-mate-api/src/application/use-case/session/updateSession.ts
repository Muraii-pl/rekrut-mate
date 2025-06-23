import { authRepository } from '../../../infrastructure/database/repositories/auth.repository';

export const updateSession = async (id: string, userId: string) => {
  return await authRepository.update(id, userId);
}
