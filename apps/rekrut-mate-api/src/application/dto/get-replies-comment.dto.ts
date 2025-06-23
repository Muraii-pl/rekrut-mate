import { GetQuestionDto } from './get-question.dto';

export interface GetRepliesCommentDto {
  content: string;
  author: {
    name: string;
  }
}
