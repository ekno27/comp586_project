import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ModalComponent} from './../modal/modal.component'
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    ModalComponent
  ],
  providers: [],
  bootstrap: [ModalComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ModalModule { }
