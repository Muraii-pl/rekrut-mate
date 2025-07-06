import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { QuestionRepository } from '../../shared/services/api/question.repository';
import { Results } from '../../core/interfaces/results.interface';
import { Question } from '../../core/interfaces/question.interface';

/**
 * A resolver that fetches a question by its slug.
 *
 * @param route - The current `ActivatedRouteSnapshot`.
 * @returns A promise that resolves with a `Results` object containing the question.
 *
 */
export const questionResolver:ResolveFn<Results<Question>> = (route: ActivatedRouteSnapshot) => {
  const slug: string = route.paramMap.get('slug')!;
  const questionService = inject(QuestionRepository);
  return questionService.getBySlug(slug);

};
