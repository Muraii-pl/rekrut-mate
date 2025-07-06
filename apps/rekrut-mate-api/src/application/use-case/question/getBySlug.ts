import { questionRepository } from '../../../infrastructure/database/repositories/question.repository';
import { toQuestionDto } from '../../mappers/questions.mapper';
import { QuestionDetailsDto } from '@rm/dtos';

export const getBySlugUseCase = async (slug: string): Promise<QuestionDetailsDto> => {
  const questions = (await questionRepository.getBySlug(slug))!;
  return toQuestionDto(questions);
};
