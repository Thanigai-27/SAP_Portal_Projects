import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  header = ["COMPANY CODE","DATE","FISCAL YEAR","AMOUNT","CURRENCY"];
  constructor(private router:Router,private http :HttpClient) { }

  cust:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/custpayment","").subscribe(resp=>{
      this.cust = resp;
      console.log(this.cust);
  })
  }

}
