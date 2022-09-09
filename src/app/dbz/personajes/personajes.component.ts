import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  // Pasar funcionalidades de un padre a un hijo
  // @Input('personajes') personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService ) {}

}
