import 'package:flutter/material.dart';
import 'package:maintenance_portal/screens/workorder.dart';


import 'package:maintenance_portal/screens/notifi_list.dart';


class Dahboard extends StatelessWidget {
  const Dahboard({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Dashboard',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      
      home: Dashboard(title: 'Dashboard'),
    );
  }
}

class Dashboard extends StatelessWidget {
  const Dashboard({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    
    
    return Scaffold(
      backgroundColor: Color.fromARGB(255, 197, 241, 251),
      appBar: AppBar(
        title: Text(title),
      ),
      body: Center(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
             Padding(padding: EdgeInsets.only(left: 5)),
            ElevatedButton(
              
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => WorkOrder()),
                );
                
              },
              child: Image.network(
    'https://t3.ftcdn.net/jpg/05/34/11/38/360_F_534113825_Pj8pU1cnr1tLFH5SSi0cnDvsha4jwjp5.jpg',width: 350,height: 300,fit: BoxFit.cover)

             
            ),
            SizedBox(
              width: 20,
            ),
            
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => Notifi_List()),
                );
              },
        
  
              child: Image.asset('assets/SAP.png',width: 350,height: 300,fit: BoxFit.cover)
            ),
          ],
        ),
      ),
    );
  }
}


