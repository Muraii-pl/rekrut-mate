import { commentRepository } from '../../../infrastructure/database/repositories/comment.repository';
import { toCommentDto } from '../../mappers/comment.mapper';
import { GetRepliesCommentDto } from '@rm/dtos';

export const getRepliesUseCase = async (commentId: string): Promise<GetRepliesCommentDto[]> => {
  const replies = await commentRepository.getReplies(commentId);
  return replies.map((comment) => toCommentDto(comment));
}
