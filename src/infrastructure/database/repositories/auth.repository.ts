import { IAuthRepository } from '../../../domain/repositories/';
import SessionModel from '../models/SessionModel';
import { col, fn, literal, Op, where } from 'sequelize';
import { Session } from '../../../domain/entities';


export const authRepository: IAuthRepository = {
  create(userId: string): Promise<Session> {
    return SessionModel.create({ userId });
  },
  async update(id: string, userId: string): Promise<void> {
    await SessionModel.update({ userId }, { where: { id } });
  },
  delete(id: string): Promise<number> {
    return SessionModel.destroy({ where: { id } });
  },
  get(id: string): Promise<Session> {
    return SessionModel.findOne({ where: { id } });
  },
  removeInactive(): Promise<number> {
    return SessionModel.destroy({
      where: {
        [Op.and]: [
          where(fn('DATE', col('createdAt')), fn('DATE', col('updatedAt'))),
          {
            createdAt: {
              [Op.lt]: literal("NOW() - INTERVAL '1 year'")
            }
          }
        ]
      }
    });
  },
};

