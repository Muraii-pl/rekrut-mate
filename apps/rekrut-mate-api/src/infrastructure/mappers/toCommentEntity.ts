import CommentModel from '../database/models/CommentModel';
import { toUserEntity } from './toUserEntity';
import { Comment } from '../../domain/entities';

export function toCommentEntity(model: CommentModel): Comment {
  return {
    id: model.id,
    content: model.content,
    userId: model.userId,
    questionId: model.questionId,
    commentId: model.commentId,
    createdAt: model.createdAt,
    updatedAt: model.updatedAt,
    author: model.user ? toUserEntity(model.user) : undefined,
    parentComment: model.parentComment ? toCommentEntity(model.parentComment) : undefined,
    replies: model.replies?.map(toCommentEntity),
  };
}
