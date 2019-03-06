import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
	{path: 'login', component: LoginComponent },
	{path: 'register', component: RegisterComponent },
	{path: 'maps', component: MapsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
