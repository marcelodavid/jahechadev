import { Component, OnInit } from '@angular/core';

interface Login {
  email: String;
  password: String;
}

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
  
  constructor() { }

  ngOnInit() {
  }

}
