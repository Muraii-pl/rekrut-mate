import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
  UpdatedAt
} from 'sequelize-typescript';
import UserModel from './UserModel';
import QuestionModel from './QuestionModel';
import { Comment } from '../../../domain/entities/Comment';

@Table({
  tableName: 'comments',
})
export default class CommentModel extends Model<Comment> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  declare content: string;

  @Column({
    type: DataType.UUID,
  })
  @ForeignKey(() => UserModel)
  declare userId: string;

  @ForeignKey(() => QuestionModel)
  @Column({
    type: DataType.UUID,
  })
  declare questionId: string;

  @ForeignKey(() => CommentModel)
  @AllowNull
  @Column({
    type: DataType.UUID,
  })
  declare commentId: string | null;

  @BelongsTo(() => CommentModel)
  declare comment: CommentModel;

  @BelongsTo(() => QuestionModel)
  declare questions: QuestionModel[];

  @CreatedAt
  declare createdAt: Date;
  @UpdatedAt
  declare updatedAt: Date;
}
