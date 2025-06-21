
export interface GetQuestionsDto {
  id: string;
  question: string;
  createdAt: Date;
  tags: string[];
  author: {
    name: string;
  };
}
