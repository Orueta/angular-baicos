import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input('nuevo') nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }

  // Para poder acceder a nuestros servicios se tiene que inyectar en el constructor
  constructor( private dbzService: DbzService) {}

  // Sirve para emitir eventos
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar () {

    if (this.nuevo.nombre.trim().length === 0) { return; }

    // this.onNuevoPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonajes( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
