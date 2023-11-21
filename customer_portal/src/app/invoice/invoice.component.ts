import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  header = ["COMPANY CODE","DATE","NET VALUE","LOCATION","COUNTRY"];
  constructor(private router:Router,private http :HttpClient) { }
  cust:any;
  pdf:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/custinvoice","").subscribe(resp=>{
      this.cust = resp;
      console.log(this.cust);
  })
  }
  downloadPDF() {
    this.http.post("http://localhost:3030/custinvoice_form", "").subscribe(resp=> {
    this.pdf = resp;
    console.log(this.pdf);
    const linkSource = `data:application/pdf;base64,${this.pdf['Envelope']['Body']['ZFM_INVOICE_FORM_TResponse']['IT_RESULT']}`;
    const downloadLink = document.createElement('a');
    const fileName = "Invoice.pdf";
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  })
  }

 }
