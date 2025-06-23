import { Comment, CreateComment } from '../entities';

/**
 * Repository for comments.
 */
export interface ICommentRepository {
  /**
   * Creates a new comment with the given details.
   *
   * @param comment - The details of the comment to create.
   * @returns A promise that resolves with the created comment.
   */
  create(comment: Omit<CreateComment, 'id' | 'createdAt'>): Promise<Comment>;

  /**
   * Get all replies for the given comment.
   *
   * @param commentId - The ID of the comment to get replies for.
   * @returns A promise that resolves with all replies of the given comment.
   */
  getReplies(commentId: string): Promise<Comment[]>;
}
