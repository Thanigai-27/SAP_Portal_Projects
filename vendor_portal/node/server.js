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
app.post("/vplogin",function(req,res){
   data=req.query.id;
  console.log(data);
 pass=req.query.password;
    var options = {
      'method': 'POST',
      'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VP_THANIGAI&receiverParty=&receiverService=&interface=SI_VP_TH_LOGIN&interfaceNamespace=http://VP_THANIGAI.com',
      'headers': {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
        'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
        'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMyMjEzMTgFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzIyMTMxODMyWjAjBgkqhkiG9w0BCQQxFgQUCtE%2FkAtbJu!zeACeXtyjuy!iQlwwCQYHKoZIzjgEAwQwMC4CFQCz2sXyXOSqzCGqKmXdvvljrtxlAQIVAPU%2FMEtVHtvVd4eiDO3JD9vmnnq6; JSESSIONID=vMMq3Lbxo5TQqaBBeUt_mF7VnHgJhwF-Y2kA_SAP_uYyelC0LKcqcAUJ11_07Moe; saplb_*=(J2EE6906720)6906750'
      },
      body:'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_VEN_LOGIN_T>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <PASSWORD>'+pass+'</PASSWORD>\r\n         <VENDOR_ID>'+data+'</VENDOR_ID>\r\n      </urn:ZFM_VEN_LOGIN_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
    
    };
    
  request(options, function (error, response) {
    if (error) throw new Error(error);
    var data=new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);

  })     
});
app.post("/vpprofile",function(req,res){
  
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VP_THANIGAI&receiverParty=&receiverService=&interface=SI_VP_TH_PROFILE&interfaceNamespace=http://VP_THANIGAI.com',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMyMDA5MzUFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzIwMDkzNTU0WjAjBgkqhkiG9w0BCQQxFgQUb7YAl5PP84wGTcu5obg4xyyeKtUwCQYHKoZIzjgEAwQvMC0CFDdwHY8!naKSYpdkHFU0SP5Fqt8hAhUA3Tk9PcFcR4OZXCYUOFdJ2plZm8I%3D; JSESSIONID=O_1zHaH8zqcAiphNQlCMO8wWE2D-hgF-Y2kA_SAP40A-KWnHi96EuYo2k3GxTlKP; JSESSIONMARKID=gzIGEAiQe_-1kev8A2v7tZ8T8nN6e2hFiE0n5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_VEN_PROFILE_T>\r\n         <VENDOR_ID>'+data+'</VENDOR_ID>\r\n      </urn:ZFM_VEN_PROFILE_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };

  
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});

app.post("/vpcredit",function(req,res){
  
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VP_THANIGAI&receiverParty=&receiverService=&interface=SI_VP_TH_CREDEB&interfaceNamespace=http://VP_THANIGAI.com',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMyMDA5MzUFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzIwMDkzNTU0WjAjBgkqhkiG9w0BCQQxFgQUb7YAl5PP84wGTcu5obg4xyyeKtUwCQYHKoZIzjgEAwQvMC0CFDdwHY8!naKSYpdkHFU0SP5Fqt8hAhUA3Tk9PcFcR4OZXCYUOFdJ2plZm8I%3D; JSESSIONID=O_1zHaH8zqcAiphNQlCMO8wWE2D-hgF-Y2kA_SAP40A-KWnHi96EuYo2k3GxTlKP; JSESSIONMARKID=gzIGEAiQe_-1kev8A2v7tZ8T8nN6e2hFiE0n5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_VEN_CREDIT_T>\r\n         <!--You may enter the following 3 items in any order-->\r\n         <VENDOR_ID>'+data+'</VENDOR_ID>\r\n         <CREDIT>\r\n            <!--Zero or more repetitions:-->\r\n            \r\n         </CREDIT>\r\n         <DEBIT>\r\n            \r\n         </DEBIT>\r\n      </urn:ZFM_VEN_CREDIT_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };

  
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});



