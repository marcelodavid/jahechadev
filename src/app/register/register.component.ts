import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registro = 
  {
  	nombre : "",
  	apellido : "",
    email : "",
    telefono : "",
    automodelo : "",
    numerochapa : ""
  } ; 
  constructor() { }

  ngOnInit() {
  }


}
