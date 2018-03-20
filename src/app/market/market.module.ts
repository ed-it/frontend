import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';

import { fetchMarket } from './reducers/fetch-market';

import { MarketRoutingModule } from './market-routes.module';

import { MarketComponent } from './market.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    StoreModule.forRoot({ market: fetchMarket }),
    MarketRoutingModule
  ],
  declarations: [MarketComponent],
  exports: [MarketComponent]
})
export class MarketModule {}
