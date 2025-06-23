import { CreateQuestionDto } from '../../dto/create-question.dto';
import { generateSlug } from '../../../shared/utils/generateSlug';
import { questionRepository } from '../../../infrastructure/database/repositories/question.repository';
import { toQuestionDto } from '../../mappers/questions.mapper';

export const createUseCase = async (newQuestion: CreateQuestionDto, userId: string): Promise<CreateQuestionDto> => {
  let slug = generateSlug(newQuestion.question);
  const countedSameSlug = await questionRepository.countBySlug(slug);
  slug = countedSameSlug > 0 ? `${ slug }-${ +countedSameSlug + 1 }` : slug;
  const tags = JSON.parse(JSON.stringify(newQuestion?.tags ?? []));
  const { tags: _, ...question } = newQuestion;
  return toQuestionDto(await questionRepository.create({
      ...question,
      slug,
      userId,
    },
    tags));
};
