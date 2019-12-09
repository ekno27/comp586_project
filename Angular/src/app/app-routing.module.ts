import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ShelfComponent} from './shelf/shelf.component';
import {AppComponent} from './app.component'
import { CallbackComponent } from './callback/callback.component';
import { OktaAuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'shelf', 
    component: ShelfComponent,
    canActivate: [OktaAuthGuard]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'callback',
    component: CallbackComponent,
  },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
