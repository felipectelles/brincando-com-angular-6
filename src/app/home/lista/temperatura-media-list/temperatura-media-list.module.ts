import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2TableModule } from 'ng2-table';
import { TemperaturaMediaListComponent } from './temperatura-media-list.component';

@NgModule({
    declarations: [TemperaturaMediaListComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule, 
        Ng2TableModule, 
        MatTableModule,
        MatPaginatorModule,
        MatSortModule],
    exports: [TemperaturaMediaListComponent]    
})
export class TemperaturaMediaListModule {}