import { Component, OnInit } from '@angular/core';
import apiCalls from './../../api/api.js'
@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {
  items: Array<Object>;

  groceryItem: String;

  shelfIsEmpty = true;

  listIsempty = ()=> {return this.items.length > 0}

  constructor() {
   }

 async ngOnInit() {
    await apiCalls.getItemsAPI().then((response: any)=> {
      this.items = response.data
    })
    if(this.items.length > 0) {
      this.shelfIsEmpty = false
    }

  }
  addItem() {
    const body: Object =  {
      name: this.groceryItem,
      shelfLife: 8, 
      expirationDate: '2020-02-12T00:00:00',
      userId: 1

    }
    apiCalls.addItemAPI(body)
    .then((response: any)=>{
      console.log(response.data);
      this.items.push(response.data);
      this.shelfIsEmpty = false
    }).catch((err: any)=> {
      console.log(err);
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
}
