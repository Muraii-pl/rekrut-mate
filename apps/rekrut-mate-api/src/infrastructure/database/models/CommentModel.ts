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
import { Comment, CreateComment } from '../../../domain/entities/';

@Table({
  tableName: 'comments',
})
export default class CommentModel extends Model<Comment, CreateComment> {
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

  @BelongsTo(() => CommentModel, { foreignKey: 'commentId', as: 'parentComment' })
  declare parentComment?: CommentModel;

  @HasMany(() => CommentModel, { foreignKey: 'commentId', as: 'replies' })
  declare replies?: CommentModel[];

  @BelongsTo(() => QuestionModel)
  declare question: QuestionModel;

  @BelongsTo(() => UserModel, {as: 'author'})
  declare user: UserModel;

  @CreatedAt
  declare createdAt: Date;
  @UpdatedAt
  declare updatedAt: Date;
}
