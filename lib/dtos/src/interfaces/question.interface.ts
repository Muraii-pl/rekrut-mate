import { AuthorDto } from './author.interface';
import { CommentDto } from './comment.interface';

export interface QuestionDto {
  id?: string;
  question: string;
  slug: string;
  createdAt?: string | Date;
  tags: string[];
  author: Omit<AuthorDto, 'id'>;
}

export interface QuestionDetailsDto extends QuestionDto {
  answer: string;
  comments: CommentDto[];
}

export interface CreateQuestionDto {
  question: string;
  answer: string;
  tags: string[];
}
