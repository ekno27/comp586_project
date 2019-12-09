import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) {

  }
  checkUserExistence( ){
    // if the user is in the db, just get their id
    return this.http.get("https://xpireserver20191207050549.azurewebsites.net/api/Users");
    //else, add em to the db
  }

  addUser(body: string, accesToken: string) {
    return this.http.post("https://xpireserver20191207050549.azurewebsites.net/api/Users", body)

  }
}