app.post("/vppayment",function(req,res){
  
  var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VP_THANIGAI&receiverParty=&receiverService=&interface=SI_VP_TH_PAY&interfaceNamespace=http://VP_THANIGAI.com',
  'headers': {
    'Content-Type': 'text/xml;charset=UTF-8',
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMyMDEwNTkFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzIwMTA1OTI1WjAjBgkqhkiG9w0BCQQxFgQUpKiDXRgYjDarlsBWB%2F4OyKjaepcwCQYHKoZIzjgEAwQvMC0CFFMKlsVBm%2F95jOpdl!OrHj6tYgtTAhUAmFFCzUWresQm6ns2Qmyd5wWAc6s%3D; JSESSIONID=4fK2m0-kW0_4UMXA6waCat1diqz-hgF-Y2kA_SAPqATZDYiCS2YsoaMX-w4TH00k; JSESSIONMARKID=I_24jQIbbq-vZWHyAODg0qq8qqHR7yuunw1n5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_VEN_PAY_T>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <VENDOR_ID>'+data+'</VENDOR_ID>\r\n         <!--Optional:-->\r\n         <IT_PAYINV>\r\n           \r\n         </IT_PAYINV>\r\n      </urn:ZFM_VEN_PAY_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

};
  
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});

app.post("/vpinvoice",function(req,res){
  
  var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VP_THANIGAI&receiverParty=&receiverService=&interface=SI_VP_TH_PAY&interfaceNamespace=http://VP_THANIGAI.com',
  'headers': {
    'Content-Type': 'text/xml;charset=UTF-8',
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMyMDEwNTkFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzIwMTA1OTI1WjAjBgkqhkiG9w0BCQQxFgQUpKiDXRgYjDarlsBWB%2F4OyKjaepcwCQYHKoZIzjgEAwQvMC0CFFMKlsVBm%2F95jOpdl!OrHj6tYgtTAhUAmFFCzUWresQm6ns2Qmyd5wWAc6s%3D; JSESSIONID=4fK2m0-kW0_4UMXA6waCat1diqz-hgF-Y2kA_SAPqATZDYiCS2YsoaMX-w4TH00k; JSESSIONMARKID=I_24jQIbbq-vZWHyAODg0qq8qqHR7yuunw1n5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_VEN_PAY_T>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <VENDOR_ID>'+data+'</VENDOR_ID>\r\n         <!--Optional:-->\r\n         <IT_PAYINV>\r\n           \r\n         </IT_PAYINV>\r\n      </urn:ZFM_VEN_PAY_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

};
  
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});

