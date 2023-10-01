import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GenericService {

    constructor(private http: HttpClient,
    ) {
    }

    getMethod(url: string) {
        return this.http.get(url)
    }

    postMethod(url: string, body?: any) {
        return this.http.post(`${url}`, body, { observe: 'response' })
    }

    putMethod(url: string, body?: any) {
        return this.http.put(`${url}`, body, { observe: 'response' })
    }

    deleteMethod(url: string) {
        return this.http.delete(`${url}`, { observe: 'response' })
    }

}
