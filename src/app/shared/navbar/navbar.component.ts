import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showLink: boolean = false;
  constructor(public _auth: AuthService, private router: Router) { }
  isNavbarExpanded = false;

  isLoggedIn(): boolean {
    return this._auth.isLoggedIn(); // Call the method to check login status
  }

  logout() {
    // localStorage.removeItem('token');
    this._auth.logout();
    this.router.navigate(['/home']);
    this.closeNavbar();
  }

  closeNavbar() {
    // this.isNavbarExpanded = !this.isNavbarExpanded;
    this.isNavbarExpanded = false;  // Close the navbar when a link is clicked
  }

  toggleNavbar() {
    this.isNavbarExpanded = !this.isNavbarExpanded;
  }
}
