import { userRepository } from '../../../infrastructure/database/repositories/user.repository';
import { User } from '../../../domain/entities';

export const getByEmail = async (email: string): Promise<User | null> => {
  return await userRepository.getByEmail(email);
};
