import { Question } from './Question';

export interface Tag {
  id: string;
  name: string;
  questions?: Question[];
}


export interface CreateTag extends Omit<Tag, 'id' | 'questions'> {}
