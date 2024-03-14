import { Injectable } from '@angular/core';
import { AuthService as Auth0AuthService, LogoutOptions } from '@auth0/auth0-angular';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth0: Auth0AuthService) {}

  getUserProfile(): Observable<any> {
    return this.auth0.user$.pipe(
      map(user => ({
        name: user?.name, 
      }))
    );
  }
}
