import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup
  check:any;
  venprofile:any;

  
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }
  
  onLogin(formValues: { id:any;password:any }){
  //  this.check=this.loginForm;
  //  this.check.id
  console.log(formValues.id);
    this.http.post('http://localhost:3030/vplogin?id='+formValues.id+'&password='+formValues.password,"").subscribe(resp=>{
      this.venprofile = resp;
      console.log(this.venprofile['Envelope']['Body']['ZFM_VEN_LOGIN_T.Response']['RETURN']);
     if(this.venprofile['Envelope']['Body']['ZFM_VEN_LOGIN_T.Response']['RETURN'] === "SUCCESS"){
      console.log(this.venprofile);
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
