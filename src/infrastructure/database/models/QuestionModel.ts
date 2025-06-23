import {
  BelongsTo,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  HasMany, Index,
  Model,
  Table,
  UpdatedAt
} from 'sequelize-typescript';
import { Question } from '../../../domain/entities';
import UserModel from './UserModel';
import TagModel from './TagModel';
import QuestionTagModel from './QuestionTagModel';
import CommentModel from './CommentModel';

@Table({
  tableName: 'questions',
  timestamps: true,
})
export default class QuestionModel extends Model<Question> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  declare id: string;

  @Index
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  declare slug: string;

  @Column({
    type: DataType.STRING,
  })
  declare question: string;
  @Column({
    type: DataType.STRING,
  })
  declare answer: string;

  @Column({
    type: DataType.UUID,
  })
  @ForeignKey(() => UserModel)
  declare userId: string;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;

  @BelongsTo(() => UserModel, { as: 'author' })
  declare user: UserModel;

  @HasMany(() => CommentModel)
  declare comments: CommentModel[];

  @BelongsToMany(() => TagModel, () => QuestionTagModel)
  declare tags: TagModel[];
}
