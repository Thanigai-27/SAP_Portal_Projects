import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  header = ["COMPANY CODE","DATE","DOCUMENT","FISCAL YEAR","AMOUNT","CURRENCY"];
  constructor(private router:Router,private http :HttpClient) { }

  ven:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/vppayment","").subscribe(resp=>{
      this.ven = resp;
      console.log(this.ven);
  })
  }
}
