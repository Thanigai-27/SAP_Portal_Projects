import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  header = ["CUSTOMER NO","NAME","ADDRESS","CITY","PINCODE","COUNTRY"];
  constructor(private router :Router , private http: HttpClient) { }
  custprofile:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/custprofile","").subscribe(resp=>{
      this.custprofile = resp;
      console.log(this.custprofile);
  })
  }
}
