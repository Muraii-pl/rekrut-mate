import { Comment, CreateComment } from '../../domain/entities';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { GetRepliesCommentDto } from '../dto/get-replies-comment.dto';

export const toCreateCommentEntity = (comment: CreateCommentDto, userId: string): CreateComment => {
  return {
    content: comment.content,
    questionId: comment.questionId,
    commentId: comment?.commentId,
    userId: userId
  };
};


export const toCommentDto = (comment: Comment): GetRepliesCommentDto => {
  return {
    content: comment.content,
    author: {
      name: comment.author!.name,
    },
  };
};
