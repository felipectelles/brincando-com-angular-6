import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AcessoBrowser } from '../../../core/entitiy/acesso-browser';

@Component({
    selector: 'ft-acesso-browser-grafico',
    templateUrl: './acesso-browser-grafico.component.html'
})
export class AcessoBrowserGraficoComponent implements OnInit{
    
    // Doughnut
    public doughnutChartLabels:string[] = [];
    public doughnutChartData:number[] = [];
    public doughnutChartType:string = 'doughnut';


    constructor(
        private activatedRoute: ActivatedRoute
    ) { }
    
    ngOnInit(){
        this.startChart(this.prepareAcessoBrowser(this.activatedRoute.snapshot.data.acessoBrowserList));
    }

    prepareAcessoBrowser(response): AcessoBrowser[] {
        const contador: number = this.getToltalAcessoBrowser(response);

        let acessoBrowserList: AcessoBrowser[] = [];

        response.forEach(element => {
            let acesso: AcessoBrowser = new AcessoBrowser();
            acesso.porcentagem = +((element[1] * 100) / contador).toFixed(2);
            acesso.navegador = element[0];
            acessoBrowserList.push(acesso);
        });
        return acessoBrowserList;
    }

    getToltalAcessoBrowser(response){
        return response.reduce((acumulador, valorAtual) => acumulador + valorAtual[1], 0);
    }

    startChart(acessoBrowser:AcessoBrowser[]){
        acessoBrowser.forEach(acesso => {
            this.doughnutChartLabels.push(acesso.navegador);
            this.doughnutChartData.push(acesso.porcentagem);
        });
    }
}