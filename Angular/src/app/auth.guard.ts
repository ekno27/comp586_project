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
    if(this.authenticated) {
      return true;
    }
    this.oktaAuth.login();
    return false;
  }
}