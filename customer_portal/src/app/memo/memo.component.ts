import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {
  header = ["AMOUNT","CURRENCY","YEAR"];
  constructor(private router:Router,private http :HttpClient) { }

  cust:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/custcredit","").subscribe(resp=>{
      this.cust = resp;
      console.log(this.cust);
  })
  }

}
