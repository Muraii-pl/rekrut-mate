import UserModel from '../database/models/UserModel';
import { User } from '../../domain/entities';
import { toQuestionEntity } from './toQuestionEntity';
import { toCommentEntity } from './toCommentEntity';
import { toSessionEntity } from './toSessionEntity';

export function toUserEntity(model: UserModel): User {
  return {
    id: model.id,
    name: model.name,
    email: model.email,
    password: model.password,
    createdAt: model.createdAt,
    updatedAt: model.updatedAt,
    questions: model.questions?.map(toQuestionEntity),
    comments: model.comments?.map(toCommentEntity),
    sessions: model.sessions?.map(toSessionEntity)
  }
}
