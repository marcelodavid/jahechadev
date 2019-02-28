import { Component, OnInit } from '@angular/core';
import { Login } from '../interfaces/login.interface';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login = {
    email: "",
    password: ""
  }
  
  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
  }
  
  logIn(){
    this.auth.loginWithEmailandPass(this.login);
  }
}
