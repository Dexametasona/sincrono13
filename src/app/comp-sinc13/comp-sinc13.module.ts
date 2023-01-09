import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { AsincronoComponent } from './asincrono/asincrono.component';



@NgModule({
  declarations: [
    Ejercicio1Component,
    Ejercicio2Component,
    AsincronoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Ejercicio1Component,
    Ejercicio2Component,
    AsincronoComponent
  ]
})
export class CompSinc13Module { }
