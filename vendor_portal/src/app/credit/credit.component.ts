import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  header = ["VENDOR NO","MATERIAL NO","PLANT GROUP","UNIT","DOC NO","FISCAL"];
  constructor(private router:Router,private http :HttpClient) { }

  ven:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/vpcredit","").subscribe(resp=>{
      this.ven = resp;
      console.log(this.ven);
  })
  }
}
