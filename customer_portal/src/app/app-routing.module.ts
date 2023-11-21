import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component'
import { RegisterComponent } from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {SaleOrderComponent} from './sale-order/sale-order.component';
import {DeliveryComponent} from './delivery/delivery.component';
import {FinancialComponent} from './financial/financial.component';
import {InquiryComponent} from './inquiry/inquiry.component';
import {InvoiceComponent} from './invoice/invoice.component';
import{MemoComponent} from './memo/memo.component';
import {PaymentsComponent} from './payments/payments.component'; 
import {TsalesComponent} from './tsales/tsales.component'
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent},
  {path:'salesorder',component:SaleOrderComponent},
  {path:'delivery',component:DeliveryComponent},
  {path:'financial',component:FinancialComponent},
  {path:'inquiry',component:InquiryComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'memo',component:MemoComponent},
  {path:'payment',component:PaymentsComponent},
  {path:'tsales',component:TsalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
