import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result, QuestionDetailsDto, QuestionDto } from '@rm/dtos';

@Injectable({
  providedIn: 'root'
})
export class QuestionRepository {
  private readonly _baseUrl = './api/question';
  private readonly _http = inject(HttpClient);

  public getAll(queryParams: HttpParams): Observable<Result<QuestionDto[]>> {
    return this._http.get<Result<QuestionDto[]>>(
      `${ this._baseUrl }/all`,
      {
        params: queryParams,
        withCredentials: true
      },
    );
  }

  public getBySlug(slug: string): Observable<Result<QuestionDetailsDto>> {
    return this._http.get<Result<QuestionDetailsDto>>(
      `${ this._baseUrl }/${ slug }`,
      { withCredentials: true }
    );
  }
}
