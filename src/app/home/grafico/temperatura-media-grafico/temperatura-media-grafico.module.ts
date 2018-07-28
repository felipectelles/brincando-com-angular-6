import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemperaturaMediaGraficoComponent } from './temperatura-media-grafico.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [TemperaturaMediaGraficoComponent],
    imports: [
        CommonModule,
        ChartsModule
    ],
    exports: [TemperaturaMediaGraficoComponent]
})
export class TemperaturaMediaGraficoModule {

}