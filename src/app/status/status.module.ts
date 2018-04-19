import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';

import { reducers, effects } from './store';

// Containers
import { StatusContainerComponent } from './containers/status-container/status-container.component';

// Components

// Services
import { StatusService } from './services/status.service';
// Routing
import { StatusRoutingModule } from './routes/status.routing';

// Guards
import {StatusGuard} from './guards/status.guard';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('status', reducers),
    EffectsModule.forFeature(effects),
    StatusRoutingModule
  ],
  declarations: [StatusContainerComponent],
  providers: [StatusService, StatusGuard]
})
export class StatusModule {}
