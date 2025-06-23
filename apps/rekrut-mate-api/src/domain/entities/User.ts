import { Question } from './Question';
import { Session } from './Session';
import { Comment } from './Comment';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  questions?: Question[];
  comments?: Comment[];
  sessions?: Session[];
}


export interface CreateUser extends Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'questions' | 'comments' | 'sessions'> {}
