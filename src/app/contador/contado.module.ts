import { ContadorComponent } from './contador/contado.component';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports: [
    ContadorComponent
  ]
})
export class ContadorModule {

}
