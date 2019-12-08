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

  getGroceryItems() {
    return this.http.get("https://localhost:44366/api/GroceryItems/")
  }

  getTestItem() {
    return "sigh ok here we go"
  }
}
