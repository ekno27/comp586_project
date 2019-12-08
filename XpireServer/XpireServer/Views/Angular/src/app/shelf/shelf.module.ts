import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShelfComponent } from './../shelf/shelf.component';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {GroceryItemService} from './../grocery-item.service'
import {MatDialogModule} from '@angular/material';
import { ModalComponent } from '../modal/modal.component';


@NgModule({
  declarations: [
    ShelfComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    
  ],
  entryComponents: [ModalComponent],
  providers: [
    GroceryItemService
  ],
  bootstrap: [ShelfComponent, ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ShelfModule { }
