import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { QuestionRepository } from '../../shared/services/api/question.repository';
import { QuestionDetailsDto, QuestionDetailsResponse, Result } from '@rm/dtos';

/**
 * A resolver that fetches a question by its slug.
 *
 * @param route - The current `ActivatedRouteSnapshot`.
 * @returns A promise that resolves with a `Results` object containing the question.
 *
 */
export const questionResolver: ResolveFn<Result<QuestionDetailsDto>> = (route: ActivatedRouteSnapshot) => {
  const slug: string = route.paramMap.get('slug')!;
  const questionService = inject(QuestionRepository);
  return questionService.getBySlug(slug);

};
