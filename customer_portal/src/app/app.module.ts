import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from 
    '@angular/platform-browser/animations';
import Swal from 'sweetalert2';
import { ProfileComponent } from './profile/profile.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { SaleOrderComponent } from './sale-order/sale-order.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FinancialComponent } from './financial/financial.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentsComponent } from './payments/payments.component';
import { MemoComponent } from './memo/memo.component';
import { TsalesComponent } from './tsales/tsales.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    InquiryComponent,
    SaleOrderComponent,
    DeliveryComponent,
    FinancialComponent,
    InvoiceComponent,
    PaymentsComponent,
    MemoComponent,
    TsalesComponent
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
    BrowserAnimationsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
