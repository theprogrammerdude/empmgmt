import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    var isAuthenticated = localStorage.getItem('uid') != null ? true : false;

    if (!isAuthenticated) {
      this.router.navigate(['']);
    }

    return isAuthenticated;
  }
}
