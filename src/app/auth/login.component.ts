import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="login-container">
      <div class="form-wrapper">
        <h2>Iniciar Sesión</h2>
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <input type="email" formControlName="email" placeholder="Correo" />
          <input type="password" formControlName="password" placeholder="Contraseña" />
          <button type="submit">Entrar</button>
        </form>

        <div class="extra-link">
          <p>¿No tienes cuenta?</p>
          <a routerLink="/auth/register" class="register-btn">Regístrate</a>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.auth.login(this.form.value.email, this.form.value.password)) {
      this.router.navigate(['/main/popular']);
    }
  }
}