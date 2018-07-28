import { NgModule } from '@angular/core';

import { GraficoComponent } from './grafico.component';
import { AcessoBrowserGraficoModule } from './acesso-browser-grafico/acesso-browser-grafico.module';
import { TemperaturaMediaGraficoModule } from './temperatura-media-grafico/temperatura-media-grafico.module';

@NgModule({
    imports:[
        AcessoBrowserGraficoModule,
        TemperaturaMediaGraficoModule
    ],
    exports: [
        GraficoComponent
    ],
    declarations: [GraficoComponent]
})
export class GraficoModule{

}