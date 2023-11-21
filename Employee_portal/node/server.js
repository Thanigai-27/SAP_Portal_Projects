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

app.post("/emplogin",function(req,res){
  data=req.query.id;
  pass=req.query.password
  console.log(data);
 
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VP_THANIGAI&receiverParty=&receiverService=&interface=SI_EMP_TH_LOGIN&interfaceNamespace=http://EMP_THANIGAI.com',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDQwMTAzNDYFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNDAxMDM0NjQ3WjAjBgkqhkiG9w0BCQQxFgQU12JZqwI7oTxVpcooYFIbqyZ8HdEwCQYHKoZIzjgEAwQwMC4CFQDlfl%2FDp4fjQ7CMBKSa1tG94v0xpQIVAMNJl2zcxXXv2EW4KfN06yMIbiVH; JSESSIONID=SujRDCU8j8ErsUCQ71qpyEaVwuw6hwF-Y2kA_SAPPKy6lS5-8nq8DVyWd4sUb17D; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_EMP_LOGIN_T>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <EMP_ID>'+data+'</EMP_ID>\r\n         <PASSWORD>'+pass+'</PASSWORD>\r\n      </urn:ZFM_EMP_LOGIN_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  }; 
    
  request(options, function (error, response) {
    if (error) throw new Error(error);
    var data=new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);

  })     
});
app.post("/empleave",function(req,res){
 
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VP_THANIGAI&receiverParty=&receiverService=&interface=SI_EMP_TH_LEAVE&interfaceNamespace=http://EMP_THANIGAI.com',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDQwMTAzNDYFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNDAxMDM0NjQ3WjAjBgkqhkiG9w0BCQQxFgQU12JZqwI7oTxVpcooYFIbqyZ8HdEwCQYHKoZIzjgEAwQwMC4CFQDlfl%2FDp4fjQ7CMBKSa1tG94v0xpQIVAMNJl2zcxXXv2EW4KfN06yMIbiVH; JSESSIONID=SujRDCU8j8ErsUCQ71qpyEaVwuw6hwF-Y2kA_SAPPKy6lS5-8nq8DVyWd4sUb17D; JSESSIONMARKID=6HxdAwDmy5RQ4iXfcpRm8ZrNqYlZQp0rGkbn5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_EMP_LEAVE_T>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <EMP_ID>'+data+'</EMP_ID>\r\n         <!--Optional:-->\r\n         <LEAVE_RES>\r\n            \r\n         </LEAVE_RES>\r\n      </urn:ZFM_EMP_LEAVE_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };
  
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});

app.post("/empprofile",function(req,res){
  
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VP_THANIGAI&receiverParty=&receiverService=&interface=SI_EMP_TH_PROFILE&interfaceNamespace=http://EMP_THANIGAI.com',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDUwNTA0NDAFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNTA1MDQ0MDM3WjAjBgkqhkiG9w0BCQQxFgQUpGf!OQBXhElyMa3gxr7cafY8QogwCQYHKoZIzjgEAwQwMC4CFQCMGt3SJ2pjjq3OV1WL4iRlz0k!2gIVAJVmDlHGqSm%2FNWKWNIF3AoLgBnWz; JSESSIONID=BK9Xo2j1zFhaEknZohA-tw7_QjbqhwF-Y2kA_SAPaj-F9VqEoP6vmDm3-GcnSh4q; JSESSIONMARKID=eON3VA0MN8aPzH4WrPi6UE187DSQhXQx_34H5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_EMP_PROFILE_T>\r\n         <EMP_ID>'+data+'</EMP_ID>\r\n      </urn:ZFM_EMP_PROFILE_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };
  
  
  
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});

app.post("/emppay",function(req,res){
  
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VP_THANIGAI&receiverParty=&receiverService=&interface=SI_EMP_TH_PAY&interfaceNamespace=http://EMP_THANIGAI.com',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDUyMjA2MTMFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNTIyMDYxMzUwWjAjBgkqhkiG9w0BCQQxFgQUSfv6G4Nn6JccTkVdSJDNV8uC9AUwCQYHKoZIzjgEAwQvMC0CFCsyi554%2FvNk%2FXLGJhKe2PvaETDlAhUAlJpjBPArvcnidAZlIqTYP!ep3xc%3D; JSESSIONID=pF5aX7Mf9Uz3ed5vsN0CCmjkCRxCiAF-Y2kA_SAPJZktzoZhJAc6sWghxxOSAiA7; JSESSIONMARKID=RN_m9QIQxc6ZHmpt_U67z0ctHyKmlq7h5KMH5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_EMP_PAY_T>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <ZEMP_ID>8</ZEMP_ID>\r\n         <ZPAYSLIP_DETAILS>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </ZPAYSLIP_DETAILS>\r\n      </urn:ZFM_EMP_PAY_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };
  
   
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data=new xml();
  var xmljs = data.xml2js(response.body);
  xmljs = JSON.stringify(xmljs)
  res.send(xmljs);

})     
});


app.post("/emppay_form",function(req,res){
  
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VP_THANIGAI&receiverParty=&receiverService=&interface=SI_EMP_TH_PAY_FORM&interfaceNamespace=http://EMP_THANIGAI.com',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDUyMjA2MTMFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNTIyMDYxMzUwWjAjBgkqhkiG9w0BCQQxFgQUSfv6G4Nn6JccTkVdSJDNV8uC9AUwCQYHKoZIzjgEAwQvMC0CFCsyi554%2FvNk%2FXLGJhKe2PvaETDlAhUAlJpjBPArvcnidAZlIqTYP!ep3xc%3D; JSESSIONID=pF5aX7Mf9Uz3ed5vsN0CCmjkCRxCiAF-Y2kA_SAPJZktzoZhJAc6sWghxxOSAiA7; JSESSIONMARKID=RN_m9QIQxc6ZHmpt_U67z0ctHyKmlq7h5KMH5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_EMP_PAY_FORM_T>\r\n         <ZEMP_ID>8</ZEMP_ID>\r\n      </urn:ZFM_EMP_PAY_FORM_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
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

