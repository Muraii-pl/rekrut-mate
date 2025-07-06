import { QuestionDto } from '@rm/dtos';

export interface QuestionStore {
  searchTerm: string;
  selectedTags: string[];
  questions: QuestionDto[]
  isLoading: boolean;
  error: string | null
}
