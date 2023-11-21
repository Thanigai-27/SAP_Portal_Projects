// app.post("/emplogin",function(req,res){
//   data=req.query.id;
//   pass=req.query.password
//   console.log(data);
 
//   var options = {
//     'method': 'POST',
//     'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VP_THANIGAI&receiverParty=&receiverService=&interface=SI_EMP_TH_LOGIN&interfaceNamespace=http://EMP_THANIGAI.com',
//     'headers': {
//       'Content-Type': 'text/xml;charset=UTF-8',
//       'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
//       'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
//       'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDQwMTAzNDYFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNDAxMDM0NjQ3WjAjBgkqhkiG9w0BCQQxFgQU12JZqwI7oTxVpcooYFIbqyZ8HdEwCQYHKoZIzjgEAwQwMC4CFQDlfl%2FDp4fjQ7CMBKSa1tG94v0xpQIVAMNJl2zcxXXv2EW4KfN06yMIbiVH; JSESSIONID=SujRDCU8j8ErsUCQ71qpyEaVwuw6hwF-Y2kA_SAPPKy6lS5-8nq8DVyWd4sUb17D; saplb_*=(J2EE6906720)6906750'
//     },
//     body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_EMP_LOGIN_T>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <EMP_ID>'+data+'</EMP_ID>\r\n         <PASSWORD>'+pass+'</PASSWORD>\r\n      </urn:ZFM_EMP_LOGIN_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
//   }; 
    
//   request(options, function (error, response) {
//     if (error) throw new Error(error);
//     var data=new xml();
//     var xmljs = data.xml2js(response.body);
//     xmljs = JSON.stringify(xmljs)
//     res.send(xmljs);

//   })     
// });
// app.post("/mpwork",function(req,res){
//     var options = {
//         'method': 'POST',
//         'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zes_mp_work_ord_t/100/zes_mp_work_ord_t/zes_mp_work_ord_t',
//         'headers': {
//           'Content-Type': 'text/xml;charset=UTF-8',
//           'SOAPAction': 'urn:sap-com:document:sap:rfc:functions:ZES_MP_WORK_ORD_T:ZFM_MP_WORK_ORD_TRequest',
//           'Authorization': 'Basic QWJhcGVyMTpBYmFwZXJAMTIz',
//           'Cookie': 'sap-usercontext=sap-client=100'
//         },
//         body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_MP_WORK_ORD_T>\r\n         <!--Optional:-->\r\n         <RETURN>\r\n            \r\n         </RETURN>\r\n         <!--Optional:-->\r\n         <WO_LIST>\r\n            <!--Zero or more repetitions:-->\r\n            \r\n         </WO_LIST>\r\n         <ZPLANNER_GROUP>010</ZPLANNER_GROUP>\r\n         <ZPLANNING_PLANT>0001</ZPLANNING_PLANT>\r\n      </urn:ZFM_MP_WORK_ORD_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
      
//       };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   var data=new xml();
//   var xmljs = data.xml2js(response.body);
//   xmljs = JSON.stringify(xmljs)
//   res.send(xmljs);

// })     
// });

// app.post("/mpnotifi",function(req,res){
  
//   var options = {
//     'method': 'POST',
//     'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zes_mp_notification_t/100/zes_mp_notification_t/zes_mp_notification_t',
//     'headers': {
//       'Content-Type': 'text/xml;charset=UTF-8',
//       'SOAPAction': 'urn:sap-com:document:sap:rfc:functions:ZES_MP_NOTIFICATION_T:ZFM_MP_NOTIFICATION_TRequest',
//       'Authorization': 'Basic QWJhcGVyMTpBYmFwZXJAMTIz',
//       'Cookie': 'sap-usercontext=sap-client=100'
//     },
//     body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_MP_NOTIFICATION_T>\r\n         <!--Optional:-->\r\n         <NOTIFI_DATE>2023-03-16</NOTIFI_DATE>\r\n         <!--Optional:-->\r\n         <NOTIFI_LIST>\r\n            \r\n         </NOTIFI_LIST>\r\n         <!--Optional:-->\r\n         <PLANT>0001</PLANT>\r\n         <!--Optional:-->\r\n         <PLANT_GROUP>010</PLANT_GROUP>\r\n      </urn:ZFM_MP_NOTIFICATION_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
//   };
    
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   var data=new xml();
//   var xmljs = data.xml2js(response.body);
//   xmljs = JSON.stringify(xmljs)
//   res.send(xmljs);

// })     
// });

process.env['NODE_TLS_REJECT_UNAUTHORIZED']=0;
const express = require("express");
const fs = require('fs');
const bodyParser = require("body-parser");
const convert = require('xml-js');
const { response } = require("express");
var cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.all("/*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-?Length, X-Requested-With');
  next();
});


