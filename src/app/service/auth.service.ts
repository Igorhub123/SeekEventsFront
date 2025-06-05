import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isLoggedIn = false;

    constructor(private router: Router) { }

    login(): void {
        this.isLoggedIn = true;
        localStorage.setItem('seekevents_auth', 'true');
        this.router.navigate(['/inicial']); // Redireciona para a página inicial após login
    }

    logout(): void {
        this.isLoggedIn = false;
        localStorage.removeItem('seekevents_auth');
        this.router.navigate(['/login']); // Redireciona para login após logout
    }

    isAuthenticated(): boolean {
        return this.isLoggedIn || localStorage.getItem('seekevents_auth') === 'true';
    }
}