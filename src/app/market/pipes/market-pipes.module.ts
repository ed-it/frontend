import { NgModule } from '@angular/core';

import { BadSellPipe } from './pipes/market-bad-sell';
import { GetCommoditiesPipe } from './pipes/get-commodities';
import { GoodBuyPipe } from './pipes/market-good-buy';
import { IsDisabledPipe } from './pipes/market-tab-disabled';
import { ProfitPipe } from './pipes/market-profit';

@NgModule({
  declarations: [BadSellPipe, GetCommoditiesPipe, GoodBuyPipe, IsDisabledPipe, ProfitPipe],
  exports: [BadSellPipe, GetCommoditiesPipe, GoodBuyPipe, IsDisabledPipe, ProfitPipe]
})
export class MarketPipesModule {}
