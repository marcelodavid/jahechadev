import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Register } from '../interfaces/register.interface';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  register : Register ={
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    telefono: "",
    modelodeauto: "",
    chapaidentificatoria: ""
  }

  constructor (private auth:AuthenticationService) { }


  ngOnInit() {
  }

  newregister(){
    this.auth.registerWithEmailandPass(this.register)
      .then(result => {
        console.log("exitoso: ", result);   
      })
      .catch(err => {
        console.log("error: ", err);
      })
  }

}
