import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
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

  getGroceryItems() {
    return this.http.get("https://xpireserver20191207050549.azurewebsites.net/api/GroceryItems");
  }


  addGroceryItem(body:object) {
    return this.http.post("https://xpireserver20191207050549.azurewebsites.net/api/GroceryItems", body);
  }

  deleteGroceryItem(id: number) {
    return this.http.delete(`https://xpireserver20191207050549.azurewebsites.net/api/GroceryItems/${id}`);
  }

}
