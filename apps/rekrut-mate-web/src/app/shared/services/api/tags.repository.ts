import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs';
import { Observable, shareReplay, take } from 'rxjs';
import { Result, TagDto } from '@rm/dtos';

@Injectable({
  providedIn: 'root'
})
export class TagsRepository {

  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = './api/tag';


  public getAll(): Observable<TagDto[]> {
    return this._http.get<Result<TagDto[]>>(
      `${ this._baseUrl }/all`,
      { withCredentials: true }
    ).pipe(
      shareReplay(1),
      take(1),
      map(({ data }) => data)
    );
  }

}
