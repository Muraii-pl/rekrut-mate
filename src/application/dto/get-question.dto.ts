import { GetQuestionsDto } from './get-questions.dto';

export interface GetQuestionDto extends GetQuestionsDto {
  answer: string;
  comments: {
    content: string;
    author: {
      name: string;
    };
    replies: {
      content: string;
      author: {
        name: string;
      }
    }[]
  }[];
}
