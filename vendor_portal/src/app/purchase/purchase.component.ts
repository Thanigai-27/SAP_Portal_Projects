import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  header = ["ORDER NO","COMPANY CODE","VENDOR NAME","RATE","CURRENCY"];
  constructor(private router:Router,private http :HttpClient) { }

  ven:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/vppurchase","").subscribe(resp=>{
      this.ven = resp;
      console.log(this.ven);
  })
  }

}
