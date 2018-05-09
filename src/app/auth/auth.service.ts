import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

    private apiUrl = 'http://127.0.0.1:8000/api';

    constructor(private http: Http) {}

    register(user: User) {
        const url = this.apiUrl + `/register`;
        this.http.post(url, user).subscribe(res => console.log(res.json()));
    }

    login(user) {
        const url = this.apiUrl + `/login`;
        this.http.post(url, user).subscribe(res => console.log(res.json()));
    }

}
