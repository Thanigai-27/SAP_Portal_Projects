import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {
  header = ["ID","NAME","PAY GROUP","WORK HOURS","MONTHLY WAGE","ANNUAL SALARY"];
  constructor(private router:Router,private http :HttpClient) { }

  emp:any;
  pdf:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/emppay","").subscribe(resp=>{
      this.emp = resp;
      console.log(this.emp);
  })
  }
  downloadPDF() {
    this.http.post("http://localhost:3030/emppay_form", "").subscribe(resp=> {
    this.pdf = resp;
    console.log(this.pdf);
    const linkSource = `data:application/pdf;base64,${this.pdf['Envelope']['Body']['ZFM_EMP_PAY_FORM_T.Response']['ZPDF']}`;
    const downloadLink = document.createElement('a');
    const fileName = "Payslip.pdf";
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  })
  }

}
