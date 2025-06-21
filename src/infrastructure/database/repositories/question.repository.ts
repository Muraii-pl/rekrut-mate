import QuestionModel from '../models/QuestionModel';
import CommentModel from '../models/CommentModel';
import { Op } from 'sequelize';
import UserModel from '../models/UserModel';
import { IQuestionRepository } from '../../../domain/repositories/IQuestionRepository';
import TagModel from '../models/TagModel';
import { Omit } from 'sequelize-typescript/dist/shared/types';
import { Question } from '../../../domain/entities';


export const test = async () => {
  return await QuestionModel.findAll({
    attributes: ['id', 'question', 'answer', 'createdAt'],
    include: [
      {
        model: CommentModel,
        as: 'comments',
        where: {
          commentId: {
            [Op.eq]: null
          }
        },
        attributes: ['content'],
        include: [
          {
            model: CommentModel,
            as: 'replies',
            attributes: ['content'],
            include: [
              {
                model: UserModel,
                as: 'author',
                attributes: ['name'],
              }
            ]
          },
          {
            model: UserModel,
            as: 'author',
            attributes: ['name'],
          }
        ]
      },
      {
        model: UserModel,
        as: 'author',
        attributes: ['name'],
      }
    ]
  });
};

export const questionRepository: IQuestionRepository = {
  getAll: async (search: string, tags: string[]): Promise<QuestionModel[]> => {
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
    return await QuestionModel.findAll({
      attributes: ['id', 'question', 'createdAt'],
      where: {
        id: {
          [Op.in]: matchingQuestionIdsResults.map(question => question.id)
        }
      },
      include: [
        {
          model: UserModel,
          as: 'author',
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
  },
  getById: async (id: string): Promise<QuestionModel> => {
    return await QuestionModel.findOne({
      attributes: ['id', 'question', 'answer', 'createdAt'],
      where: {
        id
      },
      include: [
        {
          model: UserModel,
          as: 'author',
          attributes: ['name'],
        },
        {
          model: TagModel,
          attributes: ['name'],
        }
      ]
    });
  },
  create(question: Omit<Question, "id">, userId: string): Promise<Question> {
    return QuestionModel.create({
      ...question,
      userId
    });
  }
};
