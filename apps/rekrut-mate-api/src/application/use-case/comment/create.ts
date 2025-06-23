import { CreateCommentDto } from '../../dto/create-comment.dto';
import { commentRepository } from '../../../infrastructure/database/repositories/comment.repository';
import { toCommentDto, toCreateCommentEntity } from '../../mappers/comment.mapper';
import { GetRepliesCommentDto } from '../../dto/get-replies-comment.dto';

export const createUseCase = async (comment: CreateCommentDto, userId: string): Promise<GetRepliesCommentDto> => {
  const newComment = await commentRepository.create(toCreateCommentEntity(comment, userId));
  return toCommentDto(newComment);
};
