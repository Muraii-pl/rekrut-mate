import { authRepository } from '../../../infrastructure/database/repositories/auth.repository';

export const closeSession = async (sessionId: string) => {
  await authRepository.delete(sessionId);
}
