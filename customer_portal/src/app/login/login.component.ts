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
    this.http.post('http://localhost:3030/custlogin?id='+formValues.id+'&password='+formValues.password,"").subscribe(resp=>{
      this.cust = resp;
     if(this.cust['Envelope']['Body']['ZFM_LOGIN_TResponse']['RETURN'] === "Success"){
      console.log(this.cust);
      this.profile();
     }
     else{
      Swal.fire("User not found");
      console.log("User not found");
     }
  })
}
profile(){
  Swal.fire("Login successfull !!");
  this.router.navigate(['/dashboard']);}

}
