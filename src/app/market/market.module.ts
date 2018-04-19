import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';

// Reducers
import { reducers, effects } from './store';

// Containers
import { MarketContainerComponent } from './containers/market-container/market-container.component';

// Components
import { MarketToolbarComponent } from './components/market-toolbar/market-toolbar.component';
import { MarketCategoriesComponent } from './components/market-categories/market-categories.component';
import { MarketTableComponent } from './components/market-table/market-table.component';

// Services
import { MarketService } from './services/market.service';
import { MarketStream } from './services/market-stream.service';

// Pipes
import { MarketPipesModule } from './pipes/market-pipes.module';

// Routing
import { MarketRoutingModule } from './routes/market.routes';

// Guards
import { MarketGuard } from './guards/market.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('market', reducers),
    EffectsModule.forFeature(effects),
    MarketRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    MarketPipesModule
  ],
  providers: [MarketService, MarketGuard],
  declarations: [MarketTableComponent, MarketToolbarComponent, MarketCategoriesComponent, MarketContainerComponent]
})
export class MarketModule {}
