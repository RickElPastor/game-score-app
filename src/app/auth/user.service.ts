import { Injectable } from '@angular/core';

interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];

  private loggedIn = false;

  register(email: string, password: string, name: string): boolean {
    const exists = this.users.some(user => user.email === email);
    if (exists) return false;

    this.users.push({ name, email, password });
    this.loggedIn = true;
    return true;
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(user => user.email === email && user.password === password);
    this.loggedIn = !!user;
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}