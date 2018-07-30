import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { AcessoBrowserService } from '../service/acesso-browser.service';
import { Token } from '../entity/token';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AcessoBrowserResolver implements Resolve<Observable<Object>> {
    constructor(private service: AcessoBrowserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = new Token();
        token.token = route.paramMap.get('token');
        return this.service.getAcessoBrowser(token);
    }
}