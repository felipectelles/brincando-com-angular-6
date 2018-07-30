import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { CadastroModule } from './cadastro/cadastro.module';
import { ListaModule } from './lista/lista.module';
import { GraficoModule } from './grafico/grafico.module';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CadastroModule,
    ListaModule,
    GraficoModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
