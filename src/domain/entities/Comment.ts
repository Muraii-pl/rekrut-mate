export interface Comment {
  id: string;
  content: string;
  userId: string;
  questionId: string;
  commentId: string | null;
  createdAt: Date;
}
