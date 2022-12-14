import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../app.component.css']
})
export class LoginComponent {

  constructor(private router:Router) { }
  loginForm = new FormGroup({
    email: new FormControl( '',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  routeToAccount() {
  this.router.navigate(['account']);
}
}
