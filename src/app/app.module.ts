import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { GalleriesComponent } from './galleries/galleries.component';
import { GalleriesService } from './galleries/galleries.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    GalleriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [AuthService, GalleriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
