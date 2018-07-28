import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { HomeService } from './home.service';
import { Token } from '../core/entitiy/token';
import { Observable } from 'rxjs';
import { AcessoBrowser } from '../core/entitiy/acesso-browser';

@Injectable({
    providedIn: 'root'
})
export class HomeTemperaturaMediaResolver implements Resolve<Observable<Object>> {
    constructor(private service: HomeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = new Token();
        token.token = route.paramMap.get('token');
        return this.service.getTemperaturaMedia(token);
    }
}