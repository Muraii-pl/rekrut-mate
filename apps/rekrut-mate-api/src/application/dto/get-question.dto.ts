import { GetQuestionsDto } from './get-questions.dto';
import { GetRepliesCommentDto } from './get-replies-comment.dto';

interface Comment extends GetRepliesCommentDto {
  replies: GetRepliesCommentDto[];
}

export interface GetQuestionDto extends GetQuestionsDto {
  answer: string;
  comments: Comment[] ;
}
