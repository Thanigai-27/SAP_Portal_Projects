import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tsales',
  templateUrl: './tsales.component.html',
  styleUrls: ['./tsales.component.css']
})
export class TsalesComponent implements OnInit {
  header = ["DOC NO","NET VALUE","CURRENCY VALUE","DATE","LOCATION"];
  constructor(private router:Router,private http :HttpClient) { }

  cust:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/custsales","").subscribe(resp=>{
      this.cust = resp;
      console.log(this.cust);
  })
  }
}
