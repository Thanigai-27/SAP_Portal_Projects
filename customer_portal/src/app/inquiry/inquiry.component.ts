import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {
  header = ["CUST NO","DOCUMENT NO","DATE","DOC DATE","CURRENCY"];
  constructor(private router:Router,private http :HttpClient) { }

  cust:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/custinquiry","").subscribe(resp=>{
      this.cust = resp;
      console.log(this.cust);
  })
  }

}
