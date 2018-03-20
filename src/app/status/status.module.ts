import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StatusRoutingModule } from './status-routing.module';

import { StatusComponent } from './status.component';
import { ShipStatus } from './ship-status/ship-status.component';
import { PipsDisplay } from './pips-display/pips-display.component';

@NgModule({
  imports: [CommonModule, NgbModule.forRoot(), StatusRoutingModule],
  declarations: [ShipStatus, PipsDisplay, StatusComponent],
  exports: [StatusComponent]
})
export class StatusModule {}
