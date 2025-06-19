import { IUserRepository } from '../../../domain/repositories';
import { User } from '../../../domain/entities/';
import UserModel from '../models/UserModel';

export const userRepository: IUserRepository = ({
  create: async (user: Omit<User, 'id'>): Promise<User> => {
    const createdUser = await UserModel.create(user);
    return toDomainUser(createdUser);
  },
  getByEmail: async (email: string): Promise<User | null> => {
    const user = await UserModel.findOne({ where: { email } });
    return user ? toDomainUser(user) : null;
  }
});


function toDomainUser(user: UserModel): User {
  return {
    password: user.password,
    id: user.id,
    name: user.name,
    email: user.email
  };
}
