import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarketComponent } from './market.component';
import { MarketResolver } from './market.resolver';

const routes: Routes = [{ path: 'market', component: MarketComponent, resolve: { data: MarketResolver } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule {}
