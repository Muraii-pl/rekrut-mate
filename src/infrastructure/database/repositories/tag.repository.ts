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
  }
};
