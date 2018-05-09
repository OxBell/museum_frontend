import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    const user = {email: 'test@test.com', password: 'test974'};
    this.authService.login(user);
  }

}
