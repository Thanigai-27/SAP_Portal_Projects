import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  header = ["COMPANY CODE","DOC NO.","YEAR","AMOUNT","CURRENCY"];
  constructor(private router:Router,private http :HttpClient) { }

  ven:any;
  pdf:any;
  

  ngOnInit(): void {
    this.http.post("http://localhost:3030/vpinvoice","").subscribe(resp=>{
      this.ven = resp;
      console.log(this.ven);
  })
  }
  downloadPDF() {
    this.http.post("http://localhost:3030/vpinvoice_form", "").subscribe(resp=> {
    this.pdf = resp;
    console.log(this.pdf);
    const linkSource = `data:application/pdf;base64,${this.pdf['Envelope']['Body']['ZFM_VEN_INVOICE_FORM_T.Response']['RESULT']}`;
    const downloadLink = document.createElement('a');
    const fileName = "invoice.pdf";
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  })
  }
  }