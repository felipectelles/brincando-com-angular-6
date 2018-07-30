import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoBrowserGraficoComponent } from './acesso-browser-grafico.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [AcessoBrowserGraficoComponent],
    imports: [
        CommonModule,
        ChartsModule
    ],
    exports: [AcessoBrowserGraficoComponent]
})
export class AcessoBrowserGraficoModule { }