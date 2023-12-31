import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  header = ["ID","NAME","DOB","START DATE","ADDRESS","PINCODE"];
  constructor(private router :Router , private http: HttpClient) { }
  empprofile:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/empprofile","").subscribe(resp=>{
      this.empprofile = resp;
      console.log(this.empprofile);
  })
  }
}
