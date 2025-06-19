import { BelongsTo, Column, CreatedAt, DataType, ForeignKey, Model, Table, UpdatedAt } from 'sequelize-typescript';
import User from './UserModel';
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
  @ForeignKey(() => User)
  declare userId: string;

  @BelongsTo(() => User)
  declare user: User;

}
