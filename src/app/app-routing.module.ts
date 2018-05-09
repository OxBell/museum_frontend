import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { GalleriesComponent } from './galleries/galleries.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'galleries', component: GalleriesComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
