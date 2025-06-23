import { IdName } from '../../../shared/interfaces/id-name.interface';
import { tagRepository } from '../../../infrastructure/database/repositories/tag.repository';

export const getAllUseCase = async (): Promise<IdName[]> => {
  return await tagRepository.getAll();
}
