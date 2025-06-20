import { BelongsTo, Column, CreatedAt, DataType, ForeignKey, Model, Table, UpdatedAt } from 'sequelize-typescript';
import UserModel from './UserModel';
import { Session } from '../../../domain/entities';

@Table({
  tableName: 'sessions',
  timestamps: true,
})
export default class SessionModel extends Model<Session> {

  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  declare id: string;
  @CreatedAt
  declare createdAt: Date;
  @UpdatedAt
  declare updatedAt: Date;

  @Column({
    type: DataType.UUID,
  })
  @ForeignKey(() => UserModel)
  declare userId: string;

  @BelongsTo(() => UserModel)
  declare user: UserModel;

}
