import { Optional } from 'sequelize';
import { Table, Column, DataType, CreatedAt, UpdatedAt, Model, HasMany } from 'sequelize-typescript';
import SessionModel from './SessionModel';
import { User } from '../../../domain/entities/User';



@Table({
  timestamps: true,
  tableName: 'users',
  modelName: 'UserModel',
})
export default class UserModel extends Model<User> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  declare id: string;

  @Column({
    type: DataType.STRING
  })
  declare name: string;
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  declare email: string;
  @Column({
    type: DataType.STRING
  })
  declare password: string;
  @CreatedAt
  declare createdAt: Date;
  @UpdatedAt
  declare updatedAt: Date;

  @HasMany(() => SessionModel)
  declare sessions: SessionModel[];
}
