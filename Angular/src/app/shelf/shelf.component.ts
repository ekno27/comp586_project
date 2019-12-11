import { Component, OnInit } from '@angular/core';
import apiCalls from './../../api/api.js'
import groceryOptions from './../../../groceryOptions.js';
import { GroceryItemService } from '../grocery-item.service.js';
import { ModalComponent } from '../modal/modal.component.js';
import { AuthenticationService } from '../authentication.service.js';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {

  items: Array<any>;

  fullName: string;

  email: string;

  testString: String

  groceryItemQuery: String;

  groceryItemShelfLife: number= null;

  shelfIsEmpty: Boolean = true;

  showModal: Boolean = false;

  listIsempty: Function = ()=> {return this.items.length > 0};

  constructor( public groceryItemService: GroceryItemService, public oktaAuth: AuthenticationService ) {
  }

  setExpirationDate(shelfLife: number) {
    let x: Date =  new Date();
    
    x.setDate(x.getDate()+ shelfLife);
    const stringX: String  = x.toISOString().split('T')[0] + 'T'  
                        + x.toTimeString().split(' ')[0]; 
    
    return stringX;

  }
  formatExpirationDate(expirationDate: string) {
    
    var datetime =new Date(expirationDate);

    return `${datetime.getDate()}/${datetime.getMonth()+1}/${datetime.getFullYear()}` 
  
  
  }
  ngOnInit() {
    this.groceryItemService.getGroceryItems(parseInt(localStorage.getItem('id')),this.oktaAuth.getAccessToken())
    .subscribe((data: any) => {
      this.items = data.groceryItems;
      this.fullName = data.firstName +" " +data.lastName;
      this.email =data.lastName;
      if(this.items.length > 0) {
        this.shelfIsEmpty = false
      }
    });
  }

  submit() {
    let itemInfo: Object = this.getItemInfo();
    if(this.groceryItemShelfLife !== null) {
      this.addItem();
    }
    else {
      itemInfo === undefined ? this.showModal = true : this.addItem();
    }
  }

  handleModal(value: boolean) {
    this.showModal = value;
    this.groceryItemService.setShowModal(value);
  }
  

  addItem() { 
    this.showModal = false

    const item: Object =  {
      name: this.groceryItemQuery,
      shelfLife: this.groceryItemShelfLife, 
      expirationDate: this.setExpirationDate(this.groceryItemShelfLife),
      userId: parseInt(localStorage.getItem('id'))
    }

    this.groceryItemService.addGroceryItem(item, this.oktaAuth.getAccessToken())
    .subscribe((data: any)=> {
      data.groceryItem = data.name;
      console.log(data)
      this.items.push(data);
      this.shelfIsEmpty= false;
      this.groceryItemShelfLife = null;
    })
  }

  deleteItem(groceryItemId: number) {
    const itemIndex = this.items.findIndex(arrayItem => arrayItem.id === groceryItemId);

    if (itemIndex >-1) {
      this.items.splice(itemIndex,1);
      
      }
    else{
    }
    this.groceryItemService.deleteGroceryItem(groceryItemId, this.oktaAuth.getAccessToken())
    .subscribe((data:any)=>{
      console.log(data)
    })
    if(this.items.length === 0) {
      this.shelfIsEmpty = true
    }
  }
  


  getItemInfo(): Object {
    let query: String = this.groceryItemQuery;
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
