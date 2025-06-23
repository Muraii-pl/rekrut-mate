import { User } from './User';

export interface Session {
  id: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
}

export interface CreateSession extends Omit<Session, 'id' | 'userId' | 'createdAt' | 'updatedAt' | 'user'> { }