app.post("/vppurchase",function(req,res){
  
  var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VP_THANIGAI&receiverParty=&receiverService=&interface=SI_VP_TH_PURCHASE&interfaceNamespace=http://VP_THANIGAI.com',
  'headers': {
    'Content-Type': 'text/xml;charset=UTF-8',
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMyMDEwNTkFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzIwMTA1OTI1WjAjBgkqhkiG9w0BCQQxFgQUpKiDXRgYjDarlsBWB%2F4OyKjaepcwCQYHKoZIzjgEAwQvMC0CFFMKlsVBm%2F95jOpdl!OrHj6tYgtTAhUAmFFCzUWresQm6ns2Qmyd5wWAc6s%3D; JSESSIONID=4fK2m0-kW0_4UMXA6waCat1diqz-hgF-Y2kA_SAPqATZDYiCS2YsoaMX-w4TH00k; JSESSIONMARKID=5sf05gN1YCL0W-DpGdg02OVJJBv9illfdV135jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_VEN_PURCHASE_T>\r\n         <!--You may enter the following 3 items in any order-->\r\n         <VENDOR_ACC>'+data+'</VENDOR_ACC>\r\n         <!--Optional:-->\r\n         <IT_PURCHASE_HEAD>\r\n         \r\n         </IT_PURCHASE_HEAD>\r\n         <!--Optional:-->\r\n         <IT_PURCHASE_VALUES>\r\n         \r\n         </IT_PURCHASE_VALUES>\r\n      </urn:ZFM_VEN_PURCHASE_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});
app.post("/vpquotation",function(req,res){
  
  var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VP_THANIGAI&receiverParty=&receiverService=&interface=SI_VP_TH_QUOTATION&interfaceNamespace=http://VP_THANIGAI.com',
  'headers': {
    'Content-Type': 'text/xml;charset=UTF-8',
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMyMDEwNTkFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzIwMTA1OTI1WjAjBgkqhkiG9w0BCQQxFgQUpKiDXRgYjDarlsBWB%2F4OyKjaepcwCQYHKoZIzjgEAwQvMC0CFFMKlsVBm%2F95jOpdl!OrHj6tYgtTAhUAmFFCzUWresQm6ns2Qmyd5wWAc6s%3D; JSESSIONID=4fK2m0-kW0_4UMXA6waCat1diqz-hgF-Y2kA_SAPqATZDYiCS2YsoaMX-w4TH00k; JSESSIONMARKID=5sf05gN1YCL0W-DpGdg02OVJJBv9illfdV135jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_VEN_QUOTATION_T>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <VENDOR_ACC>'+data+'</VENDOR_ACC>\r\n         <IT_RFQ_LIST>\r\n            <!--Zero or more repetitions:-->\r\n           \r\n         </IT_RFQ_LIST>\r\n      </urn:ZFM_VEN_QUOTATION_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});


app.post("/vpreceipt",function(req,res){
  
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VP_THANIGAI&receiverParty=&receiverService=&interface=SI_VP_TH_RECEIPT&interfaceNamespace=http://VP_THANIGAI.com',
  'headers': {
    'Content-Type': 'text/xml;charset=UTF-8',
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMyMDEwNTkFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzIwMTA1OTI1WjAjBgkqhkiG9w0BCQQxFgQUpKiDXRgYjDarlsBWB%2F4OyKjaepcwCQYHKoZIzjgEAwQvMC0CFFMKlsVBm%2F95jOpdl!OrHj6tYgtTAhUAmFFCzUWresQm6ns2Qmyd5wWAc6s%3D; JSESSIONID=4fK2m0-kW0_4UMXA6waCat1diqz-hgF-Y2kA_SAPqATZDYiCS2YsoaMX-w4TH00k; JSESSIONMARKID=5sf05gN1YCL0W-DpGdg02OVJJBv9illfdV135jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_VEN_RECEIPT_T>\r\n         <!--You may enter the following 3 items in any order-->\r\n         <VENDOR_ID>'+data+'</VENDOR_ID>\r\n         <HEADER_RESULT>\r\n            \r\n         </HEADER_RESULT>\r\n         <RETURN>\r\n            <!--Zero or more repetitions:-->\r\n            \r\n         </RETURN>\r\n      </urn:ZFM_VEN_RECEIPT_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

};
  
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});

app.post("/vpinvoice_form",function(req,res){
  
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VP_THANIGAI&receiverParty=&receiverService=&interface=SI_VP_TH_INVOICE_FORM&interfaceNamespace=http://VP_THANIGAI.com',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMyMTA0NTEFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzIxMDQ1MTA4WjAjBgkqhkiG9w0BCQQxFgQUDh4HC8dEbf3Xf49v5YjoAjFpz1EwCQYHKoZIzjgEAwQwMC4CFQCJAE0NHfmi8S!HAG00eFVGssleAAIVALRSFyCIJn4ZLVO3fuXG5qZq5MIm; JSESSIONID=7xarUIFQcaN11pk5pB-UeDHYuYEChwF-Y2kA_SAPDpUvR8rwZH4x7PrOx07aozXH; JSESSIONMARKID=CaGN8gmBuwDwIKhi6sXBV-hZiX8iJ1ep1sEX5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_VEN_INVOICE_FORM_T>\r\n         <VEN_ID>'+data+'</VEN_ID>\r\n      </urn:ZFM_VEN_INVOICE_FORM_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
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
