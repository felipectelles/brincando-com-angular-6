import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { TemperaturaMediaService } from '../service/temperatura-media.service';
import { Token } from '../entity/token';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TemperaturaMediaResolver implements Resolve<Observable<Object>> {
    constructor(private service: TemperaturaMediaService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = new Token();
        token.token = route.paramMap.get('token');
        return this.service.getTemperaturaMedia(token);
    }
}