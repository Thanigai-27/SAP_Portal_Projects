process.env['NODE_TLS_REJECT_UNAUTHORIZED']=0;
const express = require("express");
const fs = require('fs');
var cors = require('cors');
const bodyparser = require("body-parser");
const app=express();
var request = require("request");
const{response} = require('express')
const parser = require('xml2js')
const xml = require('x2js')

app.use(bodyparser.json());
app.use(cors());
app.use(function(req,res,next){
    res.getHeader("Access-Control-Allow-Original","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();
})
var data;
var pass;
app.post("/custlogin",function(req,res){
  data=req.query.id;
  pass=req.query.password;
  console.log(data);
 
  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zes_cust_login_t/100/zes_cust_login_t/zes_cust_login_t',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'urn:sap-com:document:sap:rfc:functions:ZES_CUST_SALES_T:ZFM_SALES_TRequest',
      'Authorization': 'Basic QWJhcGVyMTpBYmFwZXJAMTIz',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_LOGIN_T>\r\n         <CUST_ID>'+data+'</CUST_ID>\r\n         <CUST_PASS>'+pass+'</CUST_PASS>\r\n      </urn:ZFM_LOGIN_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };
   
    
  request(options, function (error, response) {
    if (error) throw new Error(error);
    var data=new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);

  })     
});
app.post("/custprofile",function(req,res){
  
  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zes_cust_profile_t/100/zes_cust_profile_t/zes_cust_profile_t',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'urn:sap-com:document:sap:rfc:functions:ZES_CUST_PROFILE_T:ZFM_PROFILE_TRequest',
      'Authorization': 'Basic QWJhcGVyMTpBYmFwZXJAMTIz',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_PROFILE_T>\r\n         <!--Optional:-->\r\n         <IT_KNA1>\r\n            <!--Zero or more repetitions:-->\r\n\r\n         </IT_KNA1>\r\n         <ZCUS_ID>'+data+'</ZCUS_ID>\r\n      </urn:ZFM_PROFILE_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };

  
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});

app.post("/custdelivery",function(req,res){
  
  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zes_cust_delivery_t/100/zes_cust_delivery_t/zes_cust_delivery_t',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'urn:sap-com:document:sap:rfc:functions:ZES_CUST_DELIVERY_T:ZFM_DELIVERY_TRequest',
      'Authorization': 'Basic QWJhcGVyMTpBYmFwZXJAMTIz',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_DELIVERY_T>\r\n         <CUST_ID>'+data+'</CUST_ID>\r\n         <IT_DELIVERY_INFO>\r\n            <!--Zero or more repetitions:-->\r\n           \r\n         </IT_DELIVERY_INFO>\r\n      </urn:ZFM_DELIVERY_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };

  
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});

app.post("/custinquiry",function(req,res){
  
  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zes_cust_inquiry_t/100/zes_cust_inquiry_t/zes_cust_inquiry_t',
    'headers': {
      'Content-Type': ' text/xml;charset=UTF-8',
      'SOAPAction': 'urn:sap-com:document:sap:rfc:functions:ZES_CUST_INQUIRY_T:ZFM_INQUIRY_TRequest',
      'Authorization': 'Basic QWJhcGVyMTpBYmFwZXJAMTIz',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_INQUIRY_T>\r\n         <IT_INQUIRY>\r\n         </IT_INQUIRY>\r\n         <ZCUS_ID>'+data+'</ZCUS_ID>\r\n      </urn:ZFM_INQUIRY_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };

  
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});


app.post("/custinvoice",function(req,res){
  
  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zes_cust_invoice_t/100/zes_cust_invoice_t/zes_cust_invoice_t',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'SOAPAction': 'urn:sap-com:document:sap:rfc:functions:ZES_CUST_INVOICE_T:ZFM_INVOICE_TRequest',
      'Authorization': 'Basic QWJhcGVyMTpBYmFwZXJAMTIz',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_INVOICE_T>\r\n         <CUST_ID>'+data+'</CUST_ID>\r\n         <IT_INVOICE>\r\n            <!--Zero or more repetitions:-->\r\n            \r\n         </IT_INVOICE>\r\n      </urn:ZFM_INVOICE_T>\r\n   </soap:Body>\r\n</soap:Envelope>'
  
  };
  
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});
app.post("/custpayment",function(req,res){

  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zes_cust_pd_t/100/zes_cust_pd_t/zes_cust_pd_t',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'urn:sap-com:document:sap:rfc:functions:ZES_CUST_PD_T:ZFM_PAYDETAIL_TRequest',
      'Authorization': 'Basic QWJhcGVyMTpBYmFwZXJAMTIz',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_PAYDETAIL_T>\r\n         <IT_DET>\r\n            <!--Zero or more repetitions:-->\r\n            \r\n         </IT_DET>\r\n         <ZCUS_ID>3</ZCUS_ID>\r\n      </urn:ZFM_PAYDETAIL_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});
app.post("/custsales",function(req,res){
  
  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zes_cust_sales_t/100/zes_cust_sales_t/zes_cust_sales_t',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'urn:sap-com:document:sap:rfc:functions:ZES_CUST_SALES_T:ZFM_SALES_TRequest',
      'Authorization': 'Basic QWJhcGVyMTpBYmFwZXJAMTIz',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_SALES_T>\r\n         <CUST_ID>'+data+'</CUST_ID>\r\n         <IT_INVOICE>\r\n           \r\n         </IT_INVOICE>\r\n      </urn:ZFM_SALES_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});


app.post("/custcredit",function(req,res){
  
  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zes_cust_credit_t/100/zes_cust_credit_t/zes_cust_credit_t',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'urn:sap-com:document:sap:rfc:functions:ZES_CUST_CREDIT_T:ZFM_CREDIT_TRequest',
      'Authorization': 'Basic QWJhcGVyMTpBYmFwZXJAMTIz',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_CREDIT_T>\r\n         <IT_CREDIT>\r\n            <!--Zero or more repetitions:-->\r\n            \r\n         </IT_CREDIT>\r\n         <IT_DEBIT>\r\n            \r\n         </IT_DEBIT>\r\n         <ZCUS_ID>'+data+'</ZCUS_ID>\r\n      </urn:ZFM_CREDIT_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };
  
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});

app.post("/custinvoice_form",function(req,res){
  
  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zes_cust_invoice_form_t/100/zes_cust_invoice_form_t/zes_cust_invoice_form_t',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'urn:sap-com:document:sap:rfc:functions:ZES_CUST_PD_T:ZFM_PAYDETAIL_TRequest',
      'Authorization': 'Basic QWJhcGVyMTpBYmFwZXJAMTIz',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMyMTA0NTEFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzIxMDQ1MTA4WjAjBgkqhkiG9w0BCQQxFgQUDh4HC8dEbf3Xf49v5YjoAjFpz1EwCQYHKoZIzjgEAwQwMC4CFQCJAE0NHfmi8S!HAG00eFVGssleAAIVALRSFyCIJn4ZLVO3fuXG5qZq5MIm; sap-usercontext=sap-client=100'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_INVOICE_FORM_T>\r\n         <ZCUS_ID>'+data+'</ZCUS_ID>\r\n      </urn:ZFM_INVOICE_FORM_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };
  
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});



app.listen(3030,()=>{
    console.log("Server listening on 3030");
});




