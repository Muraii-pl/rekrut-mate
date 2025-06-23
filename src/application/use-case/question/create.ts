import { CreateQuestionDto } from '../../dto/create-question.dto';
import { generateSlug } from '../../../shared/utils/generateSlug';
import { questionRepository } from '../../../infrastructure/database/repositories/question.repository';
import { toQuestionDto } from '../../mappers/questions.mapper';

export const createUseCase = async (question: CreateQuestionDto, userId: string): Promise<CreateQuestionDto> => {
  let slug = generateSlug(question.question);
  const countedSameSlug = await questionRepository.countBySlug(slug);
  slug = countedSameSlug > 0 ? `${ slug }-${ +countedSameSlug + 1 }` : slug;
  const tags = JSON.parse(JSON.stringify(question?.tags ?? []));
  delete question.tags;
  const newQuestion = await questionRepository.create({
      ...question,
      slug,
      userId,
    },
    tags);
  return toQuestionDto(newQuestion);
};
