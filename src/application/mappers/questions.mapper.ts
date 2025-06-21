import { GetQuestionsDto } from '../dto/get-questions.dto';
import { Question } from '../../domain/entities';

export const toQuestionsDto = (questions: Question[]): GetQuestionsDto[] => {
  return questions.map((question) => {
    return {
      id: question.id,
      question: question.question,
      createdAt: question.createdAt,
      author: {
        name: question['author'].name,
      },
      tags: question['tags'].map(tag => tag.name),
    };
  });
};
