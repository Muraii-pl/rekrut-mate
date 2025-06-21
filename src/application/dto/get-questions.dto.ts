
export interface GetQuestionsDto {
  id: string;
  question: string;
  answer: string;
  createdAt: Date;
  tags: string[];
  author: {
    name: string;
  };
}
