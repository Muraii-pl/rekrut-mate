import { Question } from '../entities';

export interface IQuestionRepository {
  getAll(search: string, tags: string[]): Promise<Question[]>;
  getById(id: string): Promise<Question>;
  create(question: Omit<Question, 'id'>, userId: string): Promise<Question>;
}
