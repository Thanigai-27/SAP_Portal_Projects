import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sale-order',
  templateUrl: './sale-order.component.html',
  styleUrls: ['./sale-order.component.css']
})
export class SaleOrderComponent implements OnInit {

  header = ["DOC NO","NET VALUE","CURRENCY VALUES","DATE","LOCATION"];
  constructor(private router:Router,private http :HttpClient) { }

  cust:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/custsales","").subscribe(resp=>{
      this.cust = resp;
      console.log(this.cust);
  })
  }

}
