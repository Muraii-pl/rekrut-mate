import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../../../core/interfaces/tag.interface';
import { Results } from '../../../core/interfaces/results.interface';
import { map } from 'rxjs';
import { Observable, shareReplay, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsRepository {

  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = './api/tag';


  public getAll(): Observable<Tag[]> {
    return this._http.get<Results<Tag[]>>(
      `${ this._baseUrl }/all`,
      { withCredentials: true }
    ).pipe(
      shareReplay(1),
      take(1),
      map(({ data }) => data)
    );
  }

}
