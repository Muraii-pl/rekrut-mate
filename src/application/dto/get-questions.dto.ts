
export interface GetQuestionsDto {
  question: string;
  slug: string;
  createdAt: Date;
  tags: string[];
  author: {
    name: string;
  };
}
