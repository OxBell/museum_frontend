import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GalleriesService {

    private apiUrl = 'http://127.0.0.1:8000/api';

    constructor(private http: Http) {}

    getAll() {
        const url = this.apiUrl + `/galleries`;
        // this.http.get(url).subscribe(res => {
        //     console.log(res.json());
        //     this.galleries = res.json();
        // });
        return this.http.get(url);
    }

    get(id) {
        const url = this.apiUrl + `/galleries/` + id;
        return this.http.get(url);
    }

}
