import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2TableModule } from 'ng2-table';
import { AcessoBrowserListComponent } from './acesso-browser-list.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule } from '@angular/material';

@NgModule({
    declarations: [AcessoBrowserListComponent],
    imports: [
        CommonModule, 
        BrowserAnimationsModule, 
        Ng2TableModule, 
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatCardModule
    ],
    exports: [AcessoBrowserListComponent]
})
export class AcessoBrowserListModule { }