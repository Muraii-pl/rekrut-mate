import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import QuestionModel from './QuestionModel';
import TagModel from './TagModel';

@Table({
  tableName: 'question_tags',
  timestamps: false
})
export default class QuestionTagModel extends Model<{questionId: string, tagId: string}> {

  @Column({ type: DataType.UUID })
  @ForeignKey(() => QuestionModel)
  declare questionId: string;

  @Column({ type: DataType.UUID })
  @ForeignKey(() => TagModel)
  declare tagId: string;
}
