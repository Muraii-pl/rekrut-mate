import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/providers/auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'rm-header',
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  protected isAuthenticated$ = inject(AuthService).isAuthenticated$;
}
