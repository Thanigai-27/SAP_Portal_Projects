import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  header = ["DOC NO","FISCAL YEAR","DOC DATE","COMPANY CODE","GROSS AMOUNT","CURRENCY"];
  constructor(private router:Router,private http :HttpClient) { }

  ven:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/vpreceipt","").subscribe(resp=>{
      this.ven = resp;
      console.log(this.ven);
  })
  }


}
