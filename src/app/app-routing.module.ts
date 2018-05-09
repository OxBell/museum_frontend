import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GallerieComponent } from './galleries/gallerie/gallerie.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'galleries', component: GalleriesComponent},
    { path: 'galleries/:id', component: GallerieComponent},
    { path: '**', component: NotFoundComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
