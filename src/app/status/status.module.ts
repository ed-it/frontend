import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StatusRoutingModule } from './status-routing.module';

import { StatusComponent } from './status.component';
import { ShipStatus } from './ship-status/ship-status.component';
import { PipsDisplayComponent } from './pips-display/pips-display.component';

import { PipDisplayPipe } from './pips-display/pip-pipe';

import { ReversePipe } from '../shared/pipes/reverse';

@NgModule({
  imports: [CommonModule, NgbModule.forRoot(), StatusRoutingModule],
  declarations: [PipDisplayPipe, ReversePipe, ShipStatus, PipsDisplayComponent, StatusComponent],
  exports: [PipDisplayPipe, ReversePipe, StatusComponent]
})
export class StatusModule {}
