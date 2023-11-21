import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   public loginForm !: FormGroup
  cust:any;
  private baseUrl = '';
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  onLogin(formValues:{id:any,password:any}){
    console.log(formValues.id);
    this.http.post('http://localhost:3030/emplogin?id='+formValues.id+'&password='+formValues.password,"").subscribe(resp=>{
      this.cust = resp;
     if(this.cust['Envelope']['Body']['ZFM_EMP_LOGIN_T.Response']['MESSAGE'] === "SUCCESS"){
      console.log(this.cust);
      this.profile();
     }
     else{
      Swal.fire("User not found !!")
     }
  })
}
profile(){
  Swal.fire("Login successfull !!");
  this.loginForm.reset();
  this.router.navigate(['/dashboard']);}


}
