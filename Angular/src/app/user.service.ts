import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) {

  }
  checkUserExistence(email: string, accessToken: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `bearer ${accessToken}`
      })
    }
    // if the user is in the db, just get their id
    return this.http.get(`https://localhost:44366/api/Users/email/${email}`, httpOptions);
    //else, add em to the db
  }

  addUser(body: object, accessToken: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `bearer ${accessToken}`
      })
    }
    return this.http.post("https://localhost:44366/api/Users", body, httpOptions)

  }
}
