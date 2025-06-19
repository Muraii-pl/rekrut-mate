import { Session } from '../entities';

export interface IAuthRepository {
  /**
   /**
   * Updates a session with a new user ID.
   *
   * @param userId - The new user ID to associate with the session.
   * @returns A promise that resolves when the update is complete.
   */
  create(userId: string): Promise<Session>;

  /**
   * Updates a session with a new user ID.
   *
   * @param id - The ID of the session to update.
   * @param userId - The new user ID to associate with the session.
   * @returns A promise that resolves when the update is complete.
   */
  update(id: string, userId: string): Promise<void>;

  /**
   * Deletes a session by its ID.
   *
   * @param id - The ID of the session to delete.
   * @returns A promise that resolves to the number of rows affected.
   */
  delete(id: string): Promise<number>;

  /**
   * Retrieves a session by its ID.
   *
   * @param id - The ID of the session to retrieve.
   * @returns A promise that resolves to the requested session.
   */
  get(id: string): Promise<Session | null>;

  /**
   * Removes all inactive sessions. Inactive sessions are defined as sessions that have not been modified in the past year.
   *
   * @returns A promise that resolves to the number of rows affected.
   */
  removeInactive(): Promise<number>;
}
