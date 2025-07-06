import { Question } from './question.interface';

export interface QuestionDetails extends Question {
  answers: string,
  comments: Comment[]
}
