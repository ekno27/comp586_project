import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import groceryOptions from './../../groceryOptions.js';


@Injectable({
  providedIn: 'root'
})
export class GroceryItemService {
  items: Array<Object>;
  testString: 'Hello'

  groceryItemQuery: String;

  groceryItemShelfLife: Number;

  groceryItemExpirationDate: String ="2020-02-12T00:00:00";

  showModal: Boolean = false;

  constructor(public http: HttpClient) { 

  }

  
  getShowModal(){
    return this.showModal;
  }
  setShowModal(value: Boolean){
    this.showModal = value;

  }

  getGroceryItems(accessToken: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `bearer ${accessToken}`
      })
    }
    return this.http.get("https://localhost:44366/api/GroceryItems/", httpOptions);
  }


  addGroceryItem(body:object, accessToken: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `bearer ${accessToken}`
      })
    }
    return this.http.post("https://localhost:44366/api/GroceryItems/", body, httpOptions);
  }

  deleteGroceryItem(id: number, accessToken: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `bearer ${accessToken}`
      })
    }
    return this.http.delete(`https://localhost:44366/api/GroceryItems/${id}`, httpOptions);
  }

}
