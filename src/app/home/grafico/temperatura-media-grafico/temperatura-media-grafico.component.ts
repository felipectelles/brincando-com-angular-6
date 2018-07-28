import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { TemperaturaMediaDataSource } from '../../lista/temperatura-media-list/temperatura-media-datasource';
import { TemperaturaMedia } from '../../../core/entitiy/temperatura-media';

@Component({
    selector: 'ft-temperatura-media-grafico',
    templateUrl: './temperatura-media-grafico.component.html'
})
export class TemperaturaMediaGraficoComponent {

    public lineChartData:Array<any> = [];

    public lineChartLabels:Array<any> = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }
    
    ngOnInit(){
        this.startChart(this.prepareTemperaturaMedia(this.activatedRoute.snapshot.data.temperaturaMediaList));
    }

    startChart(temperaturaMedia:TemperaturaMedia[]){
        let temperaturaPorCidade: Array<any>;
        temperaturaMedia.forEach(temperatura => {            
            let teste = {data:[], label: ''};
            temperaturaPorCidade = [];
            teste.label = temperatura.cidade;
            temperatura.temperaturaMediaMensal.forEach(temperaturaMedia => {
                teste.data.push(temperaturaMedia.media);
            });
            this.lineChartData.push(teste);
        });
    }
    
    prepareTemperaturaMedia(response){
        let temperaturaMediaList: TemperaturaMedia[] = [];
        
        response.forEach(element => {
            let temperaturaMedia: TemperaturaMedia = new TemperaturaMedia();
            temperaturaMedia.cidade = element.name;
            temperaturaMedia.temperaturaMediaMensal = [];

            let janeiro = element.data.filter(data => data[0].split('-')[1]=='01');
            let totalJaneiro = janeiro.reduce((acumulador, temperatura) => acumulador += temperatura[1], 0);

            temperaturaMedia.temperaturaMediaMensal.push({
                mes: 'Jan',
                media: +(totalJaneiro/janeiro.length).toFixed(2)
            });

            let fevereiro = element.data.filter(data => data[0].split('-')[1]=='02');
            let totalFevereiro = fevereiro.reduce((acumulador, temperatura) => acumulador += temperatura[1], 0);

            temperaturaMedia.temperaturaMediaMensal.push({
                mes: 'Fev',
                media: +(totalFevereiro/fevereiro.length).toFixed(2)
            });

            let marco = element.data.filter(data => data[0].split('-')[1]=='03');
            let totalMarco = marco.reduce((acumulador, temperatura) => acumulador += temperatura[1], 0);

            temperaturaMedia.temperaturaMediaMensal.push({
                mes: 'Mar',
                media: +(totalMarco/marco.length).toFixed(2)
            });

            let abril = element.data.filter(data => data[0].split('-')[1]=='04');
            let totalAbril = abril.reduce((acumulador, temperatura) => acumulador += temperatura[1], 0);

            temperaturaMedia.temperaturaMediaMensal.push({
                mes: 'Abr',
                media: +(totalAbril/abril.length).toFixed(2)
            });

            let maio = element.data.filter(data => data[0].split('-')[1]=='05');
            let totalMaio = maio.reduce((acumulador, temperatura) => acumulador += temperatura[1], 0);

            temperaturaMedia.temperaturaMediaMensal.push({
                mes: 'Mai',
                media: +(totalMaio/maio.length).toFixed(2)
            });

            let junho = element.data.filter(data => data[0].split('-')[1]=='06');
            let totalJunho = junho.reduce((acumulador, temperatura) => acumulador += temperatura[1], 0);

            temperaturaMedia.temperaturaMediaMensal.push({
                mes: 'Jun',
                media: +(totalJunho/junho.length).toFixed(2)
            });

            let julho = element.data.filter(data => data[0].split('-')[1]=='07');
            let totalJulho = julho.reduce((acumulador, temperatura) => acumulador += temperatura[1], 0);

            temperaturaMedia.temperaturaMediaMensal.push({
                mes: 'Jul',
                media: +(totalJulho/julho.length).toFixed(2)
            });

            let agosto = element.data.filter(data => data[0].split('-')[1]=='08');
            let totalAgosto = agosto.reduce((acumulador, temperatura) => acumulador += temperatura[1], 0);

            temperaturaMedia.temperaturaMediaMensal.push({
                mes: 'Ago',
                media: +(totalAgosto/agosto.length).toFixed(2)
            });

            let setembro = element.data.filter(data => data[0].split('-')[1]=='09');
            let totalSetembro = setembro.reduce((acumulador, temperatura) => acumulador += temperatura[1], 0);

            temperaturaMedia.temperaturaMediaMensal.push({
                mes: 'Set',
                media: +(totalSetembro/setembro.length).toFixed(2)
            });

            let outubro = element.data.filter(data => data[0].split('-')[1]=='10');
            let totalOutubro = outubro.reduce((acumulador, temperatura) => acumulador += temperatura[1], 0);

            temperaturaMedia.temperaturaMediaMensal.push({
                mes: 'Out',
                media: +(totalOutubro/outubro.length).toFixed(2)
            });

            let novembro = element.data.filter(data => data[0].split('-')[1]=='11');
            let totalNovembro = novembro.reduce((acumulador, temperatura) => acumulador += temperatura[1], 0);

            temperaturaMedia.temperaturaMediaMensal.push({
                mes: 'Nov',
                media: +(totalNovembro/novembro.length).toFixed(2),
            });

            let dezembro = element.data.filter(data => data[0].split('-')[1]=='12');
            let totalDezembro = dezembro.reduce((acumulador, temperatura) => acumulador += temperatura[1], 0);

            temperaturaMedia.temperaturaMediaMensal.push({
                mes: 'Dez',
                media: +(totalDezembro/dezembro.length).toFixed(2)
            });
            temperaturaMediaList.push(temperaturaMedia);
        });
        return temperaturaMediaList;
    }

    public lineChartOptions:any = {
        responsive: true
    };

    public lineChartColors:Array<any> = [
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];

    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';
}