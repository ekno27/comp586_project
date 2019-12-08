import { Component, OnInit } from '@angular/core';
import apiCalls from './../../api/api.js'
import groceryOptions from './../../../groceryOptions.js';
import {GroceryItemService} from './../grocery-item.service'
@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {
  
  items: Array<Object>;

  groceryItemQuery: String;

  groceryItemShelfLife: Number;

  groceryItemExpirationDate: String ="2020-02-12T00:00:00";

  shelfIsEmpty: Boolean = true;

  showModal: Boolean = false;

  listIsempty: Function = ()=> {return this.items.length > 0};

  constructor( ) {
  }

  async ngOnInit() {
    // var x = this.groceryItemService.getGroceryItems()
    console.log

    await apiCalls.getItemsAPI().then((response: any)=> {
      this.items = response.data
    })
    if(this.items.length > 0) {
      this.shelfIsEmpty = false
    }

  }

  submit() {
    let itemInfo: Object = this.getItemInfo();
    itemInfo === undefined ? this.showModal = true : this.addItem();
  }
  

  addItem() { 
    this.showModal = false

    const item: Object =  {
      name: this.groceryItemQuery,
      shelfLife: this.groceryItemShelfLife, 
      expirationDate: this.groceryItemExpirationDate,
      userId: 1
    }
    console.log(item);

    apiCalls.addItemAPI(item)
    .then((response: any)=>{
      console.log(response.data);
      this.items.push(response.data);
      this.shelfIsEmpty = false
    }).catch((err: any)=> {
      console.log(err);
      console.error(err);
    })
  }

  deleteItem() {
    alert("will delete item")
    this.items.pop()
    console.log('item was deleted')
    if(this.items.length === 0) {
      this.shelfIsEmpty = true
    }
  } 


  getItemInfo(): Object {
    let query: String = this.groceryItemQuery;
    console.log(query)
    let groceryOption = groceryOptions.data.find((element: { item_name: String; }) => element.item_name === query);
    if(groceryOption === undefined) {
      return undefined;
    }
    else {
      this.groceryItemShelfLife = groceryOption.shelf_life;
      return groceryOption;
    }
  }
  
}
