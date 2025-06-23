import SessionModel from '../database/models/SessionModel';
import { Session } from '../../domain/entities';
import { toUserEntity } from './toUserEntity';

export function toSessionEntity(model: SessionModel): Session {
  return {
    id: model.id,
    userId: model.userId,
    createdAt: model.createdAt,
    updatedAt: model.updatedAt,
    user: model.user ? toUserEntity(model.user) : undefined,
  };
}
