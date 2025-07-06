import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { QuestionStore as IQuestionStore } from '../../../core/interfaces/question-store.interface';
import { computed, inject } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { QuestionRepository } from '../api/question.repository';
import { debounceTime, distinctUntilChanged, lastValueFrom, tap } from 'rxjs';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

const initialQuestionState: IQuestionStore = {
  searchTerm: '',
  selectedTags: [],
  questions: [],
  isLoading: false,
  error: null
};

export const QuestionStore = signalStore(
  { providedIn: 'root' },
  withState(initialQuestionState),
  withComputed(({ searchTerm, selectedTags }) => ({
    queryParams: computed(() => {
      let params = new HttpParams();
      if (searchTerm()) {
        params = params.set('search', searchTerm());
      }
      if (selectedTags().length) {
        params = params.set('tags', selectedTags().join(','));
      }
      return params;
    })
  })),
  withMethods((store, _questionRepository = inject(QuestionRepository)) => ({
    async getQuestions() {
      patchState(store, { isLoading: true, error: null });
      try {
        const { data } = await lastValueFrom(_questionRepository.getAll(store.queryParams()));
        patchState(store, { questions: data });
      } catch (error) {
        patchState(store, { error: (error as Error).message || 'Something went wrong' });
      } finally {
        patchState(store, { isLoading: false });
      }
    },
    updateSearchTerm(searchTerm: string) {
      patchState(store, { searchTerm });
    },
    updateSelectedTags(selectedTags: string[]) {
      patchState(store, { selectedTags });
    }
  })),
  withHooks({
    onInit(store) {
      toObservable(store.queryParams)
        .pipe(
          debounceTime(500),
          distinctUntilChanged((prev, next) => prev.toString() === next.toString()),
          takeUntilDestroyed(),
          tap(() => store.getQuestions())
        )
        .subscribe();
    }
  })
);
