import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public oktaAuth: AuthenticationService, public router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('okta-token-storage') !=="{}") {
      this.router.navigate(['/shelf']);

    }
 
    
  }
}
