import QuestionModel from '../database/models/QuestionModel';
import { Question } from '../../domain/entities';
import { toUserEntity } from './toUserEntity';
import { toCommentEntity } from './toCommentEntity';
import { toTagEntity } from './toTagEntity';

export const toQuestionEntity = (model: QuestionModel): Question => {
  return {
    id: model.id,
    question: model.question,
    answer: model.answer,
    slug: model.slug,
    userId: model.userId,
    createdAt: model.createdAt,
    updatedAt: model.updatedAt,
    author: model.user ? toUserEntity(model.user) : undefined,
    comments: model.comments?.map(toCommentEntity),
    tags: model.tags?.map(toTagEntity),
  };
};
