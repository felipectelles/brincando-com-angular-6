import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Token } from '../core/entitiy/token';

const API_URL_BROWSER = 'https://www.improving.com.br/api/test/hits-by-browser';
const API_URL_TEMPERATURA = 'https://www.improving.com.br/api/test/city-temperatures';

@Injectable({
    providedIn: 'root'
})
export class HomeService{

    constructor(private http:HttpClient){}

    getAcessoBrowser(token: Token){
        return this.http.post(API_URL_BROWSER, token);
    }

    getTemperaturaMedia(token: Token){
        return this.http.post(API_URL_TEMPERATURA, token);
    }

}