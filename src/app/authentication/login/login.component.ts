import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private _auth:AuthserviceService) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      'email':new FormControl(null,[Validators.email,Validators.required]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(8)])
    })
  }
  onLogin(){
    const email=this.loginForm.get('email')?.value;
    const password=this.loginForm.get('password')?.value;
    this._auth.LoginUser(email,password);
  }

}
