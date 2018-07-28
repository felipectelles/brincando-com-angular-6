import { NgModule } from '@angular/core';

import { ListaComponent } from './lista.component';
import { AcessoBrowserListModule } from './acesso-browser-list/acesso-browser-list.module';
import { TemperaturaMediaListModule } from './temperatura-media-list/temperatura-media-list.module';

@NgModule({
    imports:[
        AcessoBrowserListModule,
        TemperaturaMediaListModule
    ],
    exports: [
        ListaComponent
    ],
    declarations: [ListaComponent]
})
export class ListaModule{

}