app.post("/login",(req,res)=>{
  console.log(req.body)
  var USERNAME = req.query.givenUserId;
  var PASSWORD = req.body.givenUserPassword;
  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VP_THANIGAI&receiverParty=&receiverService=&interface=SI_MP_TH_LOGIN&interfaceNamespace=http://MP_THANIGAI.com',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDUyMjEwNDYFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNTIyMTA0NjMzWjAjBgkqhkiG9w0BCQQxFgQU38shraeUF1D1UgpTTwykRmC%2FItIwCQYHKoZIzjgEAwQvMC0CFQDSipZxNiT0EImRFJC2z4AmVB1GBwIURJCDE5ECrU06rh%2FVfXZZrG5EJps%3D; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_MP_LOGIN_T>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <PASSWORD>'+PASSWORD+'</PASSWORD>\r\n         <USER_ID>'+USERNAME+'</USER_ID>\r\n      </urn:ZFM_MP_LOGIN_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };
  
  request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
    
    var result1 = convert.xml2json(response.body, {compact: true,spaces: 4});
  const result2 = JSON.parse(result1);
  console.log(JSON.parse(result1));
  console.log(
    result2['soap-env:Envelope']['soap-env:Body']['ns0:ZFM_MP_LOGIN_T.Response']['RETURN']);
  res.json({
    status1:
    result2['soap-env:Envelope']['soap-env:Body']['ns0:ZFM_MP_LOGIN_T.Response']['RETURN']
       });
       });
       });
  
  app.post("/mpnotifi",(req,res)=>{
    var user = req.body.user;
    console.log(req.body)
    var request = require('request');
    var options = {
          'method': 'POST',
          'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zes_mp_notification_t/100/zes_mp_notification_t/zes_mp_notification_t',
          'headers': {
            'Content-Type': 'text/xml;charset=UTF-8',
            'SOAPAction': 'urn:sap-com:document:sap:rfc:functions:ZES_MP_NOTIFICATION_T:ZFM_MP_NOTIFICATION_TRequest',
            'Authorization': 'Basic QWJhcGVyMTpBYmFwZXJAMTIz',
            'Cookie': 'sap-usercontext=sap-client=100'
          },
          body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_MP_NOTIFICATION_T>\r\n         <!--Optional:-->\r\n         <NOTIFI_DATE>2023-03-16</NOTIFI_DATE>\r\n         <!--Optional:-->\r\n         <NOTIFI_LIST>\r\n            \r\n         </NOTIFI_LIST>\r\n         <!--Optional:-->\r\n         <PLANT>0001</PLANT>\r\n         <!--Optional:-->\r\n         <PLANT_GROUP>010</PLANT_GROUP>\r\n      </urn:ZFM_MP_NOTIFICATION_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
        
        };
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
    var result227 = convert.xml2json(response.body, {
      compact: true,
      spaces: 4 
     }); 
     const result3 = JSON.parse(result227);
     console.log(result3);
     console.log(result3['soap-env:Envelope']['soap-env:Body']['n0:ZFM_MP_NOTIFICATION_TResponse']['NOTIFI_LIST']['item']);
     res.json({
      data227:result3['soap-env:Envelope']['soap-env:Body']['n0:ZFM_MP_NOTIFICATION_TResponse']['NOTIFI_LIST']['item']
     });
     });
     });
    
  

     app.post("/mpwork",(req,res)=>{
        var user = req.body.user;
        var request = require('request');
        var options = {
                  'method': 'POST',
                  'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zes_mp_work_ord_t/100/zes_mp_work_ord_t/zes_mp_work_ord_t',
                  'headers': {
                    'Content-Type': 'text/xml;charset=UTF-8',
                    'SOAPAction': 'urn:sap-com:document:sap:rfc:functions:ZES_MP_WORK_ORD_T:ZFM_MP_WORK_ORD_TRequest',
                    'Authorization': 'Basic QWJhcGVyMTpBYmFwZXJAMTIz',
                    'Cookie': 'sap-usercontext=sap-client=100'
                  },
                  body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_MP_WORK_ORD_T>\r\n         <!--Optional:-->\r\n         <RETURN>\r\n            \r\n         </RETURN>\r\n         <!--Optional:-->\r\n         <WO_LIST>\r\n            <!--Zero or more repetitions:-->\r\n            \r\n         </WO_LIST>\r\n         <ZPLANNER_GROUP>010</ZPLANNER_GROUP>\r\n         <ZPLANNING_PLANT>0001</ZPLANNING_PLANT>\r\n      </urn:ZFM_MP_WORK_ORD_T>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
                
                };
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
        var result227 = convert.xml2json(response.body, {
          compact: true,
          spaces: 4 
         }); 
         const result3 = JSON.parse(result227);
         console.log(result3);
         console.log(result3['soap-env:Envelope']['soap-env:Body']['n0:ZFM_MP_WORK_ORD_TResponse']['WO_LIST']['item']);
         res.json({
          data227:result3['soap-env:Envelope']['soap-env:Body']['n0:ZFM_MP_WORK_ORD_TResponse']['WO_LIST']['item']
         });
         });
         });

         app.listen(3030,()=>{

          console.log("Server running at port 3030");
        
        })


