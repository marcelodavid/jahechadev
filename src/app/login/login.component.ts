import { Component, OnInit } from '@angular/core';
import { Login } from '../interfaces/login.interface';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


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
  
  constructor(
		private auth:AuthenticationService,
		private router:Router	
	) { }

  ngOnInit() {
  }
  
  logIn(){
    this.auth.loginWithEmailandPass(this.login)
      .then(result => {
      	this.router.navigate(['/maps']); 
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
