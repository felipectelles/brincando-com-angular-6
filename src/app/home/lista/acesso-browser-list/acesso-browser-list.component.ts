import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';

import { AcessoBrowser } from '../../../core/entity/acesso-browser';
import { AcessoBrowserDataSource } from './acesso-browser-datasource';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ft-acesso-browser-list',
    templateUrl: 'acesso-browser-list.component.html'
})
export class AcessoBrowserListComponent implements OnInit {

    @Input() acessoBrowserList: AcessoBrowser[] = [];

    @ViewChild(MatSort) sort: MatSort;
    dataSource: AcessoBrowserDataSource;
    data: AcessoBrowser[];
    constructor(
        private activatedRoute: ActivatedRoute
    ) { }
    

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['navegador', 'porcentagem'];

    ngOnInit() {
        this.data = this.prepareAcessoBrowser(this.activatedRoute.snapshot.data.acessoBrowserList);
        this.dataSource = new AcessoBrowserDataSource(this.data, this.sort);
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

}