import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users: User[] = [];
  private isLoggedIn = false;

  constructor(private router: Router) { }

  login(email: string, password: string): boolean {
    if (email && password) {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  register(email: string, password: string, name: string): boolean {
    const exists = this.users.some((user: { email: string; }) => user.email === email);
    if (exists) return false;
  
    this.users.push({ name, email, password });
    this.isLoggedIn = true;
    return true;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}