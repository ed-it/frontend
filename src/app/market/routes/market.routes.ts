import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarketContainerComponent } from '../containers/market-container/market-container.component';
import { MarketGuard } from '../guards/market.guard';

const routes: Routes = [
  {
    path: 'market',
    canActivate: [MarketGuard],
    children: [{ path: '', component: MarketContainerComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule {}
