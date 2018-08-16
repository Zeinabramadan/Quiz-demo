import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onLogin() {
    this.authService.loggedIn();
    this.isAuth = true;
    this.router.navigate(['instractour-dashboard']);
  }

  onlogOut() {
    this.authService.loggedOut();
    this.isAuth = false;
    this.router.navigate(['/']);
  }
}
