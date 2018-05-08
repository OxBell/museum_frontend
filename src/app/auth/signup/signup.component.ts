import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  register() {
    const user = {name: 'Dylan Boyer', email: 'test@test.com', password: 'test974', password_confirmation: 'test974'};
    console.log('register', user);
    this.authService.registerUser(user);
  }

}
