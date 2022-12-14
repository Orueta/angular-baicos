import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] =[];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor( private dbzService: DbzService ) {
  }

}
