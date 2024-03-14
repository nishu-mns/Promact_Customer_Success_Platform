import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {

  // ngOnInit(): void {
  //   this.authService.isAuthenticated$.subscribe(isAuthenticated => {
  //     if (isAuthenticated) {
  //       this.router.navigate(['/dashboard']);
  //     }
  //   });
  // }
}
