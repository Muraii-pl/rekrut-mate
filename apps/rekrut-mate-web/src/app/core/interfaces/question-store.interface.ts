import { Question } from './question.interface';

export interface QuestionStore {
  searchTerm: string;
  selectedTags: string[];
  questions: Question[]
  isLoading: boolean;
  error: string | null
}
