import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

    constructor(private http: Http) {}

    registerUser(user: User) {
        console.log('authService registerUser', user);
        const url = `http://127.0.0.1:8000/api/register`;
        this.http.post(url, user).subscribe(res => console.log(res.json()));
    }

}
