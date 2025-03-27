import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-logout',
    standalone: true,
    template: ` <p>Cerrando sesión...</p> `
})
export class LogoutComponent {
    constructor(private auth: AuthService, private router: Router) {
        this.auth.logout();
    }
}