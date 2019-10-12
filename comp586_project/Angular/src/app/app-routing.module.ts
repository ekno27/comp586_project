import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ShelfComponent} from './shelf/shelf.component';
import {ModalComponent} from './modal/modal.component';

import {AppComponent} from './app.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'shelf', 
    component: ShelfComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'modal',
    component: ModalComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
