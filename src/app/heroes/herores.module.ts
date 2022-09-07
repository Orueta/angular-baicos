import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeoreComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  // Indica que cosas contiene este modulo COMPONENTES
  declarations: [
    HeoreComponent,
    ListadoComponent
  ],

  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {

}
