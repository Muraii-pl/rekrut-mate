import { Comment } from './Comment';
import { Tag } from './Tag';
import { User } from './User';

export interface Question {
  id: string;
  question: string;
  answer: string;
  slug: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  author?: User;
  comments?: Comment[];
  tags?: Tag[];
}

export interface CreateQuestion extends Omit<Question, 'id' | 'createdAt' | 'updatedAt' | 'author' | 'comments' | 'tags'> {

}
