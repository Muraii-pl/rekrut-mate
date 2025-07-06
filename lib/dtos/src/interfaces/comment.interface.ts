import { ReplyDto } from './reply.interface';

export interface CommentDto {
  id?: string;
  content: string;
  author: {
    name: string;
  };
  createdAt?: string | Date;
  replies: ReplyDto[];
}

export interface CreateCommentDto {
  content: string;
  questionId: string;
  commentId?: string;
}
