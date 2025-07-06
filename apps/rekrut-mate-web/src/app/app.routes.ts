import { Route } from '@angular/router';
import { authGuard } from './core/providers/auth.guard';
import { AuthService } from './core/providers/auth.service';
import { inject } from '@angular/core';
import { take } from 'rxjs';
import { questionResolver } from './routes/home/question.resolver';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        canActivate: [authGuard],
        loadComponent: () => import('./routes/auth/login/login.page').then(m => m.LoginPage),
      },
      {
        path: 'logout',
        loadComponent: () => import('./routes/auth/login/login.page').then(m => m.LoginPage),
        resolve: {
          logout: () => {
            return inject(AuthService).logout().pipe(
              take(1)
            );
          }
        }
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
  {
    path: '',
    loadComponent: () => import('./routes/home/home/home.page').then(m => m.HomePage),
  },
  {
    path: 'question/:slug',
    loadComponent: () => import('./routes/home/question/question.page').then(m => m.QuestionPage),
    resolve: {
      question: questionResolver
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

