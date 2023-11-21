import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  header = ["SD DOC NO","TOTAL WEIGHT(KG)","TIME","COMPANY"];
  constructor(private router:Router,private http :HttpClient) { }

  custdelivery:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/custdelivery","").subscribe(resp=>{
      this.custdelivery = resp;
      console.log(this.custdelivery);
  })
  }

}
