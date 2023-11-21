import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  header = ["NUMBER","CREATED ON","CREATED BY","VENDOR","ITEM"];
  constructor(private router:Router,private http :HttpClient) { }

  ven:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/vpquotation","").subscribe(resp=>{
      this.ven = resp;
      console.log(this.ven);
  })
  }

}
