import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShelfComponent } from './../shelf/shelf.component';
import {FormsModule} from '@angular/forms';
import { ModalModule } from '../modal/modal.module';
import { CommonModule } from '@angular/common';
import {GroceryItemService} from './../grocery-item.service'




@NgModule({
  declarations: [
    ShelfComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule,
    CommonModule,
    
  ],
  providers: [
    GroceryItemService
  ],
  bootstrap: [ShelfComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ShelfModule { }
