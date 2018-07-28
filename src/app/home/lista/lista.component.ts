import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Token } from '../../core/entitiy/token';
import { ListaService } from './lista.service';
import { AcessoBrowser } from '../../core/entitiy/acesso-browser';
import { TemperaturaMedia } from '../../core/entitiy/temperatura-media';

@Component({
    selector: 'ft-lista',
    templateUrl: './lista.component.html'
})
export class ListaComponent {

    constructor() { }

}