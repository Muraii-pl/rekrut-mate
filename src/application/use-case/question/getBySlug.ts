import { GetQuestionsDto } from '../../dto/get-questions.dto';
import { questionRepository } from '../../../infrastructure/database/repositories/question.repository';
import { toQuestionDto, toQuestionsDto } from '../../mappers/questions.mapper';
import { GetQuestionDto } from '../../dto/get-question.dto';

export const getBySlugUseCase = async (slug: string): Promise<GetQuestionDto> => {
  const questions = await questionRepository.getBySlug(slug);
  return toQuestionDto(questions);
};
