import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { CadastroComponent } from './home/cadastro/cadastro.component';
import { NotFoundComponent } from './core/errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AcessoBrowserResolver } from './core/resolvers/acesso-browser.resolver';
import { TemperaturaMediaResolver } from './core/resolvers/temperatura-media.resolver';

const routes: Routes = [
    { path: '', component: CadastroComponent },
    { path: 'home/:token', component: HomeComponent, resolve: 
        {acessoBrowserList: AcessoBrowserResolver, temperaturaMediaList: TemperaturaMediaResolver}
     },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }