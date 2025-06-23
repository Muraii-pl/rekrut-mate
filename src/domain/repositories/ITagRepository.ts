import { IdName } from '../../shared/interfaces/id-name.interface';

export interface ITagRepository {
  getAll(): Promise<IdName[]>;
  findByName(name: string): Promise<IdName[]>;
  create(tags: string): Promise<IdName>
  findOrCreate(tags: string): Promise<IdName>
}
