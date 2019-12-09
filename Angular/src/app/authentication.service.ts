import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as OktaAuth from '@okta/okta-auth-js';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  oktaAuth = new OktaAuth({
    url: 'https://dev-307965.okta.com',
    clientId: '0oa25huq0pTxLbiRR357',
    issuer: 'https://dev-307965.okta.com/oauth2/default',
    redirectUri: 'http://localhost:4200/callback',
    pkce: true
  });

  constructor(private router: Router) { }

  async isAuthenticated() {
    
    return !!(this.oktaAuth.tokenManager.get('accessToken'));
  }
  login() {
    console.log('signing in');
    this.oktaAuth.token.getWithRedirect({
      scopes:['openid', 'email','profile']
    });
  }

  async handleAuthentication() {
    console.log('handling auth');
    const tokens = await this.oktaAuth.token.parseFromUrl();
    console.log(tokens);
    tokens.forEach(token => {
      if (token.idToken) {
        this.oktaAuth.tokenManager.add('idToken', token);
      }
      if (token.accessToken) {
        this.oktaAuth.tokenManager.add('accessToken', token);
      }
    });
  }

  async logout() {
    console.log(this.oktaAuth.tokenManager);
    this.oktaAuth.tokenManager.clear();
    await this.oktaAuth.signOut();
    this.router.navigate(['/login'])
  }

}
