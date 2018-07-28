import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AcessoBrowser } from '../core/entitiy/acesso-browser';
import { HomeService } from './home.service';
import { TemperaturaMedia } from '../core/entitiy/temperatura-media';
import { ToastrService } from 'ngx-toastr';
import { Token } from '../core/entitiy/token';

@Component({
    selector: 'ft-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    tableMode: boolean = false;
    tituloBotaoAlternar: string = 'Visualizar tabela';

    constructor() { }

    alternate() {
        if(this.tableMode){
            this.tableMode = false;
            this.tituloBotaoAlternar = 'Visualizar Tabela'
        }else{
            this.tableMode = true;
            this.tituloBotaoAlternar = 'Visualizar Gráfico'
        }
    }
}