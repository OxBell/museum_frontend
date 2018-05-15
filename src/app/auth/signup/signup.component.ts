import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  register() {
    const user = {name: 'Dylan Boyer', email: 'test@test.com', password: 'test974', password_confirmation: 'test974'};
    this.authService.register(user);
  }

  onSubmit(form: NgForm) {
    const user = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      password_confirmation: form.value.conf_password
    };
    console.log(user);
    this.authService.register(user);
  }

}
