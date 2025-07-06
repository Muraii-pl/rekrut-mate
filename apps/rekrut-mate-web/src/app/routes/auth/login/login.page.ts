import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginSchema } from '../../../shared/domain/validators/login.schema';
import { AuthService } from '../../../core/providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rm-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LoginPage {

  protected loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  private _authService = inject(AuthService);
  private _router = inject(Router);


  public login(): void {
    const result = LoginSchema.safeParse(this.loginForm.value);
    if (result.success) {
      this._authService.login(result.data).subscribe(() => {
        this._router.navigate(['']);
      })
    } else {
      console.log(result.error);
    }
  }
}
