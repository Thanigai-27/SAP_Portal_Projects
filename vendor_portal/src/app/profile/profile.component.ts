import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  header = ["NAME","ADDRESS","CITY","PINCODE","COUNTRY"];
  constructor(private router:Router,private http :HttpClient) { }

  ven:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/vpprofile","").subscribe(resp=>{
      this.ven = resp;
      console.log(this.ven);
  })
  }
}
