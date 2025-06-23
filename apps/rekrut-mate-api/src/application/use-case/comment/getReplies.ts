import { commentRepository } from '../../../infrastructure/database/repositories/comment.repository';
import { GetRepliesCommentDto } from '../../dto/get-replies-comment.dto';
import { toCommentDto } from '../../mappers/comment.mapper';

export const getRepliesUseCase = async (commentId: string): Promise<GetRepliesCommentDto[]> => {
  const replies = await commentRepository.getReplies(commentId);
  return replies.map((comment) => toCommentDto(comment));
}
