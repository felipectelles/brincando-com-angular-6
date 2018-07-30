import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './core/errors/errors.module';
import { HomeModule } from './home/home.module';
import { GlobalErrorHandlerService } from './core/service/global-error-handler.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ErrorsModule,
    HomeModule,
    MatToolbarModule
  ],
  bootstrap: [AppComponent],
  providers: [
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ]
})
export class AppModule { }
