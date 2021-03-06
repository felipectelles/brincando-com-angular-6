import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Token } from '../entity/token';

const API_URL = 'https://www.improving.com.br/api/test/hits-by-browser';

@Injectable({
    providedIn: 'root'
})
export class AcessoBrowserService{

    constructor(private http:HttpClient){}

    getAcessoBrowser(token: Token){
        return this.http.post(API_URL, token);
    }

}