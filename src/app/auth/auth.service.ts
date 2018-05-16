import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    private apiUrl = 'http://127.0.0.1:8000/api';

    constructor(private router: Router, private http: Http) {}

    register(user: User) {
        const url = this.apiUrl + `/register`;
        this.http.post(url, user).subscribe(res => {
            console.log('res', res);
            if (res) {
                this.router.navigate(['/']);
            }
        });
    }

    login(user) {
        const url = this.apiUrl + `/login`;
        this.http.post(url, user).subscribe(res => {
            console.log('res', res);
            if (res) {
                this.router.navigate(['/']);
            }
        });
    }

}
