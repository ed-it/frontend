import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StatusRoutingModule } from './status.routing';

import { StatusComponent } from './status.component';
import { ShipStatus } from './ship-status/ship-status.component';
import { PipsDisplay } from './pips-display/pips-display.component';

@NgModule({
  imports: [CommonModule,StatusRoutingModule, NgbModule.forRoot()],
  declarations: [ShipStatus, PipsDisplay, StatusComponent],
  exports: [StatusComponent]
})
export class StatusModule {}
