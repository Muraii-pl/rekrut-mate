import { IdName } from '../../../shared/interfaces/id-name.interface';
import { ITagRepository } from '../../../domain/repositories/ITagRepository';
import TagModel from '../models/TagModel';
import { toTagEntity } from '../../mappers/toTagEntity';

export const tagRepository: ITagRepository = {
  getAll: async (): Promise<IdName[]> => {
    const tags = await TagModel.findAll();
    return tags.map(toTagEntity);
  },
  findByName: async (name: string): Promise<IdName[]> => {
    const tags = await TagModel.findAll({
      where: {
        name
      }
    });
    return tags.map(toTagEntity);
  },
};
