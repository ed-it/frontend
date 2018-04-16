import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';

import { MarketRoutingModule } from './market-routes.module';

import { MarketComponent } from './market.component';
import { MarketToolbarComponent } from './market-toolbar/market-toolbar.component';
import { MarketResolver } from './market.resolver';
import { MarketApi } from './market-api.service';

import { KeyArrayPipe } from './pipes/key-array';
import { IsDisabledPipe } from './pipes/is-disabled';
import { GetCommoditiesPipe } from './pipes/get-commodities';
import { GoodBuyPipe } from './pipes/good-buy';
import { BadSellPipe } from './pipes/bad-sell';
import { ProfitPipe } from './pipes/profit';
import { marketReducer } from './market-reducer';
import { marketToolbarReducer } from './market-toolbar/market-toolbar.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    MarketRoutingModule
  ],
  declarations: [
    KeyArrayPipe,
    IsDisabledPipe,
    GoodBuyPipe,
    BadSellPipe,
    GetCommoditiesPipe,
    ProfitPipe,
    MarketComponent,
    MarketToolbarComponent
  ],
  exports: [
    KeyArrayPipe,
    IsDisabledPipe,
    GoodBuyPipe,
    BadSellPipe,
    GetCommoditiesPipe,
    ProfitPipe,
    MarketComponent,
    MarketToolbarComponent
  ],
  providers: [MarketApi, MarketResolver]
})
export class MarketModule {}
