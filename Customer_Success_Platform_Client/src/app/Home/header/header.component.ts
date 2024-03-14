// header.component.ts
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService,@Inject(DOCUMENT) public document: Document, private router: Router) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
          if (isAuthenticated) {
            this.router.navigate(['/tables']);
          }
        });
    
  }
  logout(): void{
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }

  async login() :Promise<void>{
    this.auth.loginWithRedirect();
    await this.router.navigate(['/tables']);
  }
  
}
