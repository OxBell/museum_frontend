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

  onSubmit(form: NgForm) {
    const user = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      password_confirmation: form.value.conf_password
    };
    this.authService.register(user);
  }

}
