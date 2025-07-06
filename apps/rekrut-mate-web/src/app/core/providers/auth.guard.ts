import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, map, of, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (route.routeConfig?.path === 'login') {
    return authService.isAuthenticated().pipe(
      map(() => {
        router.navigate(['/home']);
        return false
      }),
      catchError(() => of(true))
    )

  }

  return authService.isAuthenticated().pipe(
    tap(() => {
      localStorage.setItem('isAuthenticated', 'true');
      authService.isAuthenticated$.next(true)
    }),
    map(() => true),
    catchError(() => {
      localStorage.setItem('isAuthenticated', 'false');
      authService.isAuthenticated$.next(false)
      router.navigate(['auth', 'login']);
      return of(false);
    })
  )
};
