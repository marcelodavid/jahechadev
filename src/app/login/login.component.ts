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
    this.auth.loginWithEmailandPass(this.login)
      .then(result => {
        console.log("exitoso: ", result);   
      })
      .catch(err => {
        console.log("error: ", err);
      })
  }

  loginWithFacebook(){
    this.auth.loginWithFacebook()
      .then(result => {
        console.log("login with Facebook: ", result); 
      })
      .catch(err => {
        console.log("somethings wrong...: ", err);
      })
  }

  loginWithGoogle(){
    this.auth.loginWithGoogle()
      .then(result => {
        console.log("login with google: ", result);
      })
      .catch(err => {
        console.log("somethings wrong: ", err);
      })
  }
}
