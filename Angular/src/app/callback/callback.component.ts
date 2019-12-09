import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private okta: AuthenticationService, router: Router) {
    okta.handleAuthentication();
    router.navigate(['/shelf']);
  }

  ngOnInit() {
  }

}
