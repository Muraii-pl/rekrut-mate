import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Question } from '../../../core/interfaces/question.interface';
import { Observable } from 'rxjs';
import { Results } from '../../../core/interfaces/results.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionRepository {
  private readonly _baseUrl = './api/question';
  private readonly _http = inject(HttpClient);

  public getAll(queryParams: HttpParams): Observable<Results<Question[]>> {
    return this._http.get<Results<Question[]>>(
      `${ this._baseUrl }/all`,
      {
        params: queryParams,
        withCredentials: true
      },
    );
  }
}
