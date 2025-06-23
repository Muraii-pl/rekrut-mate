import { ICommentRepository } from '../../../domain/repositories/ICommentRepository';
import CommentModel from '../models/CommentModel';
import { Comment } from '../../../domain/entities';
import UserModel from '../models/UserModel';
import { toCommentEntity } from '../../mappers/toCommentEntity';

export const commentRepository: ICommentRepository = {
  create: async (comment: Omit<Comment, 'id'>): Promise<Comment> => {
    const createdComment = await CommentModel.create(comment);
    return toCommentEntity(createdComment);
  },
  getReplies: async (commentId: string): Promise<Comment[]> => {
    const getReplies = await CommentModel.findAll({
      where: {
        commentId
      },
      include: [
        {
          model: UserModel,
          as: 'author',
          attributes: ['name']
        }
      ]
    });
    return getReplies.map(toCommentEntity);
  }
};
