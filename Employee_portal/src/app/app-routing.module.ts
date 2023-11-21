import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LeaveComponent} from './leave/leave.component';
import {PayslipComponent} from './payslip/payslip.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent},
  {path:'leave',component:LeaveComponent},
  {path:'payslip',component:PayslipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
