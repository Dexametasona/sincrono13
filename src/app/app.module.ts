import { CompSinc13Module } from './comp-sinc13/comp-sinc13.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompSinc13Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
