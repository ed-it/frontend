import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MarketRoutingModule } from './market-routes.module';

import { MarketComponent } from './market.component';
import { MarketToolbarComponent } from './toolbar/market-toolbar.component';

@NgModule({
  imports: [CommonModule, FormsModule, NgbModule.forRoot(), MarketRoutingModule],
  declarations: [MarketToolbarComponent, MarketComponent],
  exports: [MarketComponent]
})
export class MarketModule {}
