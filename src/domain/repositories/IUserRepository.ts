import { User } from '../entities/User';

export interface IUserRepository {
  getByEmail(email: string): Promise<User | null>;
  create(user: Omit<User, 'id'>): Promise<User>;
}
