import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule} from '@angular/forms';

// Authentications modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Services
import { AuthenticationService } from './services/authentication.service';
import { MapsTrackerService } from './services/maps-tracker.service';
import { MapsComponent } from './maps/maps.component';

export const firebaseConfig = {
	apiKey: "AIzaSyCvK3DdmoTzotaBi2gFwev46S6UByyEYSI",
	authDomain: "jahecha-b637b.firebaseapp.com",
	databaseURL: "https://jahecha-b637b.firebaseio.com",
	projectId: "jahecha-b637b",
	storageBucket: "jahecha-b637b.appspot.com",
	messagingSenderId: "467169590612"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule 
  ],
  providers: [AuthenticationService,MapsTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
