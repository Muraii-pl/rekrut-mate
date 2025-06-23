import { CreateUser, User } from '../entities';

export interface IUserRepository {
  getByEmail(email: string): Promise<User | null>;
  create(user: CreateUser): Promise<User>;
}
