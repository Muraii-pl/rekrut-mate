import { IdName } from '../../../shared/interfaces/id-name.interface';
import { ITagRepository } from '../../../domain/repositories/ITagRepository';
import TagModel from '../models/TagModel';

export const tagRepository: ITagRepository = {
  getAll: async (): Promise<IdName[]> => {
    return await TagModel.findAll();
  },
  findByName: async (name: string): Promise<IdName[]> => {
    return await TagModel.findAll({
      where: {
        name
      }
    });
  },
  create: async (tag: string): Promise<IdName> => {
    return await TagModel.create(tag);
  },
  findOrCreate: async (tag: string): Promise<IdName> => {
    const [result] = await TagModel.findOrCreate({
      where: {
        name: tag
      },
      defaults: {
        name: tag
      }
    });
    return result;
  }
};
