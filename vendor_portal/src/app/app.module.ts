import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuotationComponent } from './quotation/quotation.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { FinanceComponent } from './finance/finance.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CreditComponent } from './credit/credit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    QuotationComponent,
    PurchaseComponent,
    ReceiptComponent,
    FinanceComponent,
    PaymentComponent,
    InvoiceComponent,
    CreditComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
