export interface CreateCommentDto {
  content: string;
  questionId: string;
  commentId?: string;
}
