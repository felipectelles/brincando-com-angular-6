import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Token } from '../entity/token';

const API_URL = 'https://www.improving.com.br/api/test/city-temperatures';

@Injectable({
    providedIn: 'root'
})
export class TemperaturaMediaService{

    constructor(private http:HttpClient){}

    getTemperaturaMedia(token: Token){
        return this.http.post(API_URL, token);
    }

}