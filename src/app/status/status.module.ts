import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';

import { reducers, effects } from './store';

// Containers
import { StatusContainerComponent } from './containers/status-container/status-container.component';

// Components
import { PipsDisplayComponent } from './components/pips-display/pips-display.component';
import { ShipStatusComponent } from './components/ship-status/ship-status.component';

// Services
import { StatusService } from './services/status.service';
// Routing
import { StatusRoutingModule } from './routes/status.routing';

// Guards
import { StatusGuard } from './guards/status.guard';

// Pipes
import { PipDisplayPipe } from './pipes/pip-display.pipe';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('status', reducers),
    EffectsModule.forFeature(effects),
    StatusRoutingModule,
    SharedModule
  ],
  declarations: [PipDisplayPipe, StatusContainerComponent, PipsDisplayComponent, ShipStatusComponent],
  providers: [StatusService, StatusGuard]
})
export class StatusModule {}
