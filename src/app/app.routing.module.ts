import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { CadastroComponent } from './home/cadastro/cadastro/cadastro.component';
import { NotFoundComponent } from './core/errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HomeAcessoBrowserResolver } from './home/home-acesso-browser.resolver';
import { HomeTemperaturaMediaResolver } from './home/home-temperatura-media.resolver';

const routes: Routes = [
    { path: '', component: CadastroComponent },
    { path: 'home/:token', component: HomeComponent, resolve: 
        {acessoBrowserList: HomeAcessoBrowserResolver, temperaturaMediaList: HomeTemperaturaMediaResolver}
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