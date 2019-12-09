import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from './authentication.service'

@Injectable()
export class OktaAuthGuard implements CanActivate {
  oktaAuth;
  authenticated;
  constructor(private okta: AuthenticationService, private router: Router) {
    this.authenticated = okta.isAuthenticated();
    this.oktaAuth = okta;

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authenticated) {
      console.log(this.authenticated);
      console.log('dude authenticated frfr'); 
      return true; }
    console.log('nah b')
    // Redirect to login flow.
    this.oktaAuth.login();
    return false;
  }
}