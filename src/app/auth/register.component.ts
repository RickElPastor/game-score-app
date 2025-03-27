import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
  <div class="login-container">
    <div class="form-wrapper">
      <h2>Registro</h2>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <input type="text" formControlName="name" placeholder="Nombre" />
        <input type="email" formControlName="email" placeholder="Correo" />
        <input type="password" formControlName="password" placeholder="Contraseña" />
        <input type="password" formControlName="confirmPassword" placeholder="Confirmar contraseña" />
        <button type="submit">Registrarse</button>
      </form>

      <div class="extra-link">
        <p>¿Ya tienes cuenta?</p>
        <a routerLink="/auth/login" class="register-btn">Iniciar sesión</a>
      </div>
    </div>
  </div>
`
})
export class RegisterComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const { name, email, password, confirmPassword } = this.form.value;

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const success = this.auth.register(email, password, name);
    if (success) {
      this.router.navigate(['/main/popular']);
    }
  }
}