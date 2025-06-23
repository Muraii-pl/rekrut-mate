import TagModel from '../database/models/TagModel';
import { toQuestionEntity } from './toQuestionEntity';
import { Tag } from '../../domain/entities';

export function toTagEntity(model: TagModel): Tag {
  return {
    id: model.id,
    name: model.name,
    questions: model.questions?.map(toQuestionEntity),
  };
}
