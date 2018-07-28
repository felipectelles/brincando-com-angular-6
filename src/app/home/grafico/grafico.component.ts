import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Token } from '../../core/entitiy/token';
import { AcessoBrowser } from '../../core/entitiy/acesso-browser';
import { TemperaturaMedia } from '../../core/entitiy/temperatura-media';
import { HomeService } from '../home.service';

@Component({
    selector: 'ft-grafico',
    templateUrl: './grafico.component.html'
})
export class GraficoComponent {}