import { User } from './User';
import { Question } from './Question';

export interface Comment {
  id: string;
  content: string;
  userId: string;
  questionId: string;
  commentId?: string | null; // parent comment
  createdAt: Date;
  updatedAt: Date;

  author?: User;
  question?: Question;
  parentComment?: Comment;
  replies?: Comment[];
}

export interface CreateComment extends Omit<Comment, 'id' | 'createdAt' | 'updatedAt' | 'author' | 'comments' | 'parentComment' | 'replies'> {}
