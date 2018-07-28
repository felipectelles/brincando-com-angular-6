import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { HomeService } from './home.service';
import { Token } from '../core/entitiy/token';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomeAcessoBrowserResolver implements Resolve<Observable<Object>> {
    constructor(private service: HomeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = new Token();
        token.token = route.paramMap.get('token');
        return this.service.getAcessoBrowser(token);
    }
}