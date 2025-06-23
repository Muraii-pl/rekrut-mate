import { IUserRepository } from '../../../domain/repositories';
import { User } from '../../../domain/entities';
import UserModel from '../models/UserModel';
import { toUserEntity } from '../../mappers/toUserEntity';

export const userRepository: IUserRepository = ({
  create: async (user: Omit<User, 'id'>): Promise<User> => {
    const createdUser = await UserModel.create(user);
    return toUserEntity(createdUser);
  },
  getByEmail: async (email: string): Promise<User | null> => {
    const user = await UserModel.findOne({ where: { email } });
    return user ? toUserEntity(user) : null;
  }
});

