import { Component, OnInit } from '@angular/core';
import apiCalls from './../../api/api.js'
@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {
  items= []

  inputField: String

  shelfIsEmpty = true;

  listIsempty = ()=> {return this.items.length > 0}

  constructor() {
   }

  ngOnInit() {
    if(this.items.length > 0) {
      this.shelfIsEmpty = false
    }

  }
  addItem() {
    alert('will add item to db, if your item is not on the list, modal will pop up to add info')
    apiCalls.addItemAPI().then((response: any)=>{
      this.items.push(response.data)
      this.shelfIsEmpty = false
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
