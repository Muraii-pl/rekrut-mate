import { Question } from '../entities';

export interface IQuestionRepository {
  /**
   * Finds all questions that match the given search query and tags.
   *
   * @param search - The search query to match against question titles and content.
   * @param tags - The tags to filter questions by.
   * @returns A promise that resolves with an array of questions that match the search query and tags.
   */
  getAll(search: string | undefined, tags: string[] | undefined): Promise<Question[]>;

  /**
   * Finds a question by its ID.
   *
   * @param slug - The slug of the question to find.
   * @returns A promise that resolves with the question with the given ID, or null if no question exists.
   */
  getBySlug(slug: string): Promise<Question | null>;
  /**
   * Creates a new question with the given details.
   *
   * @param question - The details of the question to create.
   * @param tags
   * @returns A promise that resolves with the created question.
   */
  create(question: Omit<Question, 'id' | 'createdAt' | 'updatedAt'>, tags: string[]): Promise<Question>;

  /**
   * Counts the number of questions with the given slug.
   *
   * @param slug - The slug to count questions for.
   * @returns A promise that resolves with the number of questions with the given slug.
   */
  countBySlug(slug: string): Promise<number>;
}
