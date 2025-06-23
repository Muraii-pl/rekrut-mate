import QuestionModel from '../models/QuestionModel';
import CommentModel from '../models/CommentModel';
import { Op } from 'sequelize';
import UserModel from '../models/UserModel';
import { IQuestionRepository } from '../../../domain/repositories/IQuestionRepository';
import TagModel from '../models/TagModel';
import { Omit } from 'sequelize-typescript/dist/shared/types';
import { Question } from '../../../domain/entities';
import { toQuestionEntity } from '../../mappers/toQuestionEntity';

export const questionRepository: IQuestionRepository = {
  getAll: async (search: string, tags: string[]): Promise<Question[]> => {
    const matchingQuestionIdsResults = await QuestionModel.findAll({
      where: {
        ...(search && search.trim() !== ''
          ? {
            question: {
              [Op.iLike]: `%${ search }%`
            }
          }
          : {})
      },
      include: [
        {
          model: TagModel,
          through: {
            attributes: [],
          },
          attributes: [],
          ...(tags && tags.length > 0
            ? {
              where: {
                name: {
                  [Op.in]: tags
                }
              }
            }
            : {}),
        }
      ],
      group: ['QuestionModel.id'],
      attributes: ['id'],
    });
    const questions = await QuestionModel.findAll({
      attributes: ['slug', 'question', 'createdAt'],
      where: {
        id: {
          [Op.in]: matchingQuestionIdsResults.map(question => question.id)
        }
      },
      include: [
        {
          model: UserModel,
          as: 'user',
          attributes: ['name'],
        },
        {
          model: TagModel,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    return questions.map(toQuestionEntity);
  },
  getBySlug: async (slug: string): Promise<Question | null> => {
    const question = await QuestionModel.findOne({
      attributes: ['question', 'answer', 'createdAt'],
      where: {
        slug
      },
      include: [
        {
          model: UserModel,
          as: 'user',
        },
        {
          model: TagModel,
          attributes: ['name'],
          order: [['name', 'DESC']],
        },
        {
          model: CommentModel,
          as: 'comments',
          attributes: ['content'],
          include: [
            {
              model: CommentModel,
              as: 'replies',
              attributes: ['content'],
              include: [
                {
                  model: UserModel,
                }
              ]
            }]
        }]
    })!;
    return question ? toQuestionEntity(question) : null;
  },
  async create(question: Omit<Question, "id">, tags: string[]): Promise<Question> {
    const createdQuestion = await QuestionModel.create(question);

    const findOrCreatePromises = tags.map(async (tag) => {
      const [tagInstance, _] = await TagModel.findOrCreate({
        where: {
          name: tag
        },
      });
      return tagInstance;
    });
    const tagsResult$ = await Promise.all(findOrCreatePromises);

    await createdQuestion.$set('tags', tagsResult$);
    return (await this.getBySlug(createdQuestion.slug))!;
  },
  countBySlug(slug: string): Promise<number> {
    return QuestionModel.count({
      where: {
        slug: { [Op.like]: `${ slug }%` }
      }
    });
  }
};
