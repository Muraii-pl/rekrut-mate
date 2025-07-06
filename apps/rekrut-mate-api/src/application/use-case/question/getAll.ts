import { questionRepository } from '../../../infrastructure/database/repositories/question.repository';
import { toQuestionsDto } from '../../mappers/questions.mapper';
import { QuestionDto } from '@rm/dtos';

export const getAllUseCase = async (search: string | undefined, tags: string[] | undefined): Promise<QuestionDto[]> => {
  const questions = await questionRepository.getAll(search, tags);
  return toQuestionsDto(questions);
};
