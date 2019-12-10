import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as OktaAuth from '@okta/okta-auth-js';
import { decode } from 'punycode';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  oktaAuth = new OktaAuth({
    url: 'https://dev-307965.okta.com',
    clientId: '0oa25huq0pTxLbiRR357',
    issuer: 'https://dev-307965.okta.com/oauth2/default',
    redirectUri: 'https://xpire-eac-ef7c41.netlify.com/callback',
    pkce: true
  });

  firstName: string;
  lastName: string;
  email: string
  fullName: string;

  constructor(private router: Router) {
    
  }

  isAuthenticated() {
    var userInfo =JSON.parse(localStorage.getItem('okta-token-storage'));
    if (Object.keys(userInfo).length !== 0) {
      return true;
    }
    return false;    
  }


  getAccessToken() {
    var userInfo = JSON.parse(localStorage.getItem('okta-token-storage'));
    return userInfo.accessToken.accessToken;
  }

  getIdToken() {
    var userInfo = JSON.parse(localStorage.getItem('okta-token-storage'));
    return userInfo.idToken.idToken
  }

  
  login() {
    this.oktaAuth.token.getWithRedirect({
      scopes:['openid', 'email','profile']
    });
  }
  


  async handleAuthentication() {
    const tokens = await this.oktaAuth.token.parseFromUrl();
    tokens.forEach(token => {
      if (token.idToken) {  
        const decodedToken =  this.oktaAuth.token.decode(token.idToken); 
        localStorage.setItem("firstName", decodedToken.payload.name.split(" ")[0]);
        localStorage.setItem("lastName", decodedToken.payload.name.split(" ")[1]);
        localStorage.setItem("email", decodedToken.payload.email);
        this.oktaAuth.tokenManager.add('idToken', token);
      }
      if (token.accessToken) {
        this.oktaAuth.tokenManager.add('accessToken', token);
      }
    });
  }

  async logout() {
    this.oktaAuth.tokenManager.clear();
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    await this.oktaAuth.signOut();
    this.router.navigate(['/login'])
  }

}
