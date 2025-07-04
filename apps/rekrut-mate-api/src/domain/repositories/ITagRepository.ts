import { IdName } from '../../shared/interfaces/id-name.interface';

export interface ITagRepository {
  getAll(): Promise<IdName[]>;
  findByName(name: string): Promise<IdName[]>;
}
