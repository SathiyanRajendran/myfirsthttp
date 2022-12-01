import { Component, OnInit } from '@angular/core';
import firebase from "firebase/compat/app";
import { AuthserviceService } from './authentication/authservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myfirsthttp';
  constructor(public _auth:AuthserviceService){}
  ngOnInit(){
    const firebaseConfig={
      apiKey:"AIzaSyCTFpyzFpPtPIyxreeqLx4b198MikPfa88",
    };
    firebase.initializeApp(firebaseConfig)
  }
  onLogout(){
    this._auth.logout();
  }
}
