import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

    constructor(private http: Http) {}

    apiUrl = 'http://127.0.0.1:8000/api'

    registerUser(user: User) {
        console.log('authService registerUser', user);
        const url = this.apiUrl + `/register`;
        this.http.post(url, user).subscribe(res => console.log(res.json()));
    }

}
