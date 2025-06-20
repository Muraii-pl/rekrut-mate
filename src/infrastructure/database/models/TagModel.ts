import { BelongsToMany, Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { Tag } from '../../../domain/entities';
import QuestionTagModel from './QuestionTagModel';
import QuestionModel from './QuestionModel';

@Table({
  tableName: 'tags',
  timestamps: false,
})
export default class TagModel extends Model<Tag>{
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  declare id: string;


  @Column({
    type: DataType.STRING,
  })
  declare name: string

  @BelongsToMany(() => QuestionModel, () => QuestionTagModel)
  declare questions: TagModel[];

}
