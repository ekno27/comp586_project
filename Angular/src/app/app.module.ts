import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShelfModule } from './shelf/shelf.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
// using okta Guard and service
import {OktaAuthGuard} from './auth.guard';
import {AuthenticationService} from './authentication.service';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    ModalComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ShelfModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  entryComponents:[ModalComponent],
  providers: [OktaAuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
