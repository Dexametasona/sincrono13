import { AsincronoComponent } from './comp-sinc13/asincrono/asincrono.component';
import { Ejercicio2Component } from './comp-sinc13/ejercicio2/ejercicio2.component';
import { Ejercicio1Component } from './comp-sinc13/ejercicio1/ejercicio1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'ejercicio1', component:Ejercicio1Component},
  {path:'ejercicio2', component:Ejercicio2Component},
  {path:'asincrono', component:AsincronoComponent},
  {path:'', redirectTo:'/ejercicio1', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
