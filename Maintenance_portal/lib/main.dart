import 'package:flutter/material.dart';
import 'package:maintenance_portal/screens/dashboard.dart';
import 'package:maintenance_portal/screens/login_screen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Login UI',
      debugShowCheckedModeBanner: false,
      home: LoginScreen(),
      routes: {
      
      '/dah': (context) => Dahboard(),
    },
    );
  }
}
