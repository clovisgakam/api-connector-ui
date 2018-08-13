import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ConsentComponent} from './consent/consent.component';
import {PaymentComponent} from './payment/payment.component';
import {PaymentResultComponent} from './payment-result/payment-result.component';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'consent/:id/confirm', component: ConsentComponent},
  {path: 'consent/:id/tan', component: PaymentComponent},
  {path: 'consent/:id/result', component: PaymentResultComponent},
]
@NgModule({
  exports: [ RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
