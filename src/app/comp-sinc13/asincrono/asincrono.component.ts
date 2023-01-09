import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asincrono',
  templateUrl: './asincrono.component.html',
  styleUrls: ['./asincrono.component.scss']
})
export class AsincronoComponent implements OnInit {
  bd=[
    {
      "Apellido":"Arcilla",
      "Casado":false,
      "Dirección":"Calle 35 #43 28",
      "Nombre":"Diego",
      "Telefono":3859720
    },
    {
      "Apellido":"Bueno",
      "Casado":false,
      "Dirección":"CR 16A #53 28",
      "Nombre":"Kevin",
      "Telefono":31485579954
    },
    {
      "Apellido":"Palomino",
      "Casado":false,
      "Dirección":"CR 25 #52 33",
      "Nombre":"Natalia",
      "Telefono":32255945555
    }
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
