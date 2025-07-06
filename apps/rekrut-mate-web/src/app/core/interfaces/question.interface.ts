import { Author } from './author.interface';

export interface Question {
  question: string;
  slug: string;
  createdAt: Date;
  tags: string[];
  author:  Omit<Author, 'id'>
}
