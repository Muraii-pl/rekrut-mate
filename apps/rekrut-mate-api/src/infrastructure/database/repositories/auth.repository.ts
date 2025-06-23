import { IAuthRepository } from '../../../domain/repositories';
import SessionModel from '../models/SessionModel';
import { col, fn, literal, Op, where } from 'sequelize';
import { Session } from '../../../domain/entities';
import { toSessionEntity } from '../../mappers/toSessionEntity';


export const authRepository: IAuthRepository = {
  async create(userId: string): Promise<Session> {
    const session =  await SessionModel.create({ userId });
    return toSessionEntity(session);
  },
  async update(id: string, userId: string): Promise<void> {
    await SessionModel.update({ userId }, { where: { id } });
  },
  async delete(id: string): Promise<number> {
    return SessionModel.destroy({ where: { id } });
  },
  async get(id: string): Promise<Session | null> {
    const session = await SessionModel.findOne({ where: { id } });
    return session ? toSessionEntity(session) : null;
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

