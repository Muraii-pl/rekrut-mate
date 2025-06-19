import { authRepository } from '../../../infrastructure/database/repositories/auth.repository';

export const removeInactive = async () => {
  return await authRepository.removeInactive();
};
