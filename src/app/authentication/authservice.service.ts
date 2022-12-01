import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  currentToken?: string;
  constructor(private route:Router) { }
  RegisterUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(resp=>{
      console.log(resp)
    })
   .catch(error=>{
    console.log(error)
   })
  }
  LoginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(resp=>{
      this.getToken();
      //console.log(resp)
      this.route.navigate(['/book'])
    })
   .catch(error=>{
    console.log(error)
   })
  }
  getToken(){
    firebase.auth().currentUser?.getIdToken()
    .then(
      (token:string)=>{
        this.currentToken=token
      }
    );
    return this.currentToken;
  }
  isAuthenticated(){
    return this.currentToken != null ? true:false;
  }
  logout(){
    this.route.navigate(['/login']);
    firebase.auth().signOut();
    this.currentToken==null;
  }
}
