import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ft-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

    tableMode: boolean = true;
    tituloBotaoAlternar: string = '';

    constructor() { }

    ngOnInit(){
        this.alternate();
    }

    alternate() {
        if(this.tableMode){
            this.tableMode = false;
            this.tituloBotaoAlternar = 'Visualizar Tabela';
        }else{
            this.tableMode = true;
            this.tituloBotaoAlternar = 'Visualizar Gráfico';
        }
    }
}