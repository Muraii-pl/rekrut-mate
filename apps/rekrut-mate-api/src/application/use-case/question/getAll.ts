import { questionRepository } from '../../../infrastructure/database/repositories/question.repository';
import { GetQuestionsDto } from '../../dto/get-questions.dto';
import { toQuestionsDto } from '../../mappers/questions.mapper';

export const getAllUseCase = async (search: string | undefined, tags: string[] | undefined): Promise<GetQuestionsDto[]> => {
  const questions = await questionRepository.getAll(search, tags);
  return toQuestionsDto(questions);
};
