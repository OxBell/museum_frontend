import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { GalleriesComponent } from './galleries/galleries.component';
import { GalleriesService } from './galleries/galleries.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { GallerieComponent } from './galleries/gallerie/gallerie.component';
import { HeaderComponent } from './navigation/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    GalleriesComponent,
    NotFoundComponent,
    GallerieComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [AuthService, GalleriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
