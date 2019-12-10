import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private okta: AuthenticationService, router: Router, user: UserService) {

    okta.handleAuthentication().then(()=> {
      user.checkUserExistence(localStorage.getItem('email'), okta.getAccessToken())
      .subscribe((data: any)=>{
        console.log('found user')
        localStorage.setItem('id', data.id)
      },
      (error:any)=>{
        console.log('couldnt find user')
        const body: object = {
          firstName: localStorage.getItem('firstName'),
          lastName: localStorage.getItem('lastName'),
          email: localStorage.getItem('email')
          
        }
        user.addUser(body, okta.getAccessToken())
          .subscribe((data:any)=> {
            localStorage.setItem('id', data.id)
          })
      })
      router.navigate(['/shelf']);
    });
    
  }

  ngOnInit() {
  }

}
