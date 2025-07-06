import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginCredentials } from '../interfaces/login-credentials.interface';
import { BehaviorSubject, catchError, debounceTime, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated$ = new BehaviorSubject<boolean>(false);

  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = '/api/auth';
  private readonly _router = inject(Router);

  private constructor() {
    this.isAuthenticated$.next(localStorage.getItem('isAuthenticated') === 'true');
  }

  public login(credentials: LoginCredentials): Observable<void> {
    return this._http.post<void>(
      `${ this._baseUrl }/login`,
      credentials,
      { withCredentials: true })
    .pipe(
      tap(() => {
        localStorage.setItem('isAuthenticated', 'true');
        this.isAuthenticated$.next(true)
      }),
      catchError((err) => {
        localStorage.setItem('isAuthenticated', 'false');
        this.isAuthenticated$.next(false)
        return of();
      })
    );
  }

  public logout(): Observable<void> {
    return this._http.get<void>(
      `${ this._baseUrl }/logout`,
      { withCredentials: true })
    .pipe(
      tap(() => {
        localStorage.setItem('isAuthenticated', 'false');
        this.isAuthenticated$.next(false)
        this._router.navigate(['/']);
      }),
      catchError(() => of())
    );
  }

  public isAuthenticated(): Observable<boolean> {
    return this._http.get<boolean>(
      `${ this._baseUrl }/is-authenticated`,
      { withCredentials: true }).pipe(
        debounceTime(500)
    )
  }

}
