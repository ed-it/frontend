import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LocationComponent } from './location.component';

@NgModule({
  imports: [CommonModule, NgbModule.forRoot()],
  declarations: [LocationComponent],
  exports: [LocationComponent]
})
export class LocationModule {}
