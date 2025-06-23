import { authRepository } from '../../../infrastructure/database/repositories/auth.repository';

const closeSession = async (sessionId: string) => {
  await authRepository.delete(sessionId);
}
