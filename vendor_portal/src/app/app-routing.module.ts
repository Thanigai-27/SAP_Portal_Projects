import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreditComponent} from './credit/credit.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FinanceComponent} from './finance/finance.component'
import {InvoiceComponent} from './invoice/invoice.component';
import {LoginComponent} from './login/login.component';
import {PaymentComponent} from './payment/payment.component';
import {ProfileComponent} from './profile/profile.component';
import {PurchaseComponent} from './purchase/purchase.component';
import {QuotationComponent} from './quotation/quotation.component';
import {ReceiptComponent} from './receipt/receipt.component';
const routes: Routes = [
{path:'', redirectTo:'login', pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'credit', component:CreditComponent},
{path:'finance', component:FinanceComponent},
{path:'dashboard', component:DashboardComponent},
{path:'invoice', component:InvoiceComponent},
{path:'payment', component:PaymentComponent},
{path:'profile', component:ProfileComponent},
{path:'purchase', component:PurchaseComponent},
{path:'quotation', component:QuotationComponent},
{path:'receipt', component:ReceiptComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
