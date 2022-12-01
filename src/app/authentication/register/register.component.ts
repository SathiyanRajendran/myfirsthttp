import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private _auth:AuthserviceService) { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      'email':new FormControl(null,[Validators.email,Validators.required]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(8)])
    })
  }
  onRegister(){
    const email=this.registerForm.get('email')?.value;
    const password=this.registerForm.get('password')?.value;
    this._auth.RegisterUser(email,password);
  }

}